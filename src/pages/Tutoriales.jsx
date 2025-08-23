import { useNavigate } from 'react-router-dom'
import { 
  Layout, 
  Button, 
  Space, 
  Typography, 
  Row, 
  Col,
  Card,
  Tag
} from 'antd'
import { 
  ArrowLeftOutlined,
  PlayCircleOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { matematicasData } from '../data/matematicasData'

const { Header, Content } = Layout
const { Title, Paragraph } = Typography

const Tutoriales = () => {
  const navigate = useNavigate()

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
            onClick={() => navigate('/matematicas')}
            size="large"
          >
            Atrás
          </Button>
        </Space>
        
        <Space>
          <PlayCircleOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
          <Title level={3} style={{ margin: 0, color: '#262626' }}>
            Tutoriales
          </Title>
        </Space>
        
        <div style={{ width: '80px' }}></div> {/* Spacer para centrar */}
      </Header>

      <Content style={{ padding: '24px' }}>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={20} md={16} lg={12}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <Title level={4} style={{ color: '#666', fontWeight: 'normal' }}>
                  Selecciona un tema para ver los videos disponibles
                </Title>
              </div>

              {matematicasData.temas.map((tema) => (
                <Card
                  key={tema.id}
                  hoverable
                  onClick={() => navigate(`/matematicas/tutoriales/${tema.id}`)}
                  style={{
                    cursor: 'pointer',
                    border: '1px solid #f0f0f0',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    background: 'white'
                  }}
                  bodyStyle={{ padding: '24px' }}
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
                        <VideoCameraOutlined />
                      </div>
                    </Col>
                    
                    <Col flex="auto">
                      <Title level={4} style={{ 
                        margin: 0, 
                        color: '#262626',
                        marginBottom: '8px'
                      }}>
                        {tema.nombre}
                      </Title>
                      
                      <Paragraph style={{ 
                        margin: 0, 
                        color: '#666',
                        marginBottom: '12px'
                      }}>
                        {tema.descripcion}
                      </Paragraph>
                      
                      <Space>
                        <Tag color="green" icon={<PlayCircleOutlined />}>
                          {tema.videos.length} video{tema.videos.length !== 1 ? 's' : ''}
                        </Tag>
                      </Space>
                    </Col>
                    
                    <Col flex="none">
                      <Button 
                        type="primary" 
                        shape="circle" 
                        icon={<PlayCircleOutlined />}
                        style={{ background: '#52c41a', borderColor: '#52c41a' }}
                      />
                    </Col>
                  </Row>
                </Card>
              ))}
            </Space>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default Tutoriales
