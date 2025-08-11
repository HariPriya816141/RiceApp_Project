import { ShoppingOutlined, EnvironmentOutlined, GiftOutlined, CarOutlined } from '@ant-design/icons';
import { Card, Col, Row, Typography } from 'antd';
const { Title, Paragraph } = Typography;
import '../../styles/about.css';


const ServicesSec = () => {
    const services = [
      {
        icon: <ShoppingOutlined style={{ fontSize: 40, color: '#1890ff' }} />,
        title: "Premium Rice Delivery",
        description: "Doorstep delivery of high-quality rice varieties across major cities."
      },
      {
        icon: <EnvironmentOutlined style={{ fontSize: 30, color: '#52c41a' }} />,
        title: "Farmer Partnerships",
        description: "Direct collaboration with farmers ensuring fair pricing and sustainability."
      },
      {
        icon: <GiftOutlined style={{ fontSize: 30, color: '#eb2f96' }} />,
        title: "Custom Packaging",
        description: "Unique rice packaging solutions for gifts, weddings, and corporate orders."
      },
      {
        icon: <CarOutlined style={{ fontSize: 30, color: '#faad14' }} />,
        title: "Wholesale & B2B Supply",
        description: "Bulk supply to retailers, hotels, and institutional buyers across regions."
      }
    ];
  return (
     <div className="services-section">
      <Title level={2} className="services-title" style={{color:'green'}}>What We Offer</Title>
      <Row gutter={[24, 24]} justify="center">
        {services.map((service, index) => (
          <Col key={index} xs={24} sm={12} md={12} lg={6}>
            <Card hoverable className="service-card">
              <div className="service-icon">{service.icon}</div>
              <Title level={4}>{service.title}</Title>
              <Paragraph>{service.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ServicesSec
