import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Button,
  Space,
  Typography,
  Row,
  Col,
  Card,
  Alert
} from 'antd';
import {
  CalculatorOutlined,
  BookOutlined,
  GlobalOutlined,
  LaptopOutlined,
  PlayCircleOutlined,
  LockOutlined
} from '@ant-design/icons';
import ModalProximamente from '../components/ModalProximamente';
import { modulosActivos, Modulo } from '../data/modulosData';
import { RootState } from '../store/store';

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [moduloSeleccionado, setModuloSeleccionado] = useState<string>('');

  // Función para obtener el icono del módulo
  const obtenerIcono = (icono: string) => {
    switch (icono) {
      case 'CalculatorOutlined':
        return <CalculatorOutlined />;
      case 'BookOutlined':
        return <BookOutlined />;
      case 'GlobalOutlined':
        return <GlobalOutlined />;
      case 'LaptopOutlined':
        return <LaptopOutlined />;
      default:
        return <PlayCircleOutlined />;
    }
  };

  const handleModuloClick = (modulo: Modulo) => {
    if (modulo.activo) {
      if (modulo.requiereAuth && !isAuthenticated) {
        navigate('/login');
      } else {
        navigate(modulo.rutas.principal);
      }
    } else {
      setModuloSeleccionado(modulo.nombre);
      setModalVisible(true);
    }
  };

  return (
    <div style={{ 
      minHeight: 'calc(100vh - 64px)',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '24px'
    }}>
      {/* Header de la página */}
      <div style={{
        textAlign: 'center',
        marginBottom: '48px',
        padding: '40px 0'
      }}>
        <Space direction="vertical" align="center" size="large">
          <PlayCircleOutlined style={{ fontSize: '64px', color: 'white' }} />
          <div>
            <Title level={1} style={{ color: 'white', margin: 0, textAlign: 'center' }}>
              Aprendo+
            </Title>
            <Paragraph style={{ color: 'white', margin: '16px 0 0 0', textAlign: 'center', fontSize: '18px' }}>
              Tu plataforma de aprendizaje interactivo
            </Paragraph>
          </div>
        </Space>
      </div>

      {/* Mensaje de bienvenida para usuarios autenticados */}
      {isAuthenticated && (
        <div style={{ marginBottom: '32px' }}>
          <Alert
            message={`¡Bienvenido de vuelta, ${user?.name || user?.username}!`}
            description="Ya puedes acceder a todos los módulos disponibles."
            type="success"
            showIcon
            style={{ borderRadius: '12px' }}
          />
        </div>
      )}

      {/* Mensaje para usuarios no autenticados */}
      {!isAuthenticated && (
        <div style={{ marginBottom: '32px' }}>
          <Alert
            message="Acceso limitado"
            description="Inicia sesión para acceder a todos los módulos y funcionalidades."
            type="info"
            showIcon
            action={
              <Button size="small" type="primary" onClick={() => navigate('/login')}>
                Iniciar Sesión
              </Button>
            }
            style={{ borderRadius: '12px' }}
          />
        </div>
      )}

      {/* Módulos */}
      <Row gutter={[24, 24]} style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
        {modulosActivos.map((modulo) => (
          <Col xs={24} sm={12} lg={6} key={modulo.id}>
            <Card
              hoverable
              onClick={() => handleModuloClick(modulo)}
              style={{
                cursor: 'pointer',
                border: `2px solid ${modulo.color}`,
                borderRadius: '16px',
                transition: 'all 0.3s ease',
                background: 'white',
                height: '100%'
              }}
              bodyStyle={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <Space direction="vertical" size="middle" style={{ width: '100%', textAlign: 'center', flex: 1 }}>
                <div style={{
                  fontSize: '48px',
                  color: modulo.color,
                  marginBottom: '8px'
                }}>
                  {obtenerIcono(modulo.icono)}
                </div>

                <Title level={3} style={{
                  margin: 0,
                  color: '#262626'
                }}>
                  {modulo.nombre}
                </Title>

                <Paragraph style={{
                  margin: 0,
                  color: '#666',
                  fontSize: '14px',
                  flex: 1
                }}>
                  {modulo.descripcion}
                </Paragraph>

                {/* Indicador de autenticación requerida */}
                {modulo.requiereAuth && !isAuthenticated && (
                  <div style={{
                    background: '#fff2e8',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    color: '#d46b08',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}>
                    <LockOutlined />
                    Requiere login
                  </div>
                )}

                {/* Botón de acción */}
                <Button
                  type="primary"
                  size="large"
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    marginTop: '16px',
                    backgroundColor: modulo.color,
                    borderColor: modulo.color
                  }}
                >
                  {modulo.requiereAuth && !isAuthenticated ? 'Iniciar Sesión' : 'Acceder'}
                </Button>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>

      <ModalProximamente
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        moduloNombre={moduloSeleccionado}
      />
    </div>
  );
};

export default Home;
