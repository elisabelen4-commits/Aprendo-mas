import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Typography, Space, Button, Progress, Radio, Row, Col, Alert, Statistic } from 'antd';
import { 
  FileTextOutlined, 
  CheckCircleOutlined, 
  TrophyOutlined,
  ClockCircleOutlined,
  ArrowLeftOutlined,
  ReloadOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';
import { espanolData, obtenerPreguntasAleatorias, calcularPuntaje, guardarResultado } from '../data/espanolData';
import SOSModal from '../components/SOSModal';

const { Title, Paragraph } = Typography;

interface QuizState {
  currentQuestion: number;
  respuestas: number[];
  isCompleted: boolean;
  tiempoInicio: number;
  tiempoTotal: number;
}

const QuizEspanol: React.FC = () => {
  const navigate = useNavigate();
  const { temaId } = useParams<{ temaId: string }>();
  
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    respuestas: [],
    isCompleted: false,
    tiempoInicio: Date.now(),
    tiempoTotal: 0
  });

  const [preguntas, setPreguntas] = useState<Array<{
    id: number;
    pregunta: string;
    opciones: string[];
    respuestaCorrecta: number;
  }>>([]);
  const [resultado, setResultado] = useState<{
    correctas: number;
    total: number;
    puntaje: number;
    tiempoTotal: number;
    fecha: string;
  } | null>(null);
  const [sosVisible, setSosVisible] = useState<boolean>(false);

  useEffect(() => {
    if (temaId) {
      const tema = espanolData.temas.find(t => t.id === temaId);
      if (tema) {
        const preguntasAleatorias = obtenerPreguntasAleatorias(temaId, 5);
        setPreguntas(preguntasAleatorias);
        setQuizState(prev => ({
          ...prev,
          respuestas: new Array(preguntasAleatorias.length).fill(-1)
        }));
      }
    }
  }, [temaId]);

  useEffect(() => {
    if (quizState.isCompleted) {
      const tiempoTotal = Math.round((Date.now() - quizState.tiempoInicio) / 1000);
      setQuizState(prev => ({ ...prev, tiempoTotal }));
    }
  }, [quizState.isCompleted, quizState.tiempoInicio]);

  if (!temaId || preguntas.length === 0) {
    return (
      <div style={{ padding: '16px', textAlign: 'center' }}>
        <Title level={2} style={{ fontSize: '24px' }}>Tema no encontrado</Title>
        <Button onClick={() => navigate('/espanol/examenes')}>
          Volver a Exámenes
        </Button>
      </div>
    );
  }

  const tema = espanolData.temas.find(t => t.id === temaId)!;
  const currentQuestion = preguntas[quizState.currentQuestion];
  const progressPercentage = ((quizState.currentQuestion + 1) / preguntas.length) * 100;

  const handleAnswerSelect = (respuesta: number) => {
    const newRespuestas = [...quizState.respuestas];
    newRespuestas[quizState.currentQuestion] = respuesta;
    
    setQuizState(prev => ({
      ...prev,
      respuestas: newRespuestas
    }));
  };

  const handleNextQuestion = () => {
    if (quizState.currentQuestion < preguntas.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
    } else {
      // Examen completado
      const puntaje = calcularPuntaje(quizState.respuestas, preguntas);
      const resultadoFinal = {
        ...puntaje,
        tiempoTotal: Math.round((Date.now() - quizState.tiempoInicio) / 1000),
        fecha: new Date().toISOString()
      };
      
      guardarResultado(temaId, puntaje);
      setResultado(resultadoFinal);
      setQuizState(prev => ({ ...prev, isCompleted: true }));
    }
  };

  const handlePreviousQuestion = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }));
    }
  };

  const handleFinishQuiz = () => {
    const puntaje = calcularPuntaje(quizState.respuestas, preguntas);
    const resultadoFinal = {
      ...puntaje,
      tiempoTotal: Math.round((Date.now() - quizState.tiempoInicio) / 1000),
      fecha: new Date().toISOString()
    };
    
    guardarResultado(temaId, puntaje);
    setResultado(resultadoFinal);
    setQuizState(prev => ({ ...prev, isCompleted: true }));
  };

  const handleRetakeQuiz = () => {
    const preguntasAleatorias = obtenerPreguntasAleatorias(temaId, 5);
    setPreguntas(preguntasAleatorias);
    setQuizState({
      currentQuestion: 0,
      respuestas: new Array(preguntasAleatorias.length).fill(-1),
      isCompleted: false,
      tiempoInicio: Date.now(),
      tiempoTotal: 0
    });
    setResultado(null);
  };

  const getPuntajeColor = (puntaje: number) => {
    if (puntaje >= 90) return '#52c41a';
    if (puntaje >= 70) return '#faad14';
    if (puntaje >= 50) return '#fa8c16';
    return '#f5222d';
  };

  const getPuntajeText = (puntaje: number) => {
    if (puntaje >= 90) return '¡Excelente!';
    if (puntaje >= 70) return '¡Buen trabajo!';
    if (puntaje >= 50) return '¡Sigue practicando!';
    return 'Necesitas más práctica';
  };

  if (quizState.isCompleted && resultado) {
    return (
      <div style={{ padding: '16px', maxWidth: '800px', margin: '0 auto' }}>
        <Card style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '24px' }}>
            <TrophyOutlined style={{ fontSize: '48px', color: getPuntajeColor(resultado.puntaje) }} />
            <Title level={1} style={{ color: getPuntajeColor(resultado.puntaje), margin: '16px 0', fontSize: '28px' }}>
              {getPuntajeText(resultado.puntaje)}
            </Title>
          </div>

          <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
            <Col xs={24} sm={8}>
              <Statistic
                title="Puntaje"
                value={resultado.puntaje}
                suffix="%"
                valueStyle={{ color: getPuntajeColor(resultado.puntaje), fontSize: '24px' }}
              />
            </Col>
            <Col xs={24} sm={8}>
              <Statistic
                title="Correctas"
                value={resultado.correctas}
                suffix={`/ ${resultado.total}`}
                valueStyle={{ fontSize: '24px' }}
              />
            </Col>
            <Col xs={24} sm={8}>
              <Statistic
                title="Tiempo"
                value={resultado.tiempoTotal}
                suffix="seg"
                valueStyle={{ fontSize: '24px' }}
              />
            </Col>
          </Row>

          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Button 
              size="large" 
              icon={<ArrowLeftOutlined />}
              onClick={() => navigate('/espanol/examenes')}
              style={{ width: '100%', maxWidth: '300px' }}
            >
              Volver a Exámenes
            </Button>
            <Button 
              type="primary" 
              size="large"
              icon={<ReloadOutlined />}
              onClick={handleRetakeQuiz}
              style={{ width: '100%', maxWidth: '300px' }}
            >
              Repetir Examen
            </Button>
            <Button 
              type="default" 
              size="large"
              onClick={() => navigate('/resultado')}
              style={{ width: '100%', maxWidth: '300px' }}
            >
              Ver Detalles
            </Button>
          </Space>
        </Card>
      </div>
    );
  }

  return (
    <div style={{ padding: '16px', maxWidth: '800px', margin: '0 auto' }}>
      {/* Header del examen */}
      <Card style={{ marginBottom: '16px' }}>
        <div style={{ textAlign: 'center' }}>
          <Title level={2} style={{ color: '#52c41a', margin: 0, fontSize: '24px' }}>
            Examen: {tema.nombre}
          </Title>
          <Paragraph style={{ fontSize: '14px', margin: '8px 0 0 0', color: '#666' }}>
            {tema.descripcion}
          </Paragraph>
        </div>
      </Card>

      {/* Barra de progreso */}
      <Card style={{ marginBottom: '16px' }}>
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} sm={16}>
            <Progress 
              percent={progressPercentage} 
              format={() => `${quizState.currentQuestion + 1} de ${preguntas.length}`}
              strokeColor="#52c41a"
            />
          </Col>
          <Col xs={24} sm={8} style={{ textAlign: 'center' }}>
            <Statistic
              title="Tiempo"
              value={Math.round((Date.now() - quizState.tiempoInicio) / 1000)}
              suffix="seg"
              prefix={<ClockCircleOutlined />}
              valueStyle={{ fontSize: '18px' }}
            />
          </Col>
        </Row>
      </Card>

      {/* Pregunta actual */}
      <Card>
        <div style={{ marginBottom: '20px' }}>
          <Title level={4} style={{ fontSize: '18px' }}>
            Pregunta {quizState.currentQuestion + 1} de {preguntas.length}
          </Title>
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.6' }}>
            {currentQuestion.pregunta}
          </Paragraph>
        </div>

        {/* Opciones de respuesta */}
        <Radio.Group 
          value={quizState.respuestas[quizState.currentQuestion]}
          onChange={(e) => handleAnswerSelect(e.target.value)}
          style={{ width: '100%' }}
        >
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            {currentQuestion.opciones.map((opcion: string, index: number) => (
              <Radio.Button
                key={index}
                value={index}
                style={{
                  width: '100%',
                  height: 'auto',
                  padding: '16px',
                  textAlign: 'left',
                  fontSize: '16px',
                  border: quizState.respuestas[quizState.currentQuestion] === index ? '2px solid #52c41a' : '1px solid #d9d9d9',
                  borderRadius: '8px'
                }}
              >
                <Space>
                  <span style={{ 
                    width: '24px', 
                    height: '24px', 
                    borderRadius: '50%', 
                    background: quizState.respuestas[quizState.currentQuestion] === index ? '#52c41a' : '#f0f0f0',
                    color: quizState.respuestas[quizState.currentQuestion] === index ? 'white' : '#666',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    flexShrink: 0
                  }}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span style={{ wordBreak: 'break-word' }}>{opcion}</span>
                </Space>
              </Radio.Button>
            ))}
          </Space>
        </Radio.Group>

        {/* Navegación */}
        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Button 
              size="large" 
              disabled={quizState.currentQuestion === 0}
              onClick={handlePreviousQuestion}
              style={{ width: '100%', maxWidth: '200px' }}
            >
              Anterior
            </Button>
            
            {quizState.currentQuestion < preguntas.length - 1 ? (
              <Button 
                type="primary" 
                size="large"
                disabled={quizState.respuestas[quizState.currentQuestion] === -1}
                onClick={handleNextQuestion}
                style={{ width: '100%', maxWidth: '300px' }}
              >
                Siguiente
              </Button>
            ) : (
              <Button 
                type="primary" 
                size="large"
                icon={<TrophyOutlined />}
                disabled={quizState.respuestas.some(r => r === -1)}
                onClick={handleFinishQuiz}
                style={{ width: '100%', maxWidth: '300px' }}
              >
                Finalizar Examen
              </Button>
            )}
          </Space>
        </div>

        {/* Alerta si no se ha seleccionado respuesta */}
        {quizState.respuestas[quizState.currentQuestion] === -1 && (
          <Alert
            message="Selecciona una respuesta para continuar"
            type="info"
            showIcon
            style={{ marginTop: '16px' }}
          />
        )}
      </Card>

      {/* Información del examen */}
      <Card style={{ marginTop: '16px' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={8}>
            <Statistic
              title="Preguntas"
              value={preguntas.length}
              prefix={<FileTextOutlined />}
              valueStyle={{ fontSize: '18px' }}
            />
          </Col>
          <Col xs={24} sm={8}>
            <Statistic
              title="Respondidas"
              value={quizState.respuestas.filter(r => r !== -1).length}
              suffix={`/ ${preguntas.length}`}
              prefix={<CheckCircleOutlined />}
              valueStyle={{ fontSize: '18px' }}
            />
          </Col>
          <Col xs={24} sm={8}>
            <Statistic
              title="Restantes"
              value={preguntas.length - quizState.respuestas.filter(r => r !== -1).length}
              prefix={<ClockCircleOutlined />}
              valueStyle={{ fontSize: '18px' }}
            />
          </Col>
        </Row>
      </Card>

      {/* Botones de acción */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Button 
            size="large" 
            onClick={() => navigate('/espanol/examenes')}
            style={{ width: '100%', maxWidth: '300px' }}
          >
            Cancelar Examen
          </Button>
          
          {/* Botón SOS */}
          <Button 
            type="primary" 
            danger
            size="large"
            icon={<ExclamationCircleOutlined />}
            onClick={() => setSosVisible(true)}
            style={{
              background: '#f5222d',
              borderColor: '#f5222d',
              boxShadow: '0 2px 8px rgba(245, 34, 45, 0.3)',
              width: '100%',
              maxWidth: '300px'
            }}
          >
            SOS - ¡Necesito Ayuda!
          </Button>
        </Space>
      </div>

      {/* Modal SOS */}
      <SOSModal
        visible={sosVisible}
        onClose={() => setSosVisible(false)}
        moduloId="espanol"
      />
    </div>
  );
};

export default QuizEspanol;
