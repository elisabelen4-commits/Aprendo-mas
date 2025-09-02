import React from 'react';
import { Card, Typography, Space } from 'antd';
import { TrophyOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Resultado: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Card>
        <Space direction="vertical" align="center" style={{ width: '100%', textAlign: 'center' }}>
          <TrophyOutlined style={{ fontSize: '48px', color: '#faad14' }} />
          <Title level={2}>Resultados del Examen</Title>
          <p>Contenido de resultados próximamente...</p>
        </Space>
      </Card>
    </div>
  );
};

export default Resultado;
