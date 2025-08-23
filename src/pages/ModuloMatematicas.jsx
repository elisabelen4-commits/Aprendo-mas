import { useNavigate } from 'react-router-dom'
import { 
  Layout, 
  Button, 
  Space, 
  Typography, 
  Row, 
  Col,
  Card
} from 'antd'
import { 
  ArrowLeftOutlined,
  PlayCircleOutlined,
  FileTextOutlined,
  CalculatorOutlined
} from '@ant-design/icons'

const { Header, Content } = Layout
const { Title, Paragraph } = Typography

const ModuloMatematicas = () => {
  const navigate = useNavigate()

  const opciones = [
    {
      id: 'tutoriales',
      titulo: 'Tutoriales',
      descripcion: 'Videos por tema, paso a paso',
      icono: <PlayCircleOutlined />,
      color: '#52c41a',
      ruta: '/matematicas/tutoriales'
    },
    {
      id: 'examenes',
      titulo: 'Exámenes',
      descripcion: 'Práctica o calificado',
      icono: <FileTextOutlined />,
      color: '#1890ff',
      ruta: '/matematicas/examenes'
    }
  ]

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
            onClick={() => navigate('/')}
            size="large"
          >
            Atrás
          </Button>
        </Space>
        
        <Space>
          <CalculatorOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
          <Title level={3} style={{ margin: 0, color: '#262626' }}>
            Matemáticas
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
                  Selecciona una opción para continuar
                </Title>
              </div>

              {opciones.map((opcion) => (
                <Card
                  key={opcion.id}
                  hoverable
                  onClick={() => navigate(opcion.ruta)}
                  style={{
                    cursor: 'pointer',
                    border: `2px solid ${opcion.color}`,
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    background: 'white'
                  }}
                  bodyStyle={{ padding: '32px' }}
                >
                  <Row gutter={24} align="middle">
                    <Col flex="none">
                      <div style={{ 
                        fontSize: '48px', 
                        color: opcion.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '80px',
                        height: '80px',
                        background: `${opcion.color}10`,
                        borderRadius: '50%'
                      }}>
                        {opcion.icono}
                      </div>
                    </Col>
                    
                    <Col flex="auto">
                      <Title level={3} style={{ 
                        margin: 0, 
                        color: '#262626',
                        marginBottom: '8px'
                      }}>
                        {opcion.titulo}
                      </Title>
                      
                      <Paragraph style={{ 
                        margin: 0, 
                        color: '#666',
                        fontSize: '16px'
                      }}>
                        {opcion.descripcion}
                      </Paragraph>
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

export default ModuloMatematicas
