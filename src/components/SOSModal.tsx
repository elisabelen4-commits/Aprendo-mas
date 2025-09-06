import React, { useState, useEffect } from 'react';
import { Modal, Card, Typography, Space, Button, Progress, Radio, Row, Col, Alert } from 'antd';
import { 
  ExclamationCircleOutlined, 
  PlayCircleOutlined, 
  CheckCircleOutlined,
  BulbOutlined
} from '@ant-design/icons';
import { getContentByGrade } from '../data/gradeContent';
import { useGrade } from '../hooks/useGrade';
import { getModuleName } from '../utils/moduleMapping';

const { Title, Paragraph, Text } = Typography;

interface SOSStep {
  id: number;
  titulo: string;
  ejemplo: string;
  svgIcon: string;
  miniPregunta: {
    pregunta: string;
    opciones: string[];
    respuestaCorrecta: number;
    pistas: string[];
  };
}

interface SOSModalProps {
  visible: boolean;
  onClose: () => void;
  moduloId: string;
  temaId?: string;
}

const SOSModal: React.FC<SOSModalProps> = ({ visible, onClose, moduloId, temaId }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [stepCompleted, setStepCompleted] = useState<boolean>(false);
  const [miniPreguntaRespondida, setMiniPreguntaRespondida] = useState<boolean>(false);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<number>(-1);
  const [mostrarPista, setMostrarPista] = useState<boolean>(false);
  const [pistaActual, setPistaActual] = useState<string>('');
  const [pistaIndex, setPistaIndex] = useState<number>(0);
  
  const { getGrade } = useGrade();
  const userGrade = getGrade();

  // Datos específicos por módulo y grado
  const getSOSData = (): SOSStep[] => {
    // Intentar obtener contenido específico por grado y tema
    if (temaId) {
      const moduleName = getModuleName(moduloId);
      const gradeContent = getContentByGrade(userGrade, moduleName);
      if (gradeContent) {
        const tema = gradeContent.temas.find(t => t.id === temaId);
        if (tema && tema.sosContent && tema.pistas) {
          return tema.sosContent.map((sos, index) => ({
            id: index + 1,
            titulo: sos.titulo,
            ejemplo: sos.explicacion,
            svgIcon: `
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="40" height="40" rx="8" fill="#1890ff" opacity="0.1"/>
                <text x="30" y="35" text-anchor="middle" fill="#1890ff" font-size="16" font-weight="bold">${index + 1}</text>
              </svg>
            `,
            miniPregunta: {
              pregunta: `¿Entiendes el paso ${index + 1}?`,
              opciones: ['Sí', 'No', 'Más o menos', 'No sé'],
              respuestaCorrecta: 0,
              pistas: tema.pistas[index] || ['Piensa paso a paso', 'No te rindas', 'Puedes hacerlo']
            }
          }));
        }
      }
    }

    // Fallback a datos genéricos por módulo
    switch (moduloId) {
      case 'matematicas':
        return [
          {
            id: 1,
            titulo: 'Identifica el Tipo de Operación',
            ejemplo: 'Observa si es suma (+), resta (-), multiplicación (×) o división (÷)',
            svgIcon: `
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="40" height="40" rx="8" fill="#1890ff" opacity="0.1"/>
                <text x="30" y="35" text-anchor="middle" fill="#1890ff" font-size="24" font-weight="bold">+</text>
                <text x="30" y="50" text-anchor="middle" fill="#1890ff" font-size="12">- × ÷</text>
              </svg>
            `,
            miniPregunta: {
              pregunta: '¿Qué operación matemática es: 15 + 23?',
              opciones: ['Suma', 'Resta', 'Multiplicación', 'División'],
              respuestaCorrecta: 0,
              pistas: [
                'El símbolo + indica suma',
                'Estás juntando dos cantidades',
                'El resultado será mayor que cualquiera de los números'
              ]
            }
          },
          {
            id: 2,
            titulo: 'Aplica la Regla Básica',
            ejemplo: 'Para suma: alinea los números y suma columna por columna',
            svgIcon: `
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="40" height="40" rx="8" fill="#52c41a" opacity="0.1"/>
                <text x="30" y="25" text-anchor="middle" fill="#52c41a" font-size="12">15</text>
                <text x="30" y="35" text-anchor="middle" fill="#52c41a" font-size="12">+23</text>
                <line x1="15" y1="40" x2="45" y2="40" stroke="#52c41a" stroke-width="2"/>
                <text x="30" y="50" text-anchor="middle" fill="#52c41a" font-size="12">38</text>
              </svg>
            `,
            miniPregunta: {
              pregunta: '¿Cuál es el resultado de 15 + 23?',
              opciones: ['35', '38', '37', '36'],
              respuestaCorrecta: 1,
              pistas: [
                'Suma 5 + 3 = 8 (unidades)',
                'Suma 1 + 2 = 3 (decenas)',
                'El resultado es 38'
              ]
            }
          },
          {
            id: 3,
            titulo: 'Verifica tu Respuesta',
            ejemplo: 'Revisa si el resultado tiene sentido lógico',
            svgIcon: `
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="40" height="40" rx="8" fill="#faad14" opacity="0.1"/>
                <circle cx="30" cy="30" r="15" fill="none" stroke="#faad14" stroke-width="2"/>
                <path d="M25 30 L28 33 L35 26" stroke="#faad14" stroke-width="2" fill="none"/>
              </svg>
            `,
            miniPregunta: {
              pregunta: '¿Es lógico que 15 + 23 sea mayor que 30?',
              opciones: ['No', 'Sí', 'Depende', 'No sé'],
              respuestaCorrecta: 1,
              pistas: [
                '15 es mayor que 10',
                '23 es mayor que 20',
                'La suma debe ser mayor que 30'
              ]
            }
          }
        ];
      
      case 'espanol':
        return [
          {
            id: 1,
            titulo: 'Identifica la Categoría Gramatical',
            ejemplo: 'Determina si es sustantivo, verbo, adjetivo o adverbio',
            svgIcon: `
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="40" height="40" rx="8" fill="#1890ff" opacity="0.1"/>
                <text x="30" y="25" text-anchor="middle" fill="#1890ff" font-size="10">Sustantivo</text>
                <text x="30" y="35" text-anchor="middle" fill="#1890ff" font-size="10">Verbo</text>
                <text x="30" y="45" text-anchor="middle" fill="#1890ff" font-size="10">Adjetivo</text>
              </svg>
            `,
            miniPregunta: {
              pregunta: '¿Qué tipo de palabra es "casa"?',
              opciones: ['Verbo', 'Sustantivo', 'Adjetivo', 'Adverbio'],
              respuestaCorrecta: 1,
              pistas: [
                'Nombra un objeto',
                'Puede tener artículo: la casa',
                'Es una cosa, no una acción'
              ]
            }
          },
          {
            id: 2,
            titulo: 'Aplica la Regla de Acentuación',
            ejemplo: 'Cuenta las sílabas desde la derecha para determinar el acento',
            svgIcon: `
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="40" height="40" rx="8" fill="#52c41a" opacity="0.1"/>
                <text x="30" y="25" text-anchor="middle" fill="#52c41a" font-size="12">cá-sa</text>
                <text x="30" y="35" text-anchor="middle" fill="#52c41a" font-size="10">1  2</text>
                <text x="30" y="45" text-anchor="middle" fill="#52c41a" font-size="10">Grave</text>
              </svg>
            `,
            miniPregunta: {
              pregunta: '¿Cuántas sílabas tiene "casa"?',
              opciones: ['1 sílaba', '2 sílabas', '3 sílabas', '4 sílabas'],
              respuestaCorrecta: 1,
              pistas: [
                'Divide por vocales: ca-sa',
                'Cada vocal forma una sílaba',
                'Hay 2 vocales: a-a'
              ]
            }
          },
          {
            id: 3,
            titulo: 'Verifica la Ortografía',
            ejemplo: 'Revisa si las letras están en el orden correcto',
            svgIcon: `
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="40" height="40" rx="8" fill="#faad14" opacity="0.1"/>
                <text x="30" y="30" text-anchor="middle" fill="#faad14" font-size="16">c a s a</text>
                <text x="30" y="45" text-anchor="middle" fill="#faad14" font-size="10">✓ Correcto</text>
              </svg>
            `,
            miniPregunta: {
              pregunta: '¿Está bien escrita la palabra "casa"?',
              opciones: ['No', 'Sí', 'Depende', 'No sé'],
              respuestaCorrecta: 1,
              pistas: [
                'Empieza con c, no con k',
                'Tiene s, no z',
                'Termina con a, no con o'
              ]
            }
          }
        ];
      
      case 'ciencias-sociales':
        return [
          {
            id: 1,
            titulo: 'Identifica el Período Histórico',
            ejemplo: 'Determina si es prehispánico, colonial, independencia o moderno',
            svgIcon: `
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="40" height="40" rx="8" fill="#1890ff" opacity="0.1"/>
                <text x="30" y="25" text-anchor="middle" fill="#1890ff" font-size="10">Prehispánico</text>
                <text x="30" y="35" text-anchor="middle" fill="#1890ff" font-size="10">Colonial</text>
                <text x="30" y="45" text-anchor="middle" fill="#1890ff" font-size="10">Independencia</text>
              </svg>
            `,
            miniPregunta: {
              pregunta: '¿En qué período ocurrió la Independencia de México?',
              opciones: ['Prehispánico', 'Colonial', 'Independencia', 'Moderno'],
              respuestaCorrecta: 2,
              pistas: [
                'Ocurrió en el siglo XIX',
                'Fue un movimiento contra España',
                'Miguel Hidalgo fue el líder'
              ]
            }
          },
          {
            id: 2,
            titulo: 'Ubica el Lugar Geográfico',
            ejemplo: 'Identifica el estado, región o ciudad mencionada',
            svgIcon: `
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="40" height="40" rx="8" fill="#52c41a" opacity="0.1"/>
                <path d="M20 20 L40 20 L35 40 L25 40 Z" fill="none" stroke="#52c41a" stroke-width="2"/>
                <text x="30" y="50" text-anchor="middle" fill="#52c41a" font-size="10">México</text>
              </svg>
            `,
            miniPregunta: {
              pregunta: '¿En qué estado comenzó la Independencia?',
              opciones: ['Jalisco', 'Guanajuato', 'Michoacán', 'Querétaro'],
              respuestaCorrecta: 1,
              pistas: [
                'Fue en Dolores',
                'Está en el centro de México',
                'Miguel Hidalgo era cura ahí'
              ]
            }
          },
          {
            id: 3,
            titulo: 'Conecta con el Presente',
            ejemplo: 'Relaciona el hecho histórico con la actualidad',
            svgIcon: `
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="40" height="40" rx="8" fill="#faad14" opacity="0.1"/>
                <text x="30" y="25" text-anchor="middle" fill="#faad14" font-size="10">Pasado</text>
                <path d="M20 30 L40 30" stroke="#faad14" stroke-width="2"/>
                <text x="30" y="40" text-anchor="middle" fill="#faad14" font-size="10">Presente</text>
                <text x="30" y="50" text-anchor="middle" fill="#faad14" font-size="8">Libertad</text>
              </svg>
            `,
            miniPregunta: {
              pregunta: '¿Qué celebramos el 16 de septiembre?',
              opciones: ['La Revolución', 'La Independencia', 'La Constitución', 'El Día de Muertos'],
              respuestaCorrecta: 1,
              pistas: [
                'Es el Grito de Dolores',
                'Se celebra con fiestas patrias',
                'Es una fecha muy importante'
              ]
            }
          }
        ];
      
      case 'computacion':
        return [
          {
            id: 1,
            titulo: 'Identifica el Concepto',
            ejemplo: 'Determina si es hardware, software, programación o internet',
            svgIcon: `
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="40" height="40" rx="8" fill="#1890ff" opacity="0.1"/>
                <text x="30" y="25" text-anchor="middle" fill="#1890ff" font-size="10">Hardware</text>
                <text x="30" y="35" text-anchor="middle" fill="#1890ff" font-size="10">Software</text>
                <text x="30" y="45" text-anchor="middle" fill="#1890ff" font-size="10">Programación</text>
              </svg>
            `,
            miniPregunta: {
              pregunta: '¿Qué es el teclado de una computadora?',
              opciones: ['Hardware', 'Software', 'Programación', 'Internet'],
              respuestaCorrecta: 0,
              pistas: [
                'Puedes tocarlo físicamente',
                'Es una parte de la máquina',
                'No es un programa'
              ]
            }
          },
          {
            id: 2,
            titulo: 'Aplica la Lógica',
            ejemplo: 'Usa el pensamiento computacional para resolver el problema',
            svgIcon: `
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="40" height="40" rx="8" fill="#52c41a" opacity="0.1"/>
                <text x="30" y="25" text-anchor="middle" fill="#52c41a" font-size="10">Entrada</text>
                <path d="M20 30 L40 30" stroke="#52c41a" stroke-width="2"/>
                <text x="30" y="40" text-anchor="middle" fill="#52c41a" font-size="10">Proceso</text>
                <path d="M20 45 L40 45" stroke="#52c41a" stroke-width="2"/>
                <text x="30" y="55" text-anchor="middle" fill="#52c41a" font-size="8">Salida</text>
              </svg>
            `,
            miniPregunta: {
              pregunta: '¿Cuál es el primer paso para resolver un problema?',
              opciones: ['Programar', 'Analizar', 'Ejecutar', 'Probar'],
              respuestaCorrecta: 1,
              pistas: [
                'Necesitas entender el problema',
                'Es el paso inicial',
                'Antes de escribir código'
              ]
            }
          },
          {
            id: 3,
            titulo: 'Verifica la Solución',
            ejemplo: 'Comprueba si tu respuesta resuelve el problema original',
            svgIcon: `
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="40" height="40" rx="8" fill="#faad14" opacity="0.1"/>
                <circle cx="30" cy="30" r="15" fill="none" stroke="#faad14" stroke-width="2"/>
                <path d="M25 30 L28 33 L35 26" stroke="#faad14" stroke-width="2" fill="none"/>
                <text x="30" y="50" text-anchor="middle" fill="#faad14" font-size="8">✓ Correcto</text>
              </svg>
            `,
            miniPregunta: {
              pregunta: '¿Es importante probar tu código?',
              opciones: ['No', 'Sí', 'A veces', 'No sé'],
              respuestaCorrecta: 1,
              pistas: [
                'Los errores son comunes',
                'Asegura que funcione',
                'Es una buena práctica'
              ]
            }
          }
        ];
      
      default:
        return [];
    }
  };

  const sosData = getSOSData();
  const currentStepData = sosData.find(step => step.id === currentStep);

  // Función para hablar usando speechSynthesis
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  // Función para manejar la respuesta de la mini-pregunta
  const handleMiniPregunta = () => {
    if (respuestaSeleccionada === -1) return;
    
    if (respuestaSeleccionada === currentStepData?.miniPregunta.respuestaCorrecta) {
      setStepCompleted(true);
      setMiniPreguntaRespondida(true);
      setMostrarPista(false);
    } else {
      setMostrarPista(true);
      setPistaIndex(0);
      setPistaActual(currentStepData?.miniPregunta.pistas[0] || '');
    }
  };

  // Función para mostrar la siguiente pista
  const mostrarSiguientePista = () => {
    if (!currentStepData) return;
    
    const siguienteIndex = pistaIndex + 1;
    if (siguienteIndex < currentStepData.miniPregunta.pistas.length) {
      setPistaIndex(siguienteIndex);
      setPistaActual(currentStepData.miniPregunta.pistas[siguienteIndex]);
    } else {
      // Mostrar respuesta correcta
      setPistaActual(`Respuesta correcta: ${currentStepData.miniPregunta.opciones[currentStepData.miniPregunta.respuestaCorrecta]}`);
    }
  };

  // Función para avanzar al siguiente paso
  const siguientePaso = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      setStepCompleted(false);
      setMiniPreguntaRespondida(false);
      setRespuestaSeleccionada(-1);
      setMostrarPista(false);
      setPistaIndex(0);
    } else {
      // Completado
      onClose();
    }
  };

  // Función para reiniciar
  const reiniciar = () => {
    setCurrentStep(1);
    setStepCompleted(false);
    setMiniPreguntaRespondida(false);
    setRespuestaSeleccionada(-1);
    setMostrarPista(false);
    setPistaIndex(0);
  };

  // Limpiar al cerrar
  useEffect(() => {
    if (!visible) {
      reiniciar();
    }
  }, [visible]);

  if (!currentStepData) return null;

  return (
    <Modal
      title={
        <Space>
          <ExclamationCircleOutlined style={{ color: '#f5222d', fontSize: '20px' }} />
          <Title level={4} style={{ margin: 0, color: '#f5222d' }}>
            SOS - Sistema de Ayuda
          </Title>
        </Space>
      }
      open={visible}
      onCancel={onClose}
      footer={null}
      width="95%"
      style={{ maxWidth: '800px' }}
      centered
      destroyOnClose
    >
      {/* Barra de progreso */}
      <div style={{ marginBottom: '20px' }}>
        <Progress 
          percent={(currentStep / 3) * 100} 
          format={() => `Paso ${currentStep} de 3`}
          strokeColor="#f5222d"
          size="small"
        />
      </div>

      {/* Paso actual */}
      <Card style={{ marginBottom: '20px' }}>
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} sm={8} style={{ textAlign: 'center' }}>
            <div 
              dangerouslySetInnerHTML={{ __html: currentStepData.svgIcon }}
              style={{ textAlign: 'center' }}
            />
          </Col>
          <Col xs={24} sm={16}>
            <Title level={4} style={{ marginBottom: '8px', fontSize: '18px' }}>
              {currentStepData.titulo}
            </Title>
            <Paragraph style={{ marginBottom: '16px', fontSize: '14px' }}>
              {currentStepData.ejemplo}
            </Paragraph>
            <Button 
              type="primary" 
              icon={<PlayCircleOutlined />}
              onClick={() => speak(`${currentStepData.titulo}. ${currentStepData.ejemplo}`)}
              size="middle"
              style={{ width: '100%', maxWidth: '200px' }}
            >
              Escuchar
            </Button>
          </Col>
        </Row>
      </Card>

      {/* Mini-pregunta */}
      <Card title="Mini-Pregunta de Verificación" style={{ marginBottom: '20px' }}>
        <Paragraph style={{ fontSize: '16px', marginBottom: '16px' }}>
          {currentStepData.miniPregunta.pregunta}
        </Paragraph>

        <Radio.Group 
          value={respuestaSeleccionada}
          onChange={(e) => setRespuestaSeleccionada(e.target.value)}
          style={{ width: '100%' }}
        >
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            {currentStepData.miniPregunta.opciones.map((opcion, index) => (
              <Radio.Button
                key={index}
                value={index}
                style={{
                  width: '100%',
                  height: 'auto',
                  padding: '12px 16px',
                  textAlign: 'left',
                  fontSize: '14px',
                  borderRadius: '8px',
                  border: respuestaSeleccionada === index ? '2px solid #52c41a' : '1px solid #d9d9d9'
                }}
              >
                {opcion}
              </Radio.Button>
            ))}
          </Space>
        </Radio.Group>

        <div style={{ marginTop: '16px', textAlign: 'center' }}>
          <Button 
            type="primary"
            disabled={respuestaSeleccionada === -1}
            onClick={handleMiniPregunta}
            size="large"
            style={{ width: '100%', maxWidth: '300px' }}
          >
            Verificar Respuesta
          </Button>
        </div>

        {/* Resultado de la mini-pregunta */}
        {miniPreguntaRespondida && (
          <Alert
            message={
              <Space>
                <CheckCircleOutlined style={{ color: '#52c41a' }} />
                <Text strong>¡Correcto! Puedes continuar al siguiente paso.</Text>
              </Space>
            }
            type="success"
            showIcon={false}
            style={{ marginTop: '16px' }}
          />
        )}

        {/* Sistema de pistas */}
        {mostrarPista && (
          <div style={{ marginTop: '16px' }}>
            <Alert
              message={
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  <Space>
                    <BulbOutlined style={{ color: '#faad14' }} />
                    <Text strong>Pista:</Text>
                  </Space>
                  <Text>{pistaActual}</Text>
                  <Button 
                    size="middle" 
                    type="default"
                    onClick={mostrarSiguientePista}
                    style={{ width: '100%', maxWidth: '200px' }}
                  >
                    Siguiente Pista
                  </Button>
                </Space>
              }
              type="warning"
              showIcon={false}
            />
          </div>
        )}
      </Card>

      {/* Navegación */}
      <div style={{ textAlign: 'center' }}>
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Button 
            onClick={reiniciar}
            size="large"
            style={{ width: '100%', maxWidth: '200px' }}
          >
            Reiniciar
          </Button>
          
          {stepCompleted ? (
            <Button 
              type="primary"
              onClick={siguientePaso}
              size="large"
              style={{ width: '100%', maxWidth: '300px' }}
            >
              {currentStep < 3 ? 'Siguiente Paso' : 'Completar'}
            </Button>
          ) : (
            <Button 
              type="default"
              disabled={!stepCompleted}
              size="large"
              style={{ width: '100%', maxWidth: '300px' }}
            >
              {currentStep < 3 ? 'Siguiente Paso' : 'Completar'}
            </Button>
          )}
        </Space>
      </div>
    </Modal>
  );
};

export default SOSModal;
