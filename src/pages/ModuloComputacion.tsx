import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Space, Typography, Row, Col, Card } from 'antd';
import { LaptopOutlined, PlayCircleOutlined, FileTextOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const ModuloComputacion: React.FC = () => {
  const navigate = useNavigate();

  const opciones = [
    {
      id: 'tutoriales',
      titulo: 'Tutoriales',
      descripcion: 'Aprende con videos explicativos paso a paso',
      icono: <PlayCircleOutlined />,
      color: '#722ed1',
      ruta: '/computacion/tutoriales'
    },
    {
      id: 'examenes',
      titulo: 'Exámenes',
      descripcion: 'Pon a prueba tus conocimientos',
      icono: <FileTextOutlined />,
      color: '#722ed1',
      ruta: '/computacion/examenes'
    }
  ];

  const handleOpcionClick = (ruta: string) => {
    navigate(ruta);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <Space direction="vertical" align="center" size="large">
          <LaptopOutlined style={{ fontSize: '64px', color: '#722ed1' }} />
          <div>
            <Title level={1} style={{ color: '#722ed1', margin: 0 }}>
              Módulo de Computación
            </Title>
            <Paragraph style={{ fontSize: '18px', margin: '16px 0 0 0', color: '#666' }}>
              Programación básica y herramientas digitales
            </Paragraph>
          </div>
        </Space>
      </div>

      <Row gutter={[24, 24]} justify="center">
        {opciones.map((opcion) => (
          <Col xs={24} sm={12} md={8} key={opcion.id}>
            <Card
              hoverable
              onClick={() => handleOpcionClick(opcion.ruta)}
              style={{
                cursor: 'pointer',
                border: `2px solid ${opcion.color}`,
                borderRadius: '16px',
                transition: 'all 0.3s ease',
                height: '100%'
              }}
              bodyStyle={{ padding: '24px', textAlign: 'center', height: '100%' }}
            >
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <div style={{
                  fontSize: '48px',
                  color: opcion.color,
                  marginBottom: '16px'
                }}>
                  {opcion.icono}
                </div>

                <Title level={3} style={{ margin: 0, color: '#262626' }}>
                  {opcion.titulo}
                </Title>

                <Paragraph style={{
                  margin: 0,
                  color: '#666',
                  fontSize: '16px'
                }}>
                  {opcion.descripcion}
                </Paragraph>

                <Button
                  type="primary"
                  size="large"
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    marginTop: '16px',
                    backgroundColor: opcion.color,
                    borderColor: opcion.color
                  }}
                >
                  Comenzar
                </Button>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ModuloComputacion;
