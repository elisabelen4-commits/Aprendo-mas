import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, Typography, Space, Row, Col, Button, Tag, Statistic } from 'antd';
import { 
  FileTextOutlined, 
  TrophyOutlined, 
  ClockCircleOutlined, 
  CheckCircleOutlined,
  StarOutlined,
  BookOutlined
} from '@ant-design/icons';
import { getContentByGrade } from '../data/gradeContent';
import { useGrade } from '../hooks/useGrade';
import { getModuleName } from '../utils/moduleMapping';

const { Title, Paragraph, Text } = Typography;

const Examenes: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extraer moduloId de la URL
  const pathSegments = location.pathname.split('/');
  const moduloId = pathSegments[1] || 'matematicas';
  const { getGrade, getGradeName } = useGrade();
  const userGrade = getGrade();

  const handleExamenClick = (temaId: string) => {
    navigate(`/${moduloId}/examenes/${temaId}/quiz`);
  };

  const handleTutorialesClick = () => {
    navigate(`/${moduloId}/tutoriales`);
  };

  const getTemaStats = (tema: any) => {
    // Obtener último resultado desde localStorage
    const clave = `score:${moduloId}:${tema.id}`;
    const datos = localStorage.getItem(clave);
    const ultimoResultado = datos ? JSON.parse(datos) : null;
    
    return {
      ultimoPuntaje: ultimoResultado?.puntaje || 0,
      ultimaFecha: ultimoResultado?.timestamp || null,
      totalPreguntas: tema.preguntas.length,
      tiempoEstimado: Math.ceil(tema.preguntas.length * 1.5) // 1.5 min por pregunta
    };
  };

  const getPuntajeColor = (puntaje: number) => {
    if (puntaje >= 90) return '#52c41a';
    if (puntaje >= 70) return '#faad14';
    if (puntaje >= 50) return '#fa8c16';
    return '#f5222d';
  };

  const getPuntajeText = (puntaje: number) => {
    if (puntaje >= 90) return 'Excelente';
    if (puntaje >= 70) return 'Bueno';
    if (puntaje >= 50) return 'Regular';
    return 'Necesita mejorar';
  };

  // Obtener contenido específico por grado
  const moduleName = getModuleName(moduloId);
  const gradeContent = getContentByGrade(userGrade, moduleName);

  if (!gradeContent) {
    return (
      <div style={{ padding: '24px', textAlign: 'center' }}>
        <Title level={3}>Contenido no disponible</Title>
        <Paragraph>No hay contenido disponible para {getGradeName()} en este módulo.</Paragraph>
        <Button onClick={() => navigate(-1)}>Volver</Button>
      </div>
    );
  }

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header del módulo */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <Space direction="vertical" align="center" size="large">
          <FileTextOutlined style={{ fontSize: '64px', color: '#52c41a' }} />
          <div>
            <Title level={1} style={{ color: '#52c41a', margin: 0 }}>
              Exámenes de {
                moduloId === 'matematicas' ? 'Matemáticas' :
                moduloId === 'espanol' ? 'Español' :
                moduloId === 'ciencias-sociales' ? 'Ciencias Sociales' :
                'Computación'
              }
            </Title>
            <Paragraph style={{ fontSize: '18px', margin: '16px 0 0 0', color: '#666' }}>
              Pon a prueba tus conocimientos con nuestros exámenes interactivos - {getGradeName()}
            </Paragraph>
          </div>
        </Space>
      </div>

      {/* Estadísticas generales */}
      <Card style={{ marginBottom: '24px' }}>
        <Row gutter={24} justify="center">
          <Col xs={12} sm={6}>
            <Statistic
              title="Total de Temas"
              value={gradeContent.temas.length}
              prefix={<BookOutlined />}
            />
          </Col>
          <Col xs={12} sm={6}>
            <Statistic
              title="Total de Preguntas"
              value={gradeContent.temas.reduce((acc, tema) => acc + tema.preguntas.length, 0)}
              prefix={<FileTextOutlined />}
            />
          </Col>
          <Col xs={12} sm={6}>
            <Statistic
              title="Tiempo Estimado"
              value={Math.ceil(gradeContent.temas.reduce((acc, tema) => acc + tema.preguntas.length, 0) * 1.5)}
              suffix="min"
              prefix={<ClockCircleOutlined />}
            />
          </Col>
          <Col xs={12} sm={6}>
            <Statistic
              title="Exámenes Disponibles"
              value={gradeContent.temas.length}
              prefix={<TrophyOutlined />}
            />
          </Col>
        </Row>
      </Card>

      {/* Temas disponibles */}
      <Row gutter={[24, 24]}>
        {gradeContent.temas.map((tema) => {
          const stats = getTemaStats(tema);
          
          return (
            <Col xs={24} md={12} lg={8} key={tema.id}>
              <Card
                hoverable
                style={{
                  height: '100%',
                  border: '1px solid #d9d9d9',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease'
                }}
                bodyStyle={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <div style={{
                    fontSize: '48px',
                    color: '#52c41a',
                    marginBottom: '16px'
                  }}>
                    <FileTextOutlined />
                  </div>
                  
                  <Title level={3} style={{ margin: 0, color: '#262626' }}>
                    {tema.nombre}
                  </Title>
                  
                  <Paragraph style={{
                    margin: '8px 0 0 0',
                    color: '#666',
                    fontSize: '14px'
                  }}>
                    {tema.descripcion}
                  </Paragraph>
                </div>

                {/* Estadísticas del tema */}
                <div style={{ marginBottom: '20px' }}>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Statistic
                        title="Preguntas"
                        value={stats.totalPreguntas}
                      />
                    </Col>
                    <Col span={12}>
                      <Statistic
                        title="Tiempo"
                        value={stats.tiempoEstimado}
                        suffix="min"
                      />
                    </Col>
                  </Row>
                </div>

                {/* Último resultado */}
                {stats.ultimaFecha && (
                  <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                    <Title level={5}>Último Resultado:</Title>
                    <div style={{
                      background: '#f6ffed',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #b7eb8f'
                    }}>
                      <Statistic
                        value={stats.ultimoPuntaje}
                        suffix="%"
                        valueStyle={{ 
                          color: getPuntajeColor(stats.ultimoPuntaje),
                          fontSize: '24px'
                        }}
                      />
                      <Tag color={getPuntajeColor(stats.ultimoPuntaje)}>
                        {getPuntajeText(stats.ultimoPuntaje)}
                      </Tag>
                      <div style={{ marginTop: '8px' }}>
                        <Text type="secondary" style={{ fontSize: '12px' }}>
                          {new Date(stats.ultimaFecha).toLocaleDateString()}
                        </Text>
                      </div>
                    </div>
                  </div>
                )}

                {/* Botones de acción */}
                <div style={{ marginTop: 'auto', textAlign: 'center' }}>
                  <Space direction="vertical" size="small" style={{ width: '100%' }}>
                    <Button
                      type="primary"
                      size="large"
                      icon={<TrophyOutlined />}
                      onClick={() => handleExamenClick(tema.id)}
                      style={{
                        width: '100%',
                        borderRadius: '8px',
                        backgroundColor: '#52c41a',
                        borderColor: '#52c41a'
                      }}
                    >
                      {stats.ultimaFecha ? 'Repetir Examen' : 'Comenzar Examen'}
                    </Button>
                    
                    <Button
                      type="default"
                      size="small"
                      icon={<BookOutlined />}
                      onClick={handleTutorialesClick}
                      style={{ width: '100%' }}
                    >
                      Ver Tutoriales
                    </Button>
                  </Space>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>

      {/* Información adicional */}
      <Card style={{ marginTop: '32px' }}>
        <Title level={4}>Información del Examen</Title>
        <Row gutter={24}>
          <Col xs={24} md={8}>
            <div style={{ textAlign: 'center', padding: '16px' }}>
              <ClockCircleOutlined style={{ fontSize: '32px', color: '#faad14' }} />
              <Title level={5}>Tiempo</Title>
              <Paragraph>
                Cada pregunta tiene un tiempo estimado de 1.5 minutos. 
                Tómate tu tiempo para pensar bien las respuestas.
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div style={{ textAlign: 'center', padding: '16px' }}>
              <CheckCircleOutlined style={{ fontSize: '32px', color: '#52c41a' }} />
              <Title level={5}>Evaluación</Title>
              <Paragraph>
                Los exámenes se evalúan automáticamente y puedes ver 
                tus resultados inmediatamente.
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div style={{ textAlign: 'center', padding: '16px' }}>
              <StarOutlined style={{ fontSize: '32px', color: '#722ed1' }} />
              <Title level={5}>Progreso</Title>
              <Paragraph>
                Tu progreso se guarda automáticamente y puedes 
                repetir los exámenes cuando quieras.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </Card>

      {/* Navegación */}
      <div style={{ textAlign: 'center', marginTop: '32px' }}>
        <Space size="large">
          <Button 
            size="large" 
            onClick={() => navigate(`/${moduloId}`)}
          >
            Volver al Módulo
          </Button>
          <Button 
            type="primary" 
            size="large"
            icon={<BookOutlined />}
            onClick={handleTutorialesClick}
          >
            Ir a Tutoriales
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default Examenes;
