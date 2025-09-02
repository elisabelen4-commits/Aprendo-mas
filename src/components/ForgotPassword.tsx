import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Card, Typography, Alert, Space } from 'antd';
import { MailOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { forgotPassword, clearError, clearMessage } from '../store/authSlice';
import { RootState } from '../store/store';
import { useAppDispatch } from '../hooks/useAppDispatch';

const { Title, Text } = Typography;

interface ForgotPasswordFormValues {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const dispatch = useAppDispatch();
  
  const { isLoading, error, message } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      dispatch(clearError());
      dispatch(clearMessage());
    };
  }, [dispatch]);

  const onFinish = (values: ForgotPasswordFormValues) => {
    dispatch(forgotPassword(values.email));
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
            Recuperar Contraseña
          </Title>
          <Text type="secondary">
            Ingresa tu email para recibir instrucciones de recuperación
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

        {message && (
          <Alert
            message="Email enviado"
            description={message}
            type="success"
            showIcon
            style={{ marginBottom: '24px' }}
          />
        )}

        <Form
          name="forgotPassword"
          onFinish={onFinish}
          layout="vertical"
          size="large"
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Por favor ingresa tu email!' },
              { type: 'email', message: 'Por favor ingresa un email válido!' }
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Email"
              autoComplete="email"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              style={{ width: '100%', height: '48px', borderRadius: '8px' }}
            >
              {isLoading ? 'Enviando...' : 'Enviar Instrucciones'}
            </Button>
          </Form.Item>
        </Form>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Space direction="vertical" size="small">
            <Link to="/login">
              <Button 
                type="link" 
                icon={<ArrowLeftOutlined />}
                style={{ padding: 0 }}
              >
                Volver al login
              </Button>
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

export default ForgotPassword;
