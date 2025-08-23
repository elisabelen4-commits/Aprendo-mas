import { useState, useEffect } from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { 
  Layout, 
  Button, 
  Space, 
  Typography, 
  Row, 
  Col,
  Card,
  Radio,
  Progress,
  Modal,
  Alert
} from 'antd'
import { 
  ArrowLeftOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons'
import { 
  matematicasData, 
  obtenerPreguntasAleatorias, 
  calcularPuntaje, 
  guardarResultado 
} from '../data/matematicasData'

const { Header, Content } = Layout
const { Title, Paragraph, Text } = Typography
const { Group } = Radio

const Quiz = () => {
  const { temaId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  
  const [preguntas, setPreguntas] = useState([])
  const [respuestas, setRespuestas] = useState({})
  const [preguntaActual, setPreguntaActual] = useState(0)
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false)
  const [loading, setLoading] = useState(false)

  const modo = searchParams.get('mode') || 'practice'
  const tema = matematicasData.temas.find(t => t.id === temaId)

  useEffect(() => {
    if (tema) {
      const preguntasAleatorias = obtenerPreguntasAleatorias(temaId, 5)
      setPreguntas(preguntasAleatorias)
      setRespuestas({})
    }
  }, [temaId, tema])

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
              <Button size="small" onClick={() => navigate('/matematicas/examenes')}>
                Volver
              </Button>
            }
          />
        </Content>
      </Layout>
    )
  }

  const handleRespuesta = (preguntaIndex, valor) => {
    setRespuestas(prev => ({
      ...prev,
      [preguntaIndex]: valor
    }))
  }

  const handleFinalizar = () => {
    setLoading(true)
    
    // Calcular puntaje
    const resultado = calcularPuntaje(
      Object.values(respuestas),
      preguntas
    )

    // Guardar resultado si es modo calificado
    if (modo === 'graded') {
      guardarResultado(temaId, resultado)
    }

    // Navegar a resultados
    setTimeout(() => {
      navigate('/resultado', { 
        state: { 
          resultado,
          tema: tema.nombre,
          modo,
          temaId
        }
      })
    }, 500)
  }

  const todasRespondidas = Object.keys(respuestas).length === preguntas.length
  const progreso = preguntas.length > 0 ? ((Object.keys(respuestas).length / preguntas.length) * 100) : 0

  const handleSalir = () => {
    if (Object.keys(respuestas).length > 0) {
      setMostrarConfirmacion(true)
    } else {
      navigate('/matematicas/examenes')
    }
  }

  const confirmarSalir = () => {
    setMostrarConfirmacion(false)
    navigate('/matematicas/examenes')
  }

  if (preguntas.length === 0) {
    return (
      <Layout style={{ minHeight: '100vh', background: '#f5f5f5' }}>
        <Content style={{ padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Alert
            message="No hay preguntas disponibles"
            description="Este tema no tiene preguntas para el examen."
            type="warning"
            showIcon
            action={
              <Button size="small" onClick={() => navigate('/matematicas/examenes')}>
                Volver
              </Button>
            }
          />
        </Content>
      </Layout>
    )
  }

  const pregunta = preguntas[preguntaActual]

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
            onClick={handleSalir}
            size="large"
          >
            Atrás
          </Button>
        </Space>
        
        <Space>
          <FileTextOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
          <Title level={3} style={{ margin: 0, color: '#262626' }}>
            Examen — {tema.nombre}
          </Title>
        </Space>
        
        <div style={{ width: '80px' }}></div> {/* Spacer para centrar */}
      </Header>

      <Content style={{ padding: '24px' }}>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={20} md={16} lg={12}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              {/* Barra de progreso */}
              <Card size="small">
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text>Progreso</Text>
                    <Text strong>{Object.keys(respuestas).length}/{preguntas.length} preguntas</Text>
                  </div>
                  <Progress 
                    percent={progreso} 
                    status={progreso === 100 ? "success" : "active"}
                    strokeColor={{
                      '0%': '#108ee9',
                      '100%': '#87d068',
                    }}
                  />
                </Space>
              </Card>

              {/* Pregunta actual */}
              <Card>
                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                  <div>
                    <Text type="secondary" style={{ fontSize: '14px' }}>
                      Pregunta {preguntaActual + 1} de {preguntas.length}
                    </Text>
                    <Title level={4} style={{ margin: '8px 0 24px 0' }}>
                      {pregunta?.pregunta}
                    </Title>
                  </div>

                  <Group 
                    value={respuestas[preguntaActual]}
                    onChange={(e) => handleRespuesta(preguntaActual, e.target.value)}
                  >
                    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                      {pregunta?.opciones.map((opcion, index) => (
                        <Radio 
                          key={index} 
                          value={index}
                          style={{ 
                            padding: '12px 16px',
                            border: '1px solid #f0f0f0',
                            borderRadius: '8px',
                            width: '100%',
                            margin: 0
                          }}
                        >
                          <Text style={{ fontSize: '16px' }}>{opcion}</Text>
                        </Radio>
                      ))}
                    </Space>
                  </Group>
                </Space>
              </Card>

              {/* Navegación */}
              <Card size="small">
                <Row gutter={16}>
                  <Col span={12}>
                    <Button 
                      block 
                      disabled={preguntaActual === 0}
                      onClick={() => setPreguntaActual(prev => prev - 1)}
                    >
                      Anterior
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Button 
                      type="primary" 
                      block 
                      disabled={preguntaActual === preguntas.length - 1}
                      onClick={() => setPreguntaActual(prev => prev + 1)}
                    >
                      Siguiente
                    </Button>
                  </Col>
                </Row>
              </Card>

              {/* Botón finalizar */}
              <Button
                type="primary"
                size="large"
                block
                disabled={!todasRespondidas}
                loading={loading}
                onClick={handleFinalizar}
                icon={<CheckCircleOutlined />}
                style={{ 
                  height: '48px', 
                  fontSize: '16px',
                  background: todasRespondidas ? '#52c41a' : '#f0f0f0',
                  borderColor: todasRespondidas ? '#52c41a' : '#f0f0f0'
                }}
              >
                {todasRespondidas ? 'Finalizar Examen' : 'Responde todas las preguntas para finalizar'}
              </Button>

              {!todasRespondidas && (
                <Alert
                  message="Examen incompleto"
                  description="Responde todas las preguntas para habilitar 'Finalizar'."
                  type="warning"
                  showIcon
                />
              )}
            </Space>
          </Col>
        </Row>
      </Content>

      <Modal
        title="¿Salir del examen?"
        open={mostrarConfirmacion}
        onOk={confirmarSalir}
        onCancel={() => setMostrarConfirmacion(false)}
        okText="Sí, salir"
        cancelText="Cancelar"
      >
        <p>¿Estás seguro de que quieres salir? Perderás todas tus respuestas.</p>
      </Modal>
    </Layout>
  )
}

export default Quiz
