import React, { useState, useEffect } from 'react';
import { Button, Card, Typography, Space, Alert, Spin } from 'antd';
import { SoundOutlined, RobotOutlined, WifiOutlined, WifiOutlined as WifiOffOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

interface VoiceExplanationProps {
  temaId: string;
  moduloId: string;
  grade: string;
  explicacionBase: string;
}

const VoiceExplanation: React.FC<VoiceExplanationProps> = ({
  temaId,
  moduloId,
  grade,
  explicacionBase
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isGenerating, setIsGenerating] = useState(false);
  const [explicacionMejorada, setExplicacionMejorada] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Verificar conexión a internet
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Cargar explicación mejorada desde localStorage si existe
  useEffect(() => {
    const key = `explicacion_mejorada_${moduloId}_${temaId}_${grade}`;
    const saved = localStorage.getItem(key);
    if (saved) {
      setExplicacionMejorada(saved);
    }
  }, [moduloId, temaId, grade]);

  // Función para generar explicación mejorada con IA (simulada)
  const generarExplicacionMejorada = async () => {
    setIsGenerating(true);
    setError('');

    try {
      // Simular llamada a API de IA
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generar explicación adaptada al grado
      const explicacionAdaptada = adaptarExplicacionPorGrado(explicacionBase, grade);
      
      setExplicacionMejorada(explicacionAdaptada);
      
      // Guardar en localStorage
      const key = `explicacion_mejorada_${moduloId}_${temaId}_${grade}`;
      localStorage.setItem(key, explicacionAdaptada);
      
    } catch (err) {
      setError('Error al generar explicación mejorada. Usando explicación base.');
    } finally {
      setIsGenerating(false);
    }
  };

  // Función para adaptar explicación por grado
  const adaptarExplicacionPorGrado = (explicacion: string, grade: string): string => {
    const gradeNum = parseInt(grade);
    
    if (gradeNum <= 3) {
      // Primaria baja - lenguaje muy simple
      return explicacion
        .replace(/fracciones/g, 'pedazos de pizza')
        .replace(/números/g, 'números')
        .replace(/ecuación/g, 'problema')
        .replace(/variable/g, 'letra misteriosa')
        + ' ¡Es muy fácil! Puedes hacerlo paso a paso.';
    } else if (gradeNum <= 6) {
      // Primaria alta - ejemplos concretos
      return explicacion + ' Por ejemplo, si tienes una pizza y la divides en partes iguales, cada parte es una fracción. ¡Pruébalo en casa!';
    } else if (gradeNum <= 9) {
      // Secundaria - más técnico pero accesible
      return explicacion + ' Este concepto es fundamental para entender matemáticas más avanzadas. Practica con diferentes ejemplos.';
    } else {
      // Bachillerato - más formal
      return explicacion + ' Este tema es importante para tu preparación académica. Asegúrate de dominarlo completamente.';
    }
  };

  // Función para leer texto con síntesis de voz
  const leerTexto = (texto: string) => {
    if ('speechSynthesis' in window) {
      // Cancelar cualquier síntesis anterior
      speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(texto);
      utterance.lang = 'es-ES';
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 1;

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => {
        setIsPlaying(false);
        setError('Error al reproducir audio. Verifica que tu dispositivo tenga audio habilitado.');
      };

      speechSynthesis.speak(utterance);
    } else {
      setError('Tu navegador no soporta síntesis de voz.');
    }
  };

  // Función para manejar el clic del botón
  const handleExplicarConVoz = async () => {
    if (isPlaying) {
      // Si está reproduciendo, detener
      speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    let textoParaLeer = explicacionBase;

    // Si hay internet y no hay explicación mejorada guardada, generar una
    if (isOnline && !explicacionMejorada && !isGenerating) {
      await generarExplicacionMejorada();
      textoParaLeer = explicacionMejorada || explicacionBase;
    } else if (explicacionMejorada) {
      textoParaLeer = explicacionMejorada;
    }

    leerTexto(textoParaLeer);
  };

  return (
    <Card 
      title={
        <Space>
          <SoundOutlined style={{ color: '#1890ff' }} />
          <Title level={4} style={{ margin: 0, color: '#1890ff' }}>
            Explicar con voz/IA
          </Title>
        </Space>
      }
      style={{ marginBottom: '16px' }}
      size="small"
    >
      <Space direction="vertical" style={{ width: '100%' }} size="middle">
        {/* Estado de conexión */}
        <div style={{ textAlign: 'center' }}>
          <Space>
            {isOnline ? (
              <>
                <WifiOutlined style={{ color: '#52c41a' }} />
                <span style={{ color: '#52c41a', fontSize: '12px' }}>Conectado</span>
              </>
            ) : (
              <>
                <WifiOffOutlined style={{ color: '#f5222d' }} />
                <span style={{ color: '#f5222d', fontSize: '12px' }}>Sin conexión</span>
              </>
            )}
          </Space>
        </div>

        {/* Botón principal */}
        <Button
          type="primary"
          size="large"
          icon={isPlaying ? <SoundOutlined /> : <RobotOutlined />}
          onClick={handleExplicarConVoz}
          loading={isGenerating}
          style={{ width: '100%' }}
        >
          {isGenerating 
            ? 'Generando explicación...' 
            : isPlaying 
              ? 'Detener audio' 
              : isOnline && !explicacionMejorada
                ? 'Explicar con IA'
                : 'Explicar con voz'
          }
        </Button>

        {/* Información sobre el modo */}
        <div style={{ textAlign: 'center' }}>
          <Paragraph style={{ margin: 0, fontSize: '12px', color: '#666' }}>
            {isOnline && !explicacionMejorada 
              ? 'Con internet: explicación mejorada con IA'
              : isOnline && explicacionMejorada
                ? 'Usando explicación mejorada guardada'
                : 'Modo offline: explicación base con voz'
            }
          </Paragraph>
        </div>

        {/* Mostrar explicación mejorada si existe */}
        {explicacionMejorada && (
          <Alert
            message="Explicación mejorada disponible"
            description="Esta explicación ha sido adaptada específicamente para tu grado escolar."
            type="success"
            showIcon
            style={{ fontSize: '12px' }}
          />
        )}

        {/* Mostrar error si existe */}
        {error && (
          <Alert
            message="Error"
            description={error}
            type="error"
            showIcon
            closable
            onClose={() => setError('')}
            style={{ fontSize: '12px' }}
          />
        )}

        {/* Indicador de carga para IA */}
        {isGenerating && (
          <div style={{ textAlign: 'center' }}>
            <Spin size="small" />
            <Paragraph style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>
              Adaptando explicación para {grade}º grado...
            </Paragraph>
          </div>
        )}
      </Space>
    </Card>
  );
};

export default VoiceExplanation;
