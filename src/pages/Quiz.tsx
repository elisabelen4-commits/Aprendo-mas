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
import { matematicasData, obtenerPreguntasAleatorias, calcularPuntaje, guardarResultado } from '../data/matematicasData';
import SOSModal from '../components/SOSModal';

const { Title, Paragraph } = Typography;

interface QuizState {
  currentQuestion: number;
  respuestas: number[];
  isCompleted: boolean;
  tiempoInicio: number;
  tiempoTotal: number;
}

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const { temaId } = useParams<{ temaId: string }>();
  
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    respuestas: [],
    isCompleted: false,
    tiempoInicio: Date.now(),
    tiempoTotal: 0
  });

  const [preguntas, setPreguntas] = useState<any[]>([]);
  const [resultado, setResultado] = useState<any>(null);
  const [sosVisible, setSosVisible] = useState<boolean>(false);

  useEffect(() => {
    if (temaId) {
      const tema = matematicasData.temas.find(t => t.id === temaId);
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
      <div style={{ padding: '24px', textAlign: 'center' }}>
        <Title level={2}>Tema no encontrado</Title>
        <Button onClick={() => navigate('/matematicas/examenes')}>
          Volver a Exámenes
        </Button>
      </div>
    );
  }

  const tema = matematicasData.temas.find(t => t.id === temaId)!;
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
      <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
        <Card style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '32px' }}>
            <TrophyOutlined style={{ fontSize: '64px', color: getPuntajeColor(resultado.puntaje) }} />
            <Title level={1} style={{ color: getPuntajeColor(resultado.puntaje), margin: '16px 0' }}>
              {getPuntajeText(resultado.puntaje)}
            </Title>
          </div>

          <Row gutter={24} style={{ marginBottom: '32px' }}>
            <Col span={8}>
              <Statistic
                title="Puntaje"
                value={resultado.puntaje}
                suffix="%"
                valueStyle={{ color: getPuntajeColor(resultado.puntaje), fontSize: '32px' }}
              />
            </Col>
            <Col span={8}>
              <Statistic
                title="Correctas"
                value={resultado.correctas}
                suffix={`/ ${resultado.total}`}
                valueStyle={{ fontSize: '32px' }}
              />
            </Col>
            <Col span={8}>
              <Statistic
                title="Tiempo"
                value={resultado.tiempoTotal}
                suffix="seg"
                valueStyle={{ fontSize: '32px' }}
              />
            </Col>
          </Row>

          <Space size="large" style={{ marginTop: '32px' }}>
            <Button 
              size="large" 
              icon={<ArrowLeftOutlined />}
              onClick={() => navigate('/matematicas/examenes')}
            >
              Volver a Exámenes
            </Button>
            <Button 
              type="primary" 
              size="large"
              icon={<ReloadOutlined />}
              onClick={handleRetakeQuiz}
            >
              Repetir Examen
            </Button>
            <Button 
              type="default" 
              size="large"
              onClick={() => navigate('/resultado')}
            >
              Ver Detalles
            </Button>
          </Space>
        </Card>
      </div>
    );
  }

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      {/* Header del examen */}
      <Card style={{ marginBottom: '24px' }}>
        <div style={{ textAlign: 'center' }}>
          <Title level={2} style={{ color: '#52c41a', margin: 0 }}>
            Examen: {tema.nombre}
          </Title>
          <Paragraph style={{ fontSize: '16px', margin: '8px 0 0 0', color: '#666' }}>
            {tema.descripcion}
          </Paragraph>
        </div>
      </Card>

      {/* Barra de progreso */}
      <Card style={{ marginBottom: '24px' }}>
        <Row gutter={24} align="middle">
          <Col span={16}>
            <Progress 
              percent={progressPercentage} 
              format={() => `${quizState.currentQuestion + 1} de ${preguntas.length}`}
              strokeColor="#52c41a"
            />
          </Col>
          <Col span={8} style={{ textAlign: 'right' }}>
            <Statistic
              title="Tiempo"
              value={Math.round((Date.now() - quizState.tiempoInicio) / 1000)}
              suffix="seg"
              prefix={<ClockCircleOutlined />}
            />
          </Col>
        </Row>
      </Card>

      {/* Pregunta actual */}
      <Card>
        <div style={{ marginBottom: '24px' }}>
          <Title level={4}>
            Pregunta {quizState.currentQuestion + 1} de {preguntas.length}
          </Title>
          <Paragraph style={{ fontSize: '18px', lineHeight: '1.6' }}>
            {currentQuestion.pregunta}
          </Paragraph>
        </div>

        {/* Opciones de respuesta */}
        <Radio.Group 
          value={quizState.respuestas[quizState.currentQuestion]}
          onChange={(e) => handleAnswerSelect(e.target.value)}
          style={{ width: '100%' }}
        >
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
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
                    fontWeight: 'bold'
                  }}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  {opcion}
                </Space>
              </Radio.Button>
            ))}
          </Space>
        </Radio.Group>

        {/* Navegación */}
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <Space size="large">
            <Button 
              size="large" 
              disabled={quizState.currentQuestion === 0}
              onClick={handlePreviousQuestion}
            >
              Anterior
            </Button>
            
            {quizState.currentQuestion < preguntas.length - 1 ? (
              <Button 
                type="primary" 
                size="large"
                disabled={quizState.respuestas[quizState.currentQuestion] === -1}
                onClick={handleNextQuestion}
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
      <Card style={{ marginTop: '24px' }}>
        <Row gutter={24}>
          <Col span={8}>
            <Statistic
              title="Preguntas"
              value={preguntas.length}
              prefix={<FileTextOutlined />}
            />
          </Col>
          <Col span={8}>
            <Statistic
              title="Respondidas"
              value={quizState.respuestas.filter(r => r !== -1).length}
              suffix={`/ ${preguntas.length}`}
              prefix={<CheckCircleOutlined />}
            />
          </Col>
          <Col span={8}>
            <Statistic
              title="Restantes"
              value={preguntas.length - quizState.respuestas.filter(r => r !== -1).length}
              prefix={<ClockCircleOutlined />}
            />
          </Col>
        </Row>
      </Card>

      {/* Botones de acción */}
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <Space size="large">
          <Button 
            size="large" 
            onClick={() => navigate('/matematicas/examenes')}
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
              boxShadow: '0 2px 8px rgba(245, 34, 45, 0.3)'
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
        moduloId="matematicas"
      />
    </div>
  );
};

export default Quiz;
