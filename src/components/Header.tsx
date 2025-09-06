import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Layout, Typography, Space, Button, Avatar, Dropdown, Badge } from 'antd';
import { 
  UserOutlined, 
  LogoutOutlined, 
  DashboardOutlined,
  TrophyOutlined,
  FireOutlined,
  ArrowLeftOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { logout } from '../store/authSlice';
import { RootState } from '../store/store';
import { useAppDispatch } from '../hooks/useAppDispatch';

const { Header: AntHeader } = Layout;
const { Title, Text } = Typography;

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const { userStats } = useSelector((state: RootState) => state.progress);
  const [isMobile, setIsMobile] = useState(false);

  // Verificar si estamos en la página principal
  const isHomePage = location.pathname === '/';
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

  const handleBackClick = () => {
    navigate(-1); // Navegar a la página anterior
  };

  const handleHomeClick = () => {
    navigate('/'); // Navegar al inicio
  };



  const userMenuItems = [
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: <DashboardOutlined />,
      onClick: handleDashboardClick
    },
    {
      key: 'logout',
      label: 'Cerrar Sesión',
      icon: <LogoutOutlined />,
      onClick: handleLogout
    }
  ];

  return (
    <AntHeader style={{
      background: 'white',
      borderBottom: '1px solid #f0f0f0',
      padding: '0 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 'auto',
      minHeight: '64px',
      position: 'relative'
    }}>
      {/* Botón de regreso (solo cuando no está en homepage) */}
      {!isHomePage && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button
            type="text"
            icon={<ArrowLeftOutlined />}
            onClick={handleBackClick}
            style={{
              padding: '4px 8px',
              height: 'auto',
              fontSize: isMobile ? '16px' : '18px',
              color: '#1890ff',
              border: 'none',
              boxShadow: 'none'
            }}
            size="large"
          >
            {!isMobile && <span style={{ marginLeft: '4px' }}>Atrás</span>}
          </Button>
        </div>
      )}

      {/* Título a la izquierda (solo en homepage) */}
      {isHomePage && (
        <div style={{ 
          display: 'flex',
          alignItems: 'center'
        }}>
          <Title 
            level={4} 
            style={{ 
              margin: 0, 
              color: '#1890ff', 
              cursor: 'pointer',
              fontSize: isMobile ? '18px' : '20px',
              lineHeight: '1.2'
            }}
            onClick={() => navigate('/')}
          >
            Aprendo+
          </Title>
        </div>
      )}

      {/* Navegación y usuario - Desktop */}
      {!isMobile && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Space size="large">
            {isAuthenticated ? (
              <>
                {/* Botón de inicio (solo cuando no está en homepage) */}
                {!isHomePage && (
                  <Button 
                    type="text" 
                    icon={<HomeOutlined style={{ color: '#1890ff' }} />}
                    onClick={handleHomeClick}
                    size="small"
                    title="Ir al inicio"
                  >
                    Inicio
                  </Button>
                )}

                {/* Estadísticas rápidas */}
                <Space size="small">
                  <Badge count={userStats?.currentStreak || 0} showZero>
                    <Button 
                      type="text" 
                      icon={<FireOutlined style={{ color: '#f5222d' }} />}
                      onClick={handleDashboardClick}
                      size="small"
                    >
                      Racha
                    </Button>
                  </Badge>
                  
                  <Badge count={userStats?.badgesUnlocked || 0} showZero>
                    <Button 
                      type="text" 
                      icon={<TrophyOutlined style={{ color: '#faad14' }} />}
                      onClick={handleDashboardClick}
                      size="small"
                    >
                      Badges
                    </Button>
                  </Badge>
                </Space>

                {/* Botón del Dashboard */}
                <Button 
                  type="primary" 
                  icon={<DashboardOutlined />}
                  onClick={handleDashboardClick}
                  size="small"
                >
                  Dashboard
                </Button>

                {/* Menú del usuario */}
                <Dropdown
                  menu={{ items: userMenuItems }}
                  placement="bottomRight"
                  trigger={['click']}
                >
                  <Space style={{ cursor: 'pointer' }}>
                    <Avatar 
                      size="default" 
                      icon={<UserOutlined />}
                      style={{ backgroundColor: '#1890ff' }}
                    />
                    <Text style={{ color: '#262626', fontSize: '14px' }}>
                      {user?.name || user?.username}
                    </Text>
                  </Space>
                </Dropdown>
              </>
            ) : (
              <Space size="small">
                <Button size="small" onClick={() => navigate('/login')}>
                  Iniciar Sesión
                </Button>
                <Button type="primary" size="small" onClick={() => navigate('/register')}>
                  Registrarse
                </Button>
              </Space>
            )}
          </Space>
        </div>
      )}

      {/* Navegación móvil */}
      {isMobile && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Space size="small">
            {isAuthenticated ? (
              <>
                {/* Botón de inicio (solo cuando no está en homepage) */}
                {!isHomePage && (
                  <Button 
                    type="text" 
                    icon={<HomeOutlined style={{ color: '#1890ff', fontSize: '16px' }} />}
                    onClick={handleHomeClick}
                    size="small"
                    style={{ padding: '4px 8px', minWidth: 'auto' }}
                    title="Ir al inicio"
                  />
                )}

                {/* Estadísticas compactas en móvil */}
                <Badge count={userStats?.currentStreak || 0} showZero size="small">
                  <Button 
                    type="text" 
                    icon={<FireOutlined style={{ color: '#f5222d', fontSize: '16px' }} />}
                    onClick={handleDashboardClick}
                    size="small"
                    style={{ padding: '4px 8px', minWidth: 'auto' }}
                  />
                </Badge>
                
                <Badge count={userStats?.badgesUnlocked || 0} showZero size="small">
                  <Button 
                    type="text" 
                    icon={<TrophyOutlined style={{ color: '#faad14', fontSize: '16px' }} />}
                    onClick={handleDashboardClick}
                    size="small"
                    style={{ padding: '4px 8px', minWidth: 'auto' }}
                  />
                </Badge>

                {/* Botón Dashboard compacto */}
                <Button 
                  type="primary" 
                  icon={<DashboardOutlined />}
                  onClick={handleDashboardClick}
                  size="small"
                  style={{ padding: '4px 12px' }}
                >
                  <span style={{ fontSize: '12px' }}>Dash</span>
                </Button>

                {/* Avatar compacto */}
                <Dropdown
                  menu={{ items: userMenuItems }}
                  placement="bottomRight"
                  trigger={['click']}
                >
                  <Avatar 
                    size="small" 
                    icon={<UserOutlined />}
                    style={{ backgroundColor: '#1890ff', cursor: 'pointer' }}
                  />
                </Dropdown>
              </>
            ) : (
              <Space size="small">
                <Button size="small" onClick={() => navigate('/login')} style={{ padding: '4px 8px' }}>
                  <span style={{ fontSize: '12px' }}>Login</span>
                </Button>
                <Button type="primary" size="small" onClick={() => navigate('/register')} style={{ padding: '4px 8px' }}>
                  <span style={{ fontSize: '12px' }}>Reg</span>
                </Button>
              </Space>
            )}
          </Space>
        </div>
      )}
    </AntHeader>
  );
};

export default Header;
