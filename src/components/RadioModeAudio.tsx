import React, { useState, useEffect } from 'react';
import { Card, Typography, Space, Button, List, Alert, Progress } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined, SoundOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

interface AudioItem {
  titulo: string;
  duracion: string;
  archivo: string;
}

interface RadioModeAudioProps {
  temaId: string;
  moduloId: string;
  grade: string;
  audioItems: AudioItem[];
}

const RadioModeAudio: React.FC<RadioModeAudioProps> = ({
  temaId,
  moduloId,
  grade,
  audioItems
}) => {
  const [currentAudio, setCurrentAudio] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioError, setAudioError] = useState<string>('');

  // Crear URLs de audio simuladas (en una implementación real, estos serían archivos reales)
  const getAudioUrl = (archivo: string): string => {
    // En una implementación real, estos archivos existirían en la carpeta public/audio/
    // Por ahora, simulamos con URLs de ejemplo
    return `/audio/${moduloId}/${grade}/${archivo}`;
  };

  // Verificar si un archivo de audio existe
  const checkAudioExists = async (url: string): Promise<boolean> => {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  };

  // Función para reproducir audio
  const playAudio = async (audioItem: AudioItem) => {
    const audioUrl = getAudioUrl(audioItem.archivo);
    
    // Verificar si el archivo existe
    const exists = await checkAudioExists(audioUrl);
    if (!exists) {
      setAudioError(`Audio no disponible: ${audioItem.titulo}`);
      return;
    }

    try {
      // Si hay un audio reproduciéndose, detenerlo
      if (currentAudio) {
        const currentAudioElement = document.getElementById(`audio-${currentAudio}`) as HTMLAudioElement;
        if (currentAudioElement) {
          currentAudioElement.pause();
          currentAudioElement.currentTime = 0;
        }
      }

      // Crear o encontrar el elemento de audio
      let audioElement = document.getElementById(`audio-${audioItem.archivo}`) as HTMLAudioElement;
      
      if (!audioElement) {
        audioElement = document.createElement('audio');
        audioElement.id = `audio-${audioItem.archivo}`;
        audioElement.src = audioUrl;
        audioElement.preload = 'metadata';
        document.body.appendChild(audioElement);
      }

      // Configurar eventos
      audioElement.onloadedmetadata = () => {
        setDuration(audioElement.duration);
      };

      audioElement.ontimeupdate = () => {
        setCurrentTime(audioElement.currentTime);
      };

      audioElement.onended = () => {
        setIsPlaying(false);
        setCurrentAudio(null);
        setCurrentTime(0);
      };

      audioElement.onerror = () => {
        setAudioError(`Error al cargar: ${audioItem.titulo}`);
        setIsPlaying(false);
        setCurrentAudio(null);
      };

      // Reproducir
      await audioElement.play();
      setCurrentAudio(audioItem.archivo);
      setIsPlaying(true);
      setAudioError('');

    } catch (error) {
      setAudioError(`Error al reproducir: ${audioItem.titulo}`);
      setIsPlaying(false);
      setCurrentAudio(null);
    }
  };

  // Función para pausar audio
  const pauseAudio = () => {
    if (currentAudio) {
      const audioElement = document.getElementById(`audio-${currentAudio}`) as HTMLAudioElement;
      if (audioElement) {
        audioElement.pause();
        setIsPlaying(false);
      }
    }
  };

  // Función para formatear tiempo
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Limpiar al desmontar
  useEffect(() => {
    return () => {
      if (currentAudio) {
        const audioElement = document.getElementById(`audio-${currentAudio}`) as HTMLAudioElement;
        if (audioElement) {
          audioElement.pause();
        }
      }
    };
  }, [currentAudio]);

  // Si no hay audios disponibles
  if (!audioItems || audioItems.length === 0) {
    return (
      <Card 
        title={
          <Space>
            <SoundOutlined style={{ color: '#faad14' }} />
            <Title level={4} style={{ margin: 0, color: '#faad14' }}>
              Audio modo radio
            </Title>
          </Space>
        }
        style={{ marginBottom: '16px' }}
        size="small"
      >
        <Alert
          message="Audio no disponible"
          description="No hay audios disponibles para este tema en tu grado escolar."
          type="info"
          showIcon
        />
      </Card>
    );
  }

  return (
    <Card 
      title={
        <Space>
          <SoundOutlined style={{ color: '#faad14' }} />
          <Title level={4} style={{ margin: 0, color: '#faad14' }}>
            Audio modo radio
          </Title>
        </Space>
      }
      style={{ marginBottom: '16px' }}
      size="small"
    >
      <Space direction="vertical" style={{ width: '100%' }} size="middle">
        {/* Información del audio actual */}
        {currentAudio && (
          <div style={{ textAlign: 'center' }}>
            <Paragraph style={{ margin: 0, fontWeight: 'bold' }}>
              {audioItems.find(item => item.archivo === currentAudio)?.titulo}
            </Paragraph>
            <Progress
              percent={duration > 0 ? (currentTime / duration) * 100 : 0}
              size="small"
              format={() => `${formatTime(currentTime)} / ${formatTime(duration)}`}
            />
          </div>
        )}

        {/* Lista de audios */}
        <List
          size="small"
          dataSource={audioItems}
          renderItem={(item) => (
            <List.Item
              style={{
                padding: '8px 0',
                border: currentAudio === item.archivo ? '1px solid #1890ff' : '1px solid #f0f0f0',
                borderRadius: '8px',
                marginBottom: '8px',
                backgroundColor: currentAudio === item.archivo ? '#f6ffed' : '#fff'
              }}
            >
              <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                <div style={{ flex: 1 }}>
                  <Paragraph style={{ margin: 0, fontWeight: 'bold' }}>
                    {item.titulo}
                  </Paragraph>
                  <Paragraph style={{ margin: 0, fontSize: '12px', color: '#666' }}>
                    Duración: {item.duracion}
                  </Paragraph>
                </div>
                
                <Button
                  type={currentAudio === item.archivo ? 'primary' : 'default'}
                  size="small"
                  icon={
                    currentAudio === item.archivo && isPlaying 
                      ? <PauseCircleOutlined /> 
                      : <PlayCircleOutlined />
                  }
                  onClick={() => {
                    if (currentAudio === item.archivo && isPlaying) {
                      pauseAudio();
                    } else {
                      playAudio(item);
                    }
                  }}
                >
                  {currentAudio === item.archivo && isPlaying ? 'Pausar' : 'Reproducir'}
                </Button>
              </Space>
            </List.Item>
          )}
        />

        {/* Mostrar error si existe */}
        {audioError && (
          <Alert
            message="Error de audio"
            description={audioError}
            type="error"
            showIcon
            closable
            onClose={() => setAudioError('')}
            style={{ fontSize: '12px' }}
          />
        )}

        {/* Información adicional */}
        <div style={{ textAlign: 'center' }}>
          <Paragraph style={{ margin: 0, fontSize: '12px', color: '#666' }}>
            Los audios se cargan desde archivos locales. Si no están disponibles, 
            se mostrará un mensaje de error.
          </Paragraph>
        </div>
      </Space>
    </Card>
  );
};

export default RadioModeAudio;
