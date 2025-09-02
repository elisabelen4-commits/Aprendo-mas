import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Layout, Button, Space, Typography, Avatar, Dropdown, Menu } from 'antd';
import { UserOutlined, LogoutOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import { logout } from '../store/authSlice';

const { Header: AntHeader } = Layout;
const { Text, Title } = Typography;

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        <Text>Perfil: {user?.name || user?.username}</Text>
      </Menu.Item>
      <Menu.Item key="role" icon={<UserOutlined />}>
        <Text>Rol: {user?.role === 'admin' ? 'Administrador' : 'Usuario'}</Text>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Cerrar Sesión
      </Menu.Item>
    </Menu>
  );

  return (
    <AntHeader style={{ 
      background: '#fff', 
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div 
        style={{ 
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center'
        }}
        onClick={() => navigate('/')}
      >
        <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
          Aprendo Más
        </Title>
      </div>

      <div>
        {isAuthenticated ? (
          <Space>
            <Text type="secondary">
              Bienvenido, {user?.name || user?.username}
            </Text>
            <Dropdown overlay={userMenu} trigger={['click']}>
              <Avatar 
                size="large" 
                icon={<UserOutlined />}
                style={{ cursor: 'pointer', backgroundColor: '#1890ff' }}
              />
            </Dropdown>
          </Space>
        ) : (
          <Space>
            <Button 
              type="default" 
              icon={<LoginOutlined />}
              onClick={handleLogin}
            >
              Iniciar Sesión
            </Button>
            <Button 
              type="primary" 
              icon={<UserAddOutlined />}
              onClick={handleRegister}
            >
              Registrarse
            </Button>
          </Space>
        )}
      </div>
    </AntHeader>
  );
};

export default Header;
