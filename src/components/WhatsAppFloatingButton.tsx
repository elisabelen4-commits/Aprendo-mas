import React from 'react';
import { Button } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

const WhatsAppFloatingButton: React.FC = () => {
  const phoneNumber = '+50431954828'; // Número sin espacios ni guiones para WhatsApp
  const message = 'Hola! Me gustaría obtener más información sobre Aprendo Más.';

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      type="primary"
      shape="circle"
      size="large"
      icon={<MessageOutlined />}
      onClick={handleWhatsAppClick}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '60px',
        height: '60px',
        backgroundColor: '#25D366', // Color verde de WhatsApp
        borderColor: '#25D366',
        boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
        zIndex: 1000,
        fontSize: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 6px 16px rgba(37, 211, 102, 0.6)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.4)';
      }}
      title="Contactar por WhatsApp"
    />
  );
};

export default WhatsAppFloatingButton;
