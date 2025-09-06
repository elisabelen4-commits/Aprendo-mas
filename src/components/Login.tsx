import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Input, Button, Card, Typography, Alert, Space, Select } from 'antd';
import { UserOutlined, LockOutlined, BookOutlined } from '@ant-design/icons';
import { loginUser, clearError } from '../store/authSlice';
import { RootState } from '../store/store';
import { useAppDispatch } from '../hooks/useAppDispatch';

const { Title, Text } = Typography;

interface LoginFormValues {
  username: string;
  password: string;
  grade: string;
}

const Login: React.FC = () => {
  const [form] = Form.useForm<LoginFormValues>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const { isLoading, error, isAuthenticated } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const onFinish = (values: LoginFormValues) => {
    dispatch(loginUser({
      username: values.username,
      password: values.password,
      grade: values.grade
    }));
  };

  const handleDemoLogin = () => {
    form.setFieldsValue({
      username: 'admin',
      password: '123',
      grade: '6'
    });
    dispatch(loginUser({
      username: 'admin',
      password: '123',
      grade: '6'
    }));
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <Card 
        style={{ 
          width: '100%', 
          maxWidth: '400px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          borderRadius: '16px'
        }}
        bodyStyle={{ padding: '32px' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Title level={2} style={{ color: '#1890ff', marginBottom: '8px' }}>
            Iniciar Sesión
          </Title>
          <Text type="secondary">
            Accede a tu cuenta para continuar
          </Text>
        </div>

        {error && (
          <Alert
            message="Error"
            description={error}
            type="error"
            showIcon
            style={{ marginBottom: '24px' }}
          />
        )}

        <Form
          form={form}
          name="login"
          onFinish={onFinish}
          layout="vertical"
          size="large"
        >
          <Form.Item
            name="username"
            rules={[
              { required: true, message: 'Por favor ingresa tu nombre de usuario!' }
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Nombre de usuario"
              autoComplete="username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Por favor ingresa tu contraseña!' }
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Contraseña"
              autoComplete="current-password"
            />
          </Form.Item>

          <Form.Item
            name="grade"
            rules={[
              { required: true, message: 'Por favor selecciona tu grado!' }
            ]}
          >
            <Select
              placeholder="Grado que cursa"
              size="large"
              suffixIcon={<BookOutlined />}
              style={{ width: '100%' }}
            >
              <Select.Option value="1">1.º Primaria</Select.Option>
              <Select.Option value="2">2.º Primaria</Select.Option>
              <Select.Option value="3">3.º Primaria</Select.Option>
              <Select.Option value="4">4.º Primaria</Select.Option>
              <Select.Option value="5">5.º Primaria</Select.Option>
              <Select.Option value="6">6.º Primaria</Select.Option>
              <Select.Option value="7">1.º Secundaria</Select.Option>
              <Select.Option value="8">2.º Secundaria</Select.Option>
              <Select.Option value="9">3.º Secundaria</Select.Option>
              <Select.Option value="10">1.º Bachillerato</Select.Option>
              <Select.Option value="11">2.º Bachillerato</Select.Option>
              <Select.Option value="12">3.º Bachillerato</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              style={{ width: '100%', height: '48px', borderRadius: '8px' }}
            >
              {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </Button>
          </Form.Item>

          <Form.Item>
            <Button
              type="default"
              onClick={handleDemoLogin}
              disabled={isLoading}
              style={{ width: '100%', height: '48px', borderRadius: '8px', marginBottom: '16px' }}
            >
              Demo: admin/123
            </Button>
          </Form.Item>
        </Form>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Space direction="vertical" size="small">
            <Link to="/forgot-password">
              <Text type="secondary">¿Olvidaste tu contraseña?</Text>
            </Link>
            <div>
              <Text type="secondary">¿No tienes cuenta? </Text>
              <Link to="/register">
                <Text style={{ color: '#1890ff', fontWeight: 'bold' }}>Regístrate aquí</Text>
              </Link>
            </div>
          </Space>
        </div>
      </Card>
    </div>
  );
};

export default Login;
