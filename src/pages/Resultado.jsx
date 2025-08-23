import { useLocation, useNavigate } from 'react-router-dom'
import { 
  Layout, 
  Button, 
  Space, 
  Typography, 
  Row, 
  Col,
  Card,
  Statistic,
  Progress,
  Divider,
  Alert
} from 'antd'
import { 
  TrophyOutlined,
  CheckCircleOutlined,
  ReloadOutlined,
  ArrowLeftOutlined,
  StarOutlined
} from '@ant-design/icons'

const { Header, Content } = Layout
const { Title, Paragraph, Text } = Typography

const Resultado = () => {
  const location = useLocation()
  const navigate = useNavigate()
  
  const { resultado, tema, modo, temaId } = location.state || {}

  if (!resultado) {
    return (
      <Layout style={{ minHeight: '100vh', background: '#f5f5f5' }}>
        <Content style={{ padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Alert
            message="No hay resultados disponibles"
            description="No se encontraron resultados para mostrar."
            type="warning"
            showIcon
            action={
              <Button size="small" onClick={() => navigate('/matematicas')}>
                Volver al módulo
              </Button>
            }
          />
        </Content>
      </Layout>
    )
  }

  const { correctas, total, puntaje } = resultado
  const esModoCalificado = modo === 'graded'
  const esExcelente = puntaje >= 90
  const esBueno = puntaje >= 70
  const esRegular = puntaje >= 50

  const getMensaje = () => {
    if (esExcelente) return "¡Excelente trabajo! 🎉"
    if (esBueno) return "¡Buen trabajo! 👍"
    if (esRegular) return "¡Sigue practicando! 💪"
    return "¡No te rindas! 📚"
  }

  const getColor = () => {
    if (esExcelente) return '#52c41a'
    if (esBueno) return '#1890ff'
    if (esRegular) return '#faad14'
    return '#ff4d4f'
  }

  const handleReintentar = () => {
    navigate(`/matematicas/examenes/${temaId}/quiz?mode=${modo}`)
  }

  const handleVolverModulo = () => {
    navigate('/matematicas')
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
            onClick={handleVolverModulo}
            size="large"
          >
            Volver al módulo
          </Button>
        </Space>
        
        <Space>
          <TrophyOutlined style={{ fontSize: '24px', color: getColor() }} />
          <Title level={3} style={{ margin: 0, color: '#262626' }}>
            Resultados del Examen
          </Title>
        </Space>
        
        <div style={{ width: '80px' }}></div> {/* Spacer para centrar */}
      </Header>

      <Content style={{ padding: '24px' }}>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={20} md={16} lg={12}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              {/* Información del examen */}
              <Card>
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <Title level={4} style={{ color: '#666', marginBottom: '8px' }}>
                    {tema}
                  </Title>
                  <Text type="secondary">
                    Modo: {esModoCalificado ? 'Calificado' : 'Práctica'}
                  </Text>
                </div>
              </Card>

              {/* Estadísticas principales */}
              <Card>
                <Row gutter={[24, 24]}>
                  <Col span={12}>
                    <Statistic
                      title="Tu puntaje"
                      value={puntaje}
                      suffix="/100"
                      valueStyle={{ color: getColor(), fontSize: '32px' }}
                      prefix={<TrophyOutlined />}
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="Correctas"
                      value={correctas}
                      suffix={`/${total}`}
                      valueStyle={{ color: '#52c41a', fontSize: '32px' }}
                      prefix={<CheckCircleOutlined />}
                    />
                  </Col>
                </Row>
              </Card>

              {/* Barra de progreso */}
              <Card>
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text>Progreso del puntaje</Text>
                    <Text strong>{puntaje}%</Text>
                  </div>
                  <Progress 
                    percent={puntaje} 
                    status={puntaje === 100 ? "success" : "active"}
                    strokeColor={{
                      '0%': '#108ee9',
                      '100%': getColor(),
                    }}
                    size="large"
                  />
                </Space>
              </Card>

              {/* Mensaje motivacional */}
              <Card style={{ background: `${getColor()}05`, borderColor: getColor() }}>
                <div style={{ textAlign: 'center' }}>
                  <Title level={4} style={{ color: getColor(), marginBottom: '8px' }}>
                    {getMensaje()}
                  </Title>
                  <Paragraph style={{ color: '#666', margin: 0 }}>
                    {esExcelente && "¡Has dominado este tema completamente!"}
                    {esBueno && "¡Estás en el camino correcto!"}
                    {esRegular && "Con un poco más de práctica lo lograrás."}
                    {!esRegular && "Revisa los tutoriales y vuelve a intentarlo."}
                  </Paragraph>
                </div>
              </Card>

              {/* Información adicional para modo calificado */}
              {esModoCalificado && (
                <Alert
                  message="Resultado guardado"
                  description="Tu puntaje ha sido guardado en tu historial de progreso."
                  type="success"
                  showIcon
                  icon={<StarOutlined />}
                />
              )}

              <Divider />

              {/* Botones de acción */}
              <Row gutter={16}>
                <Col span={12}>
                  <Button
                    type="primary"
                    size="large"
                    block
                    icon={<ReloadOutlined />}
                    onClick={handleReintentar}
                    style={{ 
                      height: '48px', 
                      fontSize: '16px',
                      background: '#1890ff'
                    }}
                  >
                    Reintentar
                  </Button>
                </Col>
                <Col span={12}>
                  <Button
                    size="large"
                    block
                    icon={<ArrowLeftOutlined />}
                    onClick={handleVolverModulo}
                    style={{ 
                      height: '48px', 
                      fontSize: '16px'
                    }}
                  >
                    Volver al módulo
                  </Button>
                </Col>
              </Row>

              {/* Sugerencias */}
              <Card size="small" style={{ background: '#fafafa' }}>
                <Paragraph style={{ margin: 0, textAlign: 'center', color: '#666' }}>
                  <Text strong>Consejo:</Text> {puntaje < 80 ? 
                    "Revisa los tutoriales antes de volver a intentar el examen." : 
                    "¡Excelente! Puedes continuar con otros temas o practicar más."
                  }
                </Paragraph>
              </Card>
            </Space>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default Resultado
