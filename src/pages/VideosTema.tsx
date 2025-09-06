import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Card, Typography, Space, Row, Col, Button, Progress, List, Tag } from 'antd';
import { 
  PlayCircleOutlined, 
  ClockCircleOutlined, 
  BookOutlined, 
  CheckCircleOutlined,
  ArrowLeftOutlined,
  TrophyOutlined
} from '@ant-design/icons';
import { getContentByGrade } from '../data/gradeContent';
import { useGrade } from '../hooks/useGrade';
import { getModuleName } from '../utils/moduleMapping';

const { Title, Paragraph, Text } = Typography;

interface VideoProgress {
  [videoId: string]: boolean;
}

const VideosTema: React.FC = () => {
  const navigate = useNavigate();
  const { temaId } = useParams<{ temaId: string }>();
  const location = useLocation();
  const [videoProgress, setVideoProgress] = useState<VideoProgress>({});
  const [currentVideo, setCurrentVideo] = useState<string>('');

  // Extraer moduloId de la URL
  const pathSegments = location.pathname.split('/');
  const moduloId = pathSegments[1] || 'matematicas';
  const { getGrade } = useGrade();
  const userGrade = getGrade();

  // Obtener datos del tema usando el sistema de gradeContent
  const moduleName = getModuleName(moduloId);
  const gradeContent = getContentByGrade(userGrade, moduleName);
  const tema = gradeContent?.temas.find(t => t.id === temaId);
  const videoId = location.state?.videoId;

  useEffect(() => {
    if (videoId) {
      setCurrentVideo(videoId);
    } else if (tema?.videos.length) {
      setCurrentVideo(tema.videos[0].id);
    }
  }, [videoId, tema]);

  if (!tema) {
    return (
      <div style={{ padding: '24px', textAlign: 'center' }}>
        <Title level={2}>Tema no encontrado</Title>
        <Button onClick={() => navigate(`/${moduloId}/tutoriales`)}>
          Volver a Tutoriales
        </Button>
      </div>
    );
  }

  const currentVideoData = tema.videos.find(v => v.id === currentVideo);

  const handleVideoClick = (videoId: string) => {
    setCurrentVideo(videoId);
  };

  const markVideoAsCompleted = (videoId: string) => {
    setVideoProgress(prev => ({
      ...prev,
      [videoId]: true
    }));
  };

  const getProgressPercentage = () => {
    const totalVideos = tema.videos.length;
    const completedVideos = Object.values(videoProgress).filter(Boolean).length;
    return totalVideos > 0 ? Math.round((completedVideos / totalVideos) * 100) : 0;
  };

  const handleExamenClick = () => {
    navigate(`/${moduloId}/examenes/${temaId}/quiz`);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header del tema */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <Space direction="vertical" align="center" size="large">
          <BookOutlined style={{ fontSize: '64px', color: '#1890ff' }} />
          <div>
            <Title level={1} style={{ color: '#1890ff', margin: 0 }}>
              {tema.nombre}
            </Title>
            <Paragraph style={{ fontSize: '18px', margin: '16px 0 0 0', color: '#666' }}>
              {tema.descripcion}
            </Paragraph>
          </div>
        </Space>
      </div>

      {/* Barra de progreso */}
      <Card style={{ marginBottom: '24px' }}>
        <Row gutter={24} align="middle">
          <Col xs={24} sm={12}>
            <div style={{ textAlign: 'center' }}>
              <Progress 
                type="circle" 
                percent={getProgressPercentage()} 
                format={percent => `${percent}%`}
                strokeColor="#1890ff"
                size={80}
              />
              <Paragraph style={{ marginTop: '16px' }}>
                {Object.values(videoProgress).filter(Boolean).length} de {tema.videos.length} videos completados
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} sm={12}>
            <div style={{ textAlign: 'center' }}>
              <Space direction="vertical" size="large">
                <div>
                  <Title level={4}>¿Listo para evaluarte?</Title>
                  <Paragraph>
                    Completa los videos y pon a prueba tus conocimientos
                  </Paragraph>
                </div>
                <Button 
                  type="primary" 
                  size="large"
                  icon={<TrophyOutlined />}
                  onClick={handleExamenClick}
                  disabled={getProgressPercentage() < 50}
                >
                  {getProgressPercentage() >= 50 ? 'Tomar Examen' : 'Completa más videos primero'}
                </Button>
              </Space>
            </div>
          </Col>
        </Row>
      </Card>

      <Row gutter={24}>
        {/* Video principal */}
        <Col xs={24} lg={16}>
          <Card 
            title={
              <Space>
                <PlayCircleOutlined style={{ color: '#1890ff' }} />
                <Title level={4} style={{ margin: 0 }}>
                  {currentVideoData?.titulo}
                </Title>
              </Space>
            }
            style={{ marginBottom: '24px' }}
            extra={
              <Space>
                <ClockCircleOutlined />
                <Text>{currentVideoData?.duracion}</Text>
                {videoProgress[currentVideo] && (
                  <Tag color="green" icon={<CheckCircleOutlined />}>
                    Completado
                  </Tag>
                )}
              </Space>
            }
          >
            {/* Video player */}
            <div style={{
              width: '100%',
              height: '400px',
              background: '#f0f0f0',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
              border: '1px solid #d9d9d9'
            }}>
              <div style={{ textAlign: 'center' }}>
                <PlayCircleOutlined style={{ fontSize: '48px', color: '#1890ff' }} />
                <Paragraph style={{ marginTop: '16px' }}>
                  Video: {currentVideoData?.titulo}
                </Paragraph>
                <Paragraph type="secondary">
                  {currentVideoData?.descripcion}
                </Paragraph>
                <Button 
                  type="primary" 
                  size="large"
                  onClick={() => markVideoAsCompleted(currentVideo)}
                  disabled={videoProgress[currentVideo]}
                >
                  {videoProgress[currentVideo] ? 'Video Completado' : 'Marcar como Visto'}
                </Button>
              </div>
            </div>

            {/* Descripción del video */}
            <div style={{ marginTop: '16px' }}>
              <Title level={5}>Descripción:</Title>
              <Paragraph>
                {currentVideoData?.descripcion}
              </Paragraph>
            </div>
          </Card>
        </Col>

        {/* Lista de videos */}
        <Col xs={24} lg={8}>
          <Card 
            title={
              <Space>
                <BookOutlined />
                <Title level={4} style={{ margin: 0 }}>
                  Videos del Tema
                </Title>
              </Space>
            }
          >
            <List
              dataSource={tema.videos}
              renderItem={(video) => (
                <List.Item
                  style={{
                    cursor: 'pointer',
                    padding: '12px',
                    borderRadius: '8px',
                    border: currentVideo === video.id ? '2px solid #1890ff' : '1px solid #f0f0f0',
                    marginBottom: '8px',
                    background: currentVideo === video.id ? '#f6ffed' : 'white',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => handleVideoClick(video.id)}
                  actions={[
                    videoProgress[video.id] && (
                      <CheckCircleOutlined key="completed" style={{ color: '#52c41a' }} />
                    )
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <div style={{
                        fontSize: '24px',
                        color: videoProgress[video.id] ? '#52c41a' : '#1890ff'
                      }}>
                        <PlayCircleOutlined />
                      </div>
                    }
                    title={
                      <Text 
                        strong={currentVideo === video.id}
                        style={{ 
                          color: videoProgress[video.id] ? '#52c41a' : 'inherit'
                        }}
                      >
                        {video.titulo}
                      </Text>
                    }
                    description={
                      <Space direction="vertical" size="small">
                        <Text type="secondary" style={{ fontSize: '12px' }}>
                          {video.duracion}
                        </Text>
                        <Text type="secondary" style={{ fontSize: '11px' }}>
                          {video.descripcion.substring(0, 60)}...
                        </Text>
                      </Space>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      {/* Navegación */}
      <div style={{ textAlign: 'center', marginTop: '32px' }}>
        <Space size="large">
          <Button 
            size="large" 
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate(`/${moduloId}/tutoriales`)}
          >
            Volver a Tutoriales
          </Button>
          <Button 
            type="primary" 
            size="large"
            icon={<TrophyOutlined />}
            onClick={handleExamenClick}
          >
            Ir al Examen
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default VideosTema;
