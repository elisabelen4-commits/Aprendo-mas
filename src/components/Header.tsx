import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Layout, Typography, Space, Button, Avatar, Dropdown, Badge } from 'antd';
import { 
  UserOutlined, 
  LogoutOutlined, 
  DashboardOutlined,
  TrophyOutlined,
  FireOutlined
} from '@ant-design/icons';
import { logout } from '../store/authSlice';
import { RootState } from '../store/store';
import { useAppDispatch } from '../hooks/useAppDispatch';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const { userStats } = useSelector((state: RootState) => state.progress);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleDashboardClick = () => {
    navigate('/dashboard');
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
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      {/* Logo y título */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Title 
          level={3} 
          style={{ 
            margin: 0, 
            color: '#1890ff', 
            cursor: 'pointer' 
          }}
          onClick={() => navigate('/')}
        >
          Aprendo+
        </Title>
      </div>

      {/* Navegación y usuario */}
      <Space size="large">
        {isAuthenticated ? (
          <>
            {/* Estadísticas rápidas */}
            <Space size="small">
              <Badge count={userStats?.currentStreak || 0} showZero>
                <Button 
                  type="text" 
                  icon={<FireOutlined style={{ color: '#f5222d' }} />}
                  onClick={handleDashboardClick}
                >
                  Racha
                </Button>
              </Badge>
              
              <Badge count={userStats?.badgesUnlocked || 0} showZero>
                <Button 
                  type="text" 
                  icon={<TrophyOutlined style={{ color: '#faad14' }} />}
                  onClick={handleDashboardClick}
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
                  size="large" 
                  icon={<UserOutlined />}
                  style={{ backgroundColor: '#1890ff' }}
                />
                <span style={{ color: '#262626' }}>
                  {user?.name || user?.username}
                </span>
              </Space>
            </Dropdown>
          </>
        ) : (
          <Space>
            <Button onClick={() => navigate('/login')}>
              Iniciar Sesión
            </Button>
            <Button type="primary" onClick={() => navigate('/register')}>
              Registrarse
            </Button>
          </Space>
        )}
      </Space>
    </AntHeader>
  );
};

export default Header;
