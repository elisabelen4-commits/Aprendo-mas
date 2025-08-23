import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Layout, 
  Button, 
  Space, 
  Typography, 
  Row, 
  Col,
  Card,
  Select,
  Switch,
  Divider,
  Alert
} from 'antd'
import { 
  ArrowLeftOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  TrophyOutlined
} from '@ant-design/icons'
import { matematicasData } from '../data/matematicasData'

const { Header, Content } = Layout
const { Title, Paragraph, Text } = Typography
const { Option } = Select

const Examenes = () => {
  const navigate = useNavigate()
  const [temaSeleccionado, setTemaSeleccionado] = useState('')
  const [modoCalificado, setModoCalificado] = useState(false)

  const handleComenzar = () => {
    if (temaSeleccionado) {
      const modo = modoCalificado ? 'graded' : 'practice'
      navigate(`/matematicas/examenes/${temaSeleccionado}/quiz?mode=${modo}`)
    }
  }

  const temaActual = matematicasData.temas.find(t => t.id === temaSeleccionado)

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
          <FileTextOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
          <Title level={3} style={{ margin: 0, color: '#262626' }}>
            Exámenes (Matemáticas)
          </Title>
        </Space>
        
        <div style={{ width: '80px' }}></div> {/* Spacer para centrar */}
      </Header>

      <Content style={{ padding: '24px' }}>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={20} md={16} lg={12}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <Card>
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <Title level={4} style={{ color: '#666', fontWeight: 'normal' }}>
                    Selecciona un tema y el modo de evaluación
                  </Title>
                  <Paragraph style={{ color: '#8c8c8c' }}>
                    (práctica o calificado)
                  </Paragraph>
                </div>

                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                  {/* Selector de tema */}
                  <div>
                    <Title level={5} style={{ marginBottom: '12px' }}>
                      Tema del examen
                    </Title>
                    <Select
                      placeholder="Selecciona un tema"
                      style={{ width: '100%' }}
                      size="large"
                      value={temaSeleccionado}
                      onChange={setTemaSeleccionado}
                    >
                      {matematicasData.temas.map((tema) => (
                        <Option key={tema.id} value={tema.id}>
                          <Space>
                            <span>{tema.nombre}</span>
                            <Text type="secondary" style={{ fontSize: '12px' }}>
                              ({tema.preguntas.length} preguntas disponibles)
                            </Text>
                          </Space>
                        </Option>
                      ))}
                    </Select>
                  </div>

                  <Divider />

                  {/* Modo de evaluación */}
                  <div>
                    <Title level={5} style={{ marginBottom: '16px' }}>
                      Modo de evaluación
                    </Title>
                    
                    <Card 
                      size="small" 
                      style={{ 
                        border: modoCalificado ? '2px solid #1890ff' : '1px solid #f0f0f0',
                        background: modoCalificado ? '#f0f8ff' : 'white'
                      }}
                    >
                      <Row gutter={16} align="middle">
                        <Col flex="auto">
                          <Space direction="vertical" size="small">
                            <Title level={5} style={{ margin: 0, color: modoCalificado ? '#1890ff' : '#262626' }}>
                              {modoCalificado ? 'Calificado (con nota)' : 'Práctica (sin nota)'}
                            </Title>
                            <Paragraph style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                              {modoCalificado 
                                ? 'Tu puntaje se guardará y podrás ver tu progreso'
                                : 'Practica sin presión, no se guardará tu puntaje'
                              }
                            </Paragraph>
                          </Space>
                        </Col>
                        <Col flex="none">
                          <Switch 
                            checked={modoCalificado}
                            onChange={setModoCalificado}
                            checkedChildren={<TrophyOutlined />}
                            unCheckedChildren={<CheckCircleOutlined />}
                          />
                        </Col>
                      </Row>
                    </Card>
                  </div>

                  {/* Información del tema seleccionado */}
                  {temaActual && (
                    <Alert
                      message={`Tema: ${temaActual.nombre}`}
                      description={temaActual.descripcion}
                      type="info"
                      showIcon
                      style={{ marginTop: '16px' }}
                    />
                  )}

                  <Divider />

                  {/* Botón comenzar */}
                  <Button
                    type="primary"
                    size="large"
                    block
                    disabled={!temaSeleccionado}
                    onClick={handleComenzar}
                    style={{ 
                      height: '48px', 
                      fontSize: '16px',
                      background: temaSeleccionado ? '#1890ff' : '#f0f0f0',
                      borderColor: temaSeleccionado ? '#1890ff' : '#f0f0f0'
                    }}
                  >
                    {temaSeleccionado ? 'Comenzar Examen' : 'Selecciona un tema para comenzar'}
                  </Button>
                </Space>
              </Card>
            </Space>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default Examenes
