import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { 
  Layout, 
  Button, 
  Space, 
  Typography, 
  Row, 
  Col,
  Card,
  Modal,
  Alert
} from 'antd'
import { 
  ArrowLeftOutlined,
  PlayCircleOutlined,
  ClockCircleOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons'
import { matematicasData } from '../data/matematicasData'

const { Header, Content } = Layout
const { Title, Paragraph, Text } = Typography

const VideosTema = () => {
  const { temaId } = useParams()
  const navigate = useNavigate()
  const [videoSeleccionado, setVideoSeleccionado] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [errorVideo, setErrorVideo] = useState(false)

  const tema = matematicasData.temas.find(t => t.id === temaId)

  if (!tema) {
    return (
      <Layout style={{ minHeight: '100vh', background: '#f5f5f5' }}>
        <Content style={{ padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Alert
            message="Tema no encontrado"
            description="El tema que buscas no existe."
            type="error"
            showIcon
            action={
              <Button size="small" onClick={() => navigate('/matematicas/tutoriales')}>
                Volver
              </Button>
            }
          />
        </Content>
      </Layout>
    )
  }

  const handleVideoClick = (video) => {
    setVideoSeleccionado(video)
    setModalVisible(true)
    setErrorVideo(false)
  }

  const handleVideoError = () => {
    setErrorVideo(true)
  }

  return (
    <Layout style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Header style={{ 
        background: 'white', 
        borderBottom: '1px solid #f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px'
      }}>
        <Space>
          <Button 
            type="text" 
            icon={<ArrowLeftOutlined />} 
            onClick={() => navigate('/matematicas/tutoriales')}
            size="large"
          >
            Atrás
          </Button>
        </Space>
        
        <Space>
          <PlayCircleOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
          <Title level={3} style={{ margin: 0, color: '#262626' }}>
            Tutoriales — {tema.nombre}
          </Title>
        </Space>
        
        <div style={{ width: '80px' }}></div> {/* Spacer para centrar */}
      </Header>

      <Content style={{ padding: '24px' }}>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={20} md={16} lg={12}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              {tema.videos.length === 0 ? (
                <Card>
                  <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                    <ExclamationCircleOutlined style={{ fontSize: '48px', color: '#faad14', marginBottom: '16px' }} />
                    <Title level={4} style={{ color: '#666' }}>
                      Aún no hay contenido en este tema
                    </Title>
                    <Paragraph style={{ color: '#8c8c8c' }}>
                      Estamos trabajando para agregar videos a este tema.
                    </Paragraph>
                    <Button type="primary" onClick={() => navigate('/matematicas/tutoriales')}>
                      Volver
                    </Button>
                  </div>
                </Card>
              ) : (
                tema.videos.map((video) => (
                  <Card
                    key={video.id}
                    hoverable
                    onClick={() => handleVideoClick(video)}
                    style={{
                      cursor: 'pointer',
                      border: '1px solid #f0f0f0',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      background: 'white'
                    }}
                    bodyStyle={{ padding: '20px' }}
                  >
                    <Row gutter={16} align="middle">
                      <Col flex="none">
                        <div style={{ 
                          fontSize: '32px', 
                          color: '#52c41a',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '60px',
                          height: '60px',
                          background: '#f6ffed',
                          borderRadius: '50%'
                        }}>
                          <PlayCircleOutlined />
                        </div>
                      </Col>
                      
                      <Col flex="auto">
                        <Title level={5} style={{ 
                          margin: 0, 
                          color: '#262626',
                          marginBottom: '8px'
                        }}>
                          {video.titulo}
                        </Title>
                        
                        <Paragraph style={{ 
                          margin: 0, 
                          color: '#666',
                          marginBottom: '8px'
                        }}>
                          {video.descripcion}
                        </Paragraph>
                        
                        <Space>
                          <Text type="secondary" style={{ fontSize: '14px' }}>
                            <ClockCircleOutlined style={{ marginRight: '4px' }} />
                            {video.duracion}
                          </Text>
                        </Space>
                      </Col>
                    </Row>
                  </Card>
                ))
              )}
            </Space>
          </Col>
        </Row>
      </Content>

      <Modal
        title={videoSeleccionado?.titulo}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={800}
        centered
      >
        <div style={{ textAlign: 'center' }}>
          {errorVideo ? (
            <div style={{ padding: '40px 20px' }}>
              <ExclamationCircleOutlined style={{ fontSize: '48px', color: '#ff4d4f', marginBottom: '16px' }} />
              <Title level={4} style={{ color: '#666' }}>
                No se pudo cargar el video
              </Title>
              <Paragraph style={{ color: '#8c8c8c' }}>
                Intenta de nuevo más tarde.
              </Paragraph>
              <Button type="primary" onClick={() => setErrorVideo(false)}>
                Reintentar
              </Button>
            </div>
          ) : (
            <div style={{ width: '100%', maxWidth: '100%' }}>
              <iframe
                width="100%"
                height="400"
                src={videoSeleccionado?.url}
                title={videoSeleccionado?.titulo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onError={handleVideoError}
              />
              <div style={{ marginTop: '16px', textAlign: 'left' }}>
                <Title level={5}>{videoSeleccionado?.titulo}</Title>
                <Paragraph style={{ color: '#666' }}>
                  {videoSeleccionado?.descripcion}
                </Paragraph>
                <Text type="secondary">
                  <ClockCircleOutlined style={{ marginRight: '4px' }} />
                  Duración: {videoSeleccionado?.duracion}
                </Text>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </Layout>
  )
}

export default VideosTema
