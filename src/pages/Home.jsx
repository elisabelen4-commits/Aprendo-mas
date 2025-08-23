import { useState } from 'react'
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
  CalculatorOutlined,
  BookOutlined,
  GlobalOutlined,
  LaptopOutlined,
  PlayCircleOutlined
} from '@ant-design/icons'
import ModalProximamente from '../components/ModalProximamente'
import { modulosInactivos } from '../data/matematicasData'

const { Header, Content } = Layout
const { Title, Paragraph } = Typography

const Home = () => {
  const navigate = useNavigate()
  const [modalVisible, setModalVisible] = useState(false)
  const [moduloSeleccionado, setModuloSeleccionado] = useState('')

  const modulos = [
    {
      id: 'matematicas',
      nombre: 'Matemáticas',
      descripcion: 'Números, operaciones y problemas',
      icono: <CalculatorOutlined />,
      activo: true,
      color: '#1890ff'
    },
    ...modulosInactivos.map(modulo => ({
      ...modulo,
      icono: modulo.id === 'espanol' ? <BookOutlined /> : 
             modulo.id === 'ciencias-sociales' ? <GlobalOutlined /> : 
             <LaptopOutlined />,
      color: '#d9d9d9'
    }))
  ]

  const handleModuloClick = (modulo) => {
    if (modulo.activo) {
      navigate('/matematicas')
    } else {
      setModuloSeleccionado(modulo.nombre)
      setModalVisible(true)
    }
  }

  return (
    <Layout style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <Header style={{ 
        background: 'transparent', 
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 24px'
      }}>
        <Space direction="vertical" align="center" size="small">
          <PlayCircleOutlined style={{ fontSize: '48px', color: 'white' }} />
          <Title level={2} style={{ color: 'white', margin: 0, textAlign: 'center' }}>
            Aprendo+
          </Title>
          <Paragraph style={{ color: 'white', margin: 0, textAlign: 'center', fontSize: '16px' }}>
            Tu plataforma de aprendizaje interactivo
          </Paragraph>
        </Space>
      </Header>

      <Content style={{ padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Row gutter={[24, 24]} style={{ width: '100%', maxWidth: '600px' }}>
          {modulos.map((modulo) => (
            <Col xs={24} key={modulo.id}>
              <Card
                hoverable
                onClick={() => handleModuloClick(modulo)}
                style={{
                  cursor: modulo.activo ? 'pointer' : 'pointer',
                  border: `2px solid ${modulo.color}`,
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  background: modulo.activo ? 'white' : '#fafafa'
                }}
                bodyStyle={{ padding: '24px' }}
              >
                <Space direction="vertical" size="middle" style={{ width: '100%', textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: '48px', 
                    color: modulo.activo ? modulo.color : '#bfbfbf',
                    marginBottom: '8px'
                  }}>
                    {modulo.icono}
                  </div>
                  
                  <Title level={3} style={{ 
                    margin: 0, 
                    color: modulo.activo ? '#262626' : '#8c8c8c'
                  }}>
                    {modulo.nombre}
                  </Title>
                  
                  <Paragraph style={{ 
                    margin: 0, 
                    color: modulo.activo ? '#666' : '#bfbfbf',
                    fontSize: '14px'
                  }}>
                    {modulo.descripcion}
                  </Paragraph>
                  
                  {!modulo.activo && (
                    <div style={{
                      background: '#f0f0f0',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      color: '#8c8c8c',
                      fontWeight: '500'
                    }}>
                      Próximamente
                    </div>
                  )}
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>

      <ModalProximamente
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        moduloNombre={moduloSeleccionado}
      />
    </Layout>
  )
}

export default Home
