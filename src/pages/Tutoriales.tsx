import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Card, Typography, Space, Row, Col, Button, Tag, Progress } from 'antd';
import { PlayCircleOutlined, ClockCircleOutlined, BookOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { getContentByGrade } from '../data/gradeContent';
import { useGrade } from '../hooks/useGrade';
import { getModuleName } from '../utils/moduleMapping';
import TemaCompleto from '../components/TemaCompleto';

const { Title, Paragraph, Text } = Typography;

interface VideoProgress {
  [videoId: string]: boolean;
}

const Tutoriales: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { temaId } = useParams<{ temaId?: string }>();
  
  // Extraer moduloId de la URL
  const pathSegments = location.pathname.split('/');
  const moduloId = pathSegments[1] || 'matematicas';
  const [videoProgress, setVideoProgress] = useState<VideoProgress>({});
  const { getGrade, getGradeName } = useGrade();
  const userGrade = getGrade();

  // Si hay un temaId, mostrar el tema completo
  if (temaId) {
    return (
      <TemaCompleto
        temaId={temaId}
        moduloId={moduloId as any}
        onIniciarExamen={() => navigate(`/${moduloId}/examenes/${temaId}/quiz`)}
      />
    );
  }

  // Obtener datos del módulo adaptados por grado
  const getModuloData = () => {
    const moduleName = getModuleName(moduloId);
    const gradeContent = getContentByGrade(userGrade, moduleName);
    return gradeContent;
  };

  const moduloData = getModuloData();

  const handleVideoClick = (temaId: string, videoId: string) => {
    navigate(`/${moduloId}/tutoriales/${temaId}`, { 
      state: { videoId, moduloId } 
    });
  };

  const handleExamenClick = (temaId: string) => {
    navigate(`/${moduloId}/examenes/${temaId}/quiz`);
  };

  const markVideoAsCompleted = (videoId: string) => {
    setVideoProgress(prev => ({
      ...prev,
      [videoId]: true
    }));
  };

  if (!moduloData) {
    return (
      <div style={{ padding: '24px', textAlign: 'center' }}>
        <Title level={3}>Contenido no disponible</Title>
        <Paragraph>No hay contenido disponible para {getGradeName()} en este módulo.</Paragraph>
        <Button onClick={() => navigate(-1)}>Volver</Button>
      </div>
    );
  }

  const getProgressPercentage = () => {
    const totalVideos = moduloData.temas.reduce((acc, tema) => acc + tema.videos.length, 0);
    const completedVideos = Object.values(videoProgress).filter(Boolean).length;
    return totalVideos > 0 ? Math.round((completedVideos / totalVideos) * 100) : 0;
  };

  const getTemaProgress = (tema: any) => {
    const totalVideos = tema.videos.length;
    const completedVideos = tema.videos.filter((video: any) => videoProgress[video.id]).length;
    return totalVideos > 0 ? Math.round((completedVideos / totalVideos) * 100) : 0;
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header del módulo */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <Space direction="vertical" align="center" size="large">
          <BookOutlined style={{ fontSize: '64px', color: '#1890ff' }} />
          <div>
            <Title level={1} style={{ color: '#1890ff', margin: 0 }}>
              Tutoriales de {
                moduloId === 'matematicas' ? 'Matemáticas' :
                moduloId === 'espanol' ? 'Español' :
                moduloId === 'ciencias-sociales' ? 'Ciencias Sociales' :
                'Computación'
              }
            </Title>
            <Paragraph style={{ fontSize: '18px', margin: '16px 0 0 0', color: '#666' }}>
              Aprende paso a paso con nuestros videos educativos - {getGradeName()}
            </Paragraph>
          </div>
        </Space>
      </div>

      {/* Barra de progreso general */}
      <Card style={{ marginBottom: '24px' }}>
        <div style={{ textAlign: 'center' }}>
          <Title level={4}>Progreso General</Title>
          <Progress 
            type="circle" 
            percent={getProgressPercentage()} 
            format={percent => `${percent}%`}
            strokeColor="#1890ff"
            size={80}
          />
          <Paragraph style={{ marginTop: '16px' }}>
            {Object.values(videoProgress).filter(Boolean).length} de {moduloData.temas.reduce((acc, tema) => acc + tema.videos.length, 0)} videos completados
          </Paragraph>
        </div>
      </Card>

      {/* Temas y videos */}
      {moduloData.temas.map((tema) => (
        <Card 
          key={tema.id} 
          title={
            <Space>
              <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
                {tema.nombre}
              </Title>
              <Tag color="blue">{tema.videos.length} videos</Tag>
            </Space>
          }
          style={{ marginBottom: '24px' }}
          extra={
            <Space>
              <Progress 
                percent={getTemaProgress(tema)} 
                size="small" 
                style={{ width: '100px' }}
              />
              <Button 
                type="primary" 
                onClick={() => handleExamenClick(tema.id)}
                icon={<CheckCircleOutlined />}
              >
                Tomar Examen
              </Button>
            </Space>
          }
        >
          <Paragraph style={{ fontSize: '16px', marginBottom: '24px' }}>
            {tema.descripcion}
          </Paragraph>

          <Row gutter={[16, 16]}>
            {tema.videos.map((video) => (
              <Col xs={24} sm={12} md={8} key={video.id}>
                <Card
                  hoverable
                  onClick={() => handleVideoClick(tema.id, video.id)}
                  style={{
                    cursor: 'pointer',
                    border: videoProgress[video.id] ? '2px solid #52c41a' : '1px solid #d9d9d9',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                  bodyStyle={{ padding: '16px' }}
                >
                  {videoProgress[video.id] && (
                    <div style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      background: '#52c41a',
                      borderRadius: '50%',
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>
                      <CheckCircleOutlined />
                    </div>
                  )}

                  <Space direction="vertical" size="small" style={{ width: '100%' }}>
                    <div style={{
                      fontSize: '32px',
                      color: videoProgress[video.id] ? '#52c41a' : '#1890ff',
                      marginBottom: '8px'
                    }}>
                      <PlayCircleOutlined />
                    </div>

                    <Title level={5} style={{ margin: 0, textAlign: 'center' }}>
                      {video.titulo}
                    </Title>

                    <div style={{ textAlign: 'center' }}>
                      <Space size="small">
                        <ClockCircleOutlined />
                        <Text type="secondary">{video.duracion}</Text>
                      </Space>
                    </div>

                    <Paragraph style={{
                      margin: '8px 0 0 0',
                      fontSize: '12px',
                      color: '#666',
                      textAlign: 'center',
                      lineHeight: '1.4'
                    }}>
                      {video.descripcion}
                    </Paragraph>

                    <Button
                      type={videoProgress[video.id] ? "default" : "primary"}
                      size="small"
                      style={{
                        width: '100%',
                        borderRadius: '6px'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        markVideoAsCompleted(video.id);
                      }}
                    >
                      {videoProgress[video.id] ? 'Completado' : 'Marcar como visto'}
                    </Button>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>
      ))}

      {/* Botón de regreso */}
      <div style={{ textAlign: 'center', marginTop: '32px' }}>
        <Button 
          size="large" 
          onClick={() => navigate(`/${moduloId}`)}
          style={{ marginRight: '16px' }}
        >
          Volver al Módulo
        </Button>
        <Button 
          type="primary" 
          size="large" 
          onClick={() => navigate(`/${moduloId}/examenes`)}
        >
          Ir a Exámenes
        </Button>
      </div>
    </div>
  );
};

export default Tutoriales;
