import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Card, 
  Typography, 
  Space, 
  Row, 
  Col, 
  Statistic, 
  Progress, 
  Button, 
  List, 
  Tag, 
  Avatar,
  Badge
} from 'antd';
import { 
  TrophyOutlined, 
  PlayCircleOutlined, 
  FileTextOutlined, 
  FireOutlined,
  ClockCircleOutlined,
  StarOutlined,
  BookOutlined,
  CalendarOutlined,
  UserOutlined
} from '@ant-design/icons';
import { RootState } from '../store/store';
import { updateStudyStreak, checkBadgesAndAchievements, Badge as BadgeType, Achievement as AchievementType, VideoProgress, ExamResult } from '../store/progressSlice';
import { modulosActivos } from '../data/modulosData';

const { Title, Paragraph, Text } = Typography;

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const { userStats, badges, achievements, videoProgress, examResults } = useSelector((state: RootState) => state.progress);

  useEffect(() => {
    // Actualizar racha de estudio al cargar el dashboard
    dispatch(updateStudyStreak());
    dispatch(checkBadgesAndAchievements());
    
  }, [dispatch, examResults, userStats]);

  const getModuloProgress = (moduloId: string) => {
    const videos: VideoProgress[] = videoProgress[moduloId] || [];
    const completedVideos = videos.filter((v: VideoProgress) => v.completed).length;
    const totalVideos = modulosActivos.find(m => m.id === moduloId)?.data.temas.reduce((acc: number, tema: any) => acc + tema.videos.length, 0) || 0;
    
    return {
      completed: completedVideos,
      total: totalVideos,
      percentage: totalVideos > 0 ? Math.round((completedVideos / totalVideos) * 100) : 0
    };
  };

  const getModuloExamProgress = (moduloId: string) => {
    const results: ExamResult[] = examResults[moduloId] || [];
    const completedExams = new Set(results.map(r => r.temaId)).size; // Temas únicos completados
    const totalTopics = modulosActivos.find(m => m.id === moduloId)?.data.temas.length || 0;
    
    
    return {
      completed: completedExams,
      total: totalTopics,
      percentage: totalTopics > 0 ? Math.round((completedExams / totalTopics) * 100) : 0
    };
  };

  const getModuloExamStats = (moduloId: string) => {
    const results: ExamResult[] = examResults[moduloId] || [];
    if (results.length === 0) return { average: 0, attempts: 0, bestScore: 0 };
    
    const average = Math.round(results.reduce((acc: number, r: ExamResult) => acc + r.puntaje, 0) / results.length);
    const attempts = results.length;
    const bestScore = Math.max(...results.map((r: ExamResult) => r.puntaje));
    
    return { average, attempts, bestScore };
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'PlayCircleOutlined': return <PlayCircleOutlined />;
      case 'VideoCameraOutlined': return <PlayCircleOutlined />;
      case 'TrophyOutlined': return <TrophyOutlined />;
      case 'FireOutlined': return <FireOutlined />;
      case 'SunOutlined': return <StarOutlined />;
      case 'MoonOutlined': return <StarOutlined />;
      case 'CalendarOutlined': return <CalendarOutlined />;
      default: return <StarOutlined />;
    }
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header del Dashboard */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <Space direction="vertical" align="center" size="large">
          <UserOutlined style={{ fontSize: '64px', color: '#1890ff' }} />
          <div>
            <Title level={1} style={{ color: '#1890ff', margin: 0 }}>
              Dashboard de {user?.name || user?.username}
            </Title>
            <Paragraph style={{ fontSize: '18px', margin: '16px 0 0 0', color: '#666' }}>
              Tu progreso de aprendizaje y logros
            </Paragraph>
          </div>
        </Space>
      </div>

      {/* Estadísticas principales */}
      <Row gutter={[24, 24]} style={{ marginBottom: '32px' }}>
        <Col xs={12} sm={6}>
          <Card>
            <Statistic
              title="Videos Completados"
              value={userStats.totalVideosWatched}
              prefix={<PlayCircleOutlined style={{ color: '#52c41a' }} />}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card>
            <Statistic
              title="Exámenes Tomados"
              value={userStats.totalExamsTaken}
              prefix={<FileTextOutlined style={{ color: '#fa8c16' }} />}
              valueStyle={{ color: '#fa8c16' }}
            />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card>
            <Statistic
              title="Promedio de Puntaje"
              value={userStats.averageScore}
              suffix="%"
              prefix={<TrophyOutlined style={{ color: '#faad14' }} />}
              valueStyle={{ color: '#faad14' }}
            />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card id="racha-section">
            <Statistic
              title="Racha Actual"
              value={userStats.currentStreak}
              suffix="días"
              prefix={<FireOutlined style={{ color: '#f5222d' }} />}
              valueStyle={{ color: '#f5222d' }}
            />
          </Card>
        </Col>
      </Row>

      {/* Progreso por módulo */}
      <Card title="Progreso por Módulo" style={{ marginBottom: '32px' }}>
        <Row gutter={[24, 24]}>
          {modulosActivos.map((modulo) => {
            const progress = getModuloProgress(modulo.id);
            const examProgress = getModuloExamProgress(modulo.id);
            const examStats = getModuloExamStats(modulo.id);
            
            return (
              <Col xs={24} md={12} lg={8} key={modulo.id}>
                <Card
                  size="small"
                  style={{
                    border: `2px solid ${modulo.color}`,
                    borderRadius: '12px'
                  }}
                >
                  <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <div style={{
                      fontSize: '32px',
                      color: modulo.color,
                      marginBottom: '8px'
                    }}>
                      {getIconComponent(modulo.icono)}
                    </div>
                    <Title level={4} style={{ margin: 0, color: modulo.color }}>
                      {modulo.nombre}
                    </Title>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <Text>Videos: {progress.completed}/{progress.total}</Text>
                      <Text strong>{progress.percentage}%</Text>
                    </div>
                    <Progress 
                      percent={progress.percentage} 
                      strokeColor={modulo.color}
                      size="small"
                    />
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <Text>Exámenes: {examProgress.completed}/{examProgress.total}</Text>
                      <Text strong>{examProgress.percentage}%</Text>
                    </div>
                    <Progress 
                      percent={examProgress.percentage} 
                      strokeColor={modulo.color}
                      size="small"
                      strokeLinecap="round"
                    />
                  </div>

                  {examStats.attempts > 0 && (
                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <Text>Mejor puntaje:</Text>
                        <Text strong>{examStats.bestScore}%</Text>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <Text>Promedio:</Text>
                        <Text strong>{examStats.average}%</Text>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Text>Intentos:</Text>
                        <Text strong>{examStats.attempts}</Text>
                      </div>
                    </div>
                  )}

                  <Button
                    type="primary"
                    size="small"
                    style={{
                      width: '100%',
                      backgroundColor: modulo.color,
                      borderColor: modulo.color
                    }}
                    onClick={() => navigate(modulo.rutas.principal)}
                  >
                    Continuar
                  </Button>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Card>

      {/* Badges y Logros */}
      <Row gutter={24}>
        {/* Badges */}
        <Col xs={24} lg={12}>
          <Card id="badges-section" title="Badges Desbloqueados" style={{ marginBottom: '24px' }}>
            <List
              dataSource={badges.filter((b: BadgeType) => b.unlockedAt)}
              renderItem={(badge: BadgeType) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Badge count={badge.unlockedAt ? '✓' : ''} offset={[-5, 5]}>
                        <Avatar 
                          size={48} 
                          style={{ backgroundColor: badge.color }}
                          icon={getIconComponent(badge.icono)}
                        />
                      </Badge>
                    }
                    title={
                      <Space>
                        <Text strong style={{ color: badge.color }}>
                          {badge.nombre}
                        </Text>
                        <Tag color="green">Desbloqueado</Tag>
                      </Space>
                    }
                    description={
                      <div>
                        <Paragraph style={{ margin: '4px 0' }}>
                          {badge.descripcion}
                        </Paragraph>
                        <Text type="secondary" style={{ fontSize: '12px' }}>
                          Desbloqueado el {new Date(badge.unlockedAt!).toLocaleDateString()}
                        </Text>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
            
            {badges.filter((b: BadgeType) => !b.unlockedAt).length > 0 && (
              <div style={{ marginTop: '16px' }}>
                <Title level={5}>Badges Pendientes</Title>
                <List
                  dataSource={badges.filter((b: BadgeType) => !b.unlockedAt)}
                  renderItem={(badge: BadgeType) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Avatar 
                            size={48} 
                            style={{ backgroundColor: '#d9d9d9' }}
                            icon={getIconComponent(badge.icono)}
                          />
                        }
                        title={
                          <Space>
                            <Text type="secondary">{badge.nombre}</Text>
                            <Tag color="default">Bloqueado</Tag>
                          </Space>
                        }
                        description={
                          <div>
                            <Paragraph style={{ margin: '4px 0' }}>
                              {badge.descripcion}
                            </Paragraph>
                            <Text type="secondary" style={{ fontSize: '12px' }}>
                              Requisito: {badge.requirement.description}
                            </Text>
                          </div>
                        }
                      />
                    </List.Item>
                  )}
                />
              </div>
            )}
          </Card>
        </Col>

        {/* Logros */}
        <Col xs={24} lg={12}>
          <Card title="Logros Desbloqueados">
            <List
              dataSource={achievements.filter((a: AchievementType) => a.unlockedAt)}
              renderItem={(achievement: AchievementType) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Badge count={achievement.unlockedAt ? '🏆' : ''} offset={[-5, 5]}>
                        <Avatar 
                          size={48} 
                          style={{ backgroundColor: achievement.color }}
                          icon={getIconComponent(achievement.icono)}
                        />
                      </Badge>
                    }
                    title={
                      <Space>
                        <Text strong style={{ color: achievement.color }}>
                          {achievement.nombre}
                        </Text>
                        <Tag color="gold">Logro</Tag>
                      </Space>
                    }
                    description={
                      <div>
                        <Paragraph style={{ margin: '4px 0' }}>
                          {achievement.descripcion}
                        </Paragraph>
                        <Text type="secondary" style={{ fontSize: '12px' }}>
                          Desbloqueado el {new Date(achievement.unlockedAt!).toLocaleDateString()}
                        </Text>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
            
            {achievements.filter((a: AchievementType) => !a.unlockedAt).length > 0 && (
              <div style={{ marginTop: '16px' }}>
                <Title level={5}>Logros Pendientes</Title>
                <List
                  dataSource={achievements.filter((a: AchievementType) => !a.unlockedAt)}
                  renderItem={(achievement: AchievementType) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Avatar 
                            size={48} 
                            style={{ backgroundColor: '#d9d9d9' }}
                            icon={getIconComponent(achievement.icono)}
                          />
                        }
                        title={
                          <Space>
                            <Text type="secondary">{achievement.nombre}</Text>
                            <Tag color="default">Bloqueado</Tag>
                          </Space>
                        }
                        description={
                          <div>
                            <Paragraph style={{ margin: '4px 0' }}>
                              {achievement.descripcion}
                            </Paragraph>
                            <Text type="secondary" style={{ fontSize: '12px' }}>
                              Requisito: {achievement.requirement.description}
                            </Text>
                          </div>
                        }
                      />
                    </List.Item>
                  )}
                />
              </div>
            )}
          </Card>
        </Col>
      </Row>

      {/* Resultados Recientes de Exámenes */}
      <Card title="Resultados Recientes de Exámenes" style={{ marginTop: '24px' }}>
        {(() => {
          // Obtener todos los resultados de exámenes de todos los módulos
          const allResults = Object.entries(examResults)
            .flatMap(([moduloId, results]) => 
              (results as ExamResult[]).map((result: ExamResult) => ({ ...result, moduloId }))
            )
            .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
            .slice(0, 10); // Mostrar solo los 10 más recientes

          if (allResults.length === 0) {
            return (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <FileTextOutlined style={{ fontSize: '48px', color: '#d9d9d9', marginBottom: '16px' }} />
                <Paragraph type="secondary">
                  Aún no has completado ningún examen. ¡Comienza a estudiar!
                </Paragraph>
              </div>
            );
          }

          return (
            <List
              dataSource={allResults}
              renderItem={(result) => {
                const modulo = modulosActivos.find(m => m.id === result.moduloId);
                const getScoreColor = (score: number) => {
                  if (score >= 80) return '#52c41a';
                  if (score >= 60) return '#faad14';
                  return '#f5222d';
                };

                return (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar 
                          size={48} 
                          style={{ backgroundColor: modulo?.color || '#1890ff' }}
                          icon={modulo ? getIconComponent(modulo.icono) : <FileTextOutlined />}
                        />
                      }
                      title={
                        <Space>
                          <Text strong>{modulo?.nombre || 'Módulo'}</Text>
                          <Tag color={getScoreColor(result.puntaje)}>
                            {result.puntaje}%
                          </Tag>
                        </Space>
                      }
                      description={
                        <div>
                          <Paragraph style={{ margin: '4px 0' }}>
                            {result.correctas}/{result.total} preguntas correctas
                          </Paragraph>
                          <Text type="secondary" style={{ fontSize: '12px' }}>
                            Completado el {new Date(result.completedAt).toLocaleDateString()} a las {new Date(result.completedAt).toLocaleTimeString()}
                          </Text>
                          <br />
                          <Text type="secondary" style={{ fontSize: '12px' }}>
                            Tiempo: {Math.round(result.tiempoTotal / 60)} minutos
                          </Text>
                        </div>
                      }
                    />
                  </List.Item>
                );
              }}
            />
          );
        })()}
      </Card>

      {/* Estadísticas adicionales */}
      <Card title="Estadísticas Detalladas" style={{ marginTop: '24px' }}>
        <Row gutter={24}>
          <Col xs={12} sm={6}>
            <Statistic
              title="Tiempo Total de Estudio"
              value={userStats.totalStudyTime}
              suffix="min"
              prefix={<ClockCircleOutlined />}
            />
          </Col>
          <Col xs={12} sm={6}>
            <Statistic
              title="Racha Más Larga"
              value={userStats.longestStreak}
              suffix="días"
              prefix={<FireOutlined />}
            />
          </Col>
          <Col xs={12} sm={6}>
            <Statistic
              title="Badges Desbloqueados"
              value={userStats.badgesUnlocked}
              suffix={`/ ${badges.length}`}
              prefix={<StarOutlined />}
            />
          </Col>
          <Col xs={12} sm={6}>
            <Statistic
              title="Logros Desbloqueados"
              value={userStats.achievementsUnlocked}
              suffix={`/ ${achievements.length}`}
              prefix={<TrophyOutlined />}
            />
          </Col>
        </Row>
      </Card>

      {/* Navegación */}
      <div style={{ textAlign: 'center', marginTop: '32px' }}>
        <Space size="large">
          <Button 
            size="large" 
            onClick={() => navigate('/')}
          >
            Volver al Inicio
          </Button>
          <Button 
            type="primary" 
            size="large"
            icon={<BookOutlined />}
            onClick={() => navigate('/matematicas')}
          >
            Continuar Aprendiendo
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default Dashboard;
