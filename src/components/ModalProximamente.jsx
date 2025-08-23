import { Modal, Button, Space, Typography } from 'antd'
import { ClockCircleOutlined, CloseOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const ModalProximamente = ({ visible, onClose, moduloNombre }) => {
  return (
    <Modal
      title={
        <Space>
          <ClockCircleOutlined style={{ color: '#1890ff' }} />
          <span>Módulo en desarrollo</span>
        </Space>
      }
      open={visible}
      onCancel={onClose}
      footer={[
        <Button 
          key="cerrar" 
          type="primary" 
          onClick={onClose}
          icon={<CloseOutlined />}
        >
          Cerrar
        </Button>
      ]}
      centered
      width={400}
    >
      <Space direction="vertical" size="large" style={{ width: '100%', textAlign: 'center' }}>
        <div>
          <Title level={4} style={{ marginBottom: 8 }}>
            {moduloNombre}
          </Title>
          <Paragraph style={{ fontSize: '16px', marginBottom: 16 }}>
            Estamos construyendo este módulo. ¡Muy pronto disponible!
          </Paragraph>
        </div>
        
        <div style={{ 
          background: '#f5f5f5', 
          padding: '16px', 
          borderRadius: '8px',
          border: '1px solid #d9d9d9'
        }}>
          <Paragraph style={{ margin: 0, color: '#666' }}>
            Nuestro equipo está trabajando para traerte el mejor contenido educativo.
            ¡Mantente atento a las actualizaciones!
          </Paragraph>
        </div>
      </Space>
    </Modal>
  )
}

export default ModalProximamente
