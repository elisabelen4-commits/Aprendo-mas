import React, { useState } from 'react';
import { Card, Typography, Space, Button, Row, Col, Alert } from 'antd';
import { 
  PlayCircleOutlined, 
  QuestionCircleOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';
import { getContentByGrade } from '../data/gradeContent';
import { useGrade } from '../hooks/useGrade';
import { getModuleName } from '../utils/moduleMapping';
import VoiceExplanation from './VoiceExplanation';
import RadioModeAudio from './RadioModeAudio';
import SOSModal from './SOSModal';

const { Title, Paragraph } = Typography;

interface TemaCompletoProps {
  temaId: string;
  moduloId: 'matematicas' | 'espanol' | 'ciencias-sociales' | 'computacion';
  onIniciarExamen: () => void;
}

const TemaCompleto: React.FC<TemaCompletoProps> = ({
  temaId,
  moduloId,
  onIniciarExamen
}) => {
  const [sosVisible, setSosVisible] = useState(false);
  const { getGrade, getGradeName } = useGrade();
  const userGrade = getGrade();
  
  // Obtener contenido específico por grado
  const moduleName = getModuleName(moduloId);
  const gradeContent = getContentByGrade(userGrade, moduleName);
  const tema = gradeContent?.temas.find(t => t.id === temaId);

  if (!tema) {
    return (
      <Alert
        message="Contenido no disponible"
        description={`No hay contenido disponible para este tema en ${getGradeName()}.`}
        type="warning"
        showIcon
      />
    );
  }

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header del tema */}
      <Card style={{ marginBottom: '24px' }}>
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={16}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <div>
                <Title level={2} style={{ margin: 0, color: '#1890ff' }}>
                  {tema.nombre}
                </Title>
                <Paragraph style={{ margin: '8px 0 0 0', fontSize: '16px', color: '#666' }}>
                  {tema.descripcion}
                </Paragraph>
                <Paragraph style={{ margin: '8px 0 0 0', fontSize: '14px', color: '#999' }}>
                  Grado: {getGradeName()}
                </Paragraph>
              </div>
            </Space>
          </Col>
          <Col xs={24} md={8} style={{ textAlign: 'center' }}>
            <Space direction="vertical" size="middle">
              <Button
                type="primary"
                size="large"
                icon={<ExclamationCircleOutlined />}
                onClick={() => setSosVisible(true)}
                style={{ width: '100%' }}
              >
                SOS - Ayuda
              </Button>
              <Button
                type="default"
                size="large"
                icon={<QuestionCircleOutlined />}
                onClick={onIniciarExamen}
                style={{ width: '100%' }}
              >
                Practicar (5 preguntas)
              </Button>
            </Space>
          </Col>
        </Row>
      </Card>

      {/* Contenido principal */}
      <Row gutter={[24, 24]}>
        {/* Columna izquierda - Videos y explicación */}
        <Col xs={24} lg={16}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            {/* Videos del tema */}
            {tema.videos && tema.videos.length > 0 && (
              <Card title="Videos explicativos" size="small">
                <Row gutter={[16, 16]}>
                  {tema.videos.map((video) => (
                    <Col xs={24} sm={12} key={video.id}>
                      <Card
                        hoverable
                        size="small"
                        cover={
                          <div style={{ 
                            height: '120px', 
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <PlayCircleOutlined style={{ fontSize: '48px', color: 'white' }} />
                          </div>
                        }
                      >
                        <Card.Meta
                          title={video.titulo}
                          description={
                            <Space direction="vertical" size="small">
                              <span style={{ fontSize: '12px', color: '#666' }}>
                                Duración: {video.duracion}
                              </span>
                              <span style={{ fontSize: '12px' }}>
                                {video.descripcion}
                              </span>
                            </Space>
                          }
                        />
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card>
            )}

            {/* Explicación con voz/IA */}
            <VoiceExplanation
              temaId={temaId}
              moduloId={moduloId}
              grade={userGrade}
              explicacionBase={tema.explicacionVoz}
            />

            {/* Audio modo radio */}
            <RadioModeAudio
              temaId={temaId}
              moduloId={moduloId}
              grade={userGrade}
              audioItems={tema.audioRadio}
            />
          </Space>
        </Col>

        {/* Columna derecha - Información adicional */}
        <Col xs={24} lg={8}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            {/* Información del tema */}
            <Card title="Información del tema" size="small">
              <Space direction="vertical" size="small" style={{ width: '100%' }}>
                <div>
                  <strong>Grado:</strong> {getGradeName()}
                </div>
                <div>
                  <strong>Módulo:</strong> {
                    moduloId === 'matematicas' ? 'Matemáticas' :
                    moduloId === 'espanol' ? 'Español' :
                    moduloId === 'ciencias-sociales' ? 'Ciencias Sociales' :
                    'Computación'
                  }
                </div>
                <div>
                  <strong>Videos disponibles:</strong> {tema.videos?.length || 0}
                </div>
                <div>
                  <strong>Audios disponibles:</strong> {tema.audioRadio?.length || 0}
                </div>
              </Space>
            </Card>

            {/* Pasos del SOS */}
            {tema.sosContent && tema.sosContent.length > 0 && (
              <Card title="Pasos de ayuda (SOS)" size="small">
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  {tema.sosContent.map((paso, index) => (
                    <div key={index} style={{ 
                      padding: '8px', 
                      border: '1px solid #f0f0f0', 
                      borderRadius: '4px',
                      backgroundColor: '#fafafa'
                    }}>
                      <strong>Paso {index + 1}:</strong> {paso.titulo}
                    </div>
                  ))}
                </Space>
              </Card>
            )}

            {/* Consejos de estudio */}
            <Card title="Consejos de estudio" size="small">
              <Space direction="vertical" size="small" style={{ width: '100%' }}>
                <div>• Ve los videos explicativos primero</div>
                <div>• Usa el SOS si tienes dudas</div>
                <div>• Escucha la explicación con voz</div>
                <div>• Repasa con los audios de radio</div>
                <div>• Practica con el examen</div>
              </Space>
            </Card>
          </Space>
        </Col>
      </Row>

      {/* Modal SOS */}
      <SOSModal
        visible={sosVisible}
        onClose={() => setSosVisible(false)}
        moduloId={moduloId}
        temaId={temaId}
      />
    </div>
  );
};

export default TemaCompleto;
