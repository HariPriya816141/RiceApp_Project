// AboutSection.jsx
import React from "react";
import { Row, Col, Card } from "antd";
import {
  SafetyCertificateOutlined,
  TeamOutlined,
  SmileOutlined,
  StarOutlined,
} from "@ant-design/icons";
import "../../styles/about.css"; 
import "../../styles/timelineHorizontal.css"

const content = [
  {
    icon: (
      <SafetyCertificateOutlined
        style={{ fontSize: "24px", color: "#52c41a" }}
      />
    ),
    title: "Premium Quality",
    desc: "Our rice varieties go through strict quality control for freshness and nutrition.",
  },
  {
    icon: <TeamOutlined style={{ fontSize: "24px", color: "#1890ff" }} />,
    title: "Strong Team",
    desc: "We’re a passionate team dedicated to bringing you the best grains.",
  },
  {
    icon: <SmileOutlined style={{ fontSize: "24px", color: "#fadb14" }} />,
    title: "Customer Satisfaction",
    desc: "Every customer’s smile matters — we ensure seamless delivery and service.",
  },
  {
    icon: <StarOutlined style={{ fontSize: "24px", color: "#fa541c" }} />,
    title: "Trusted by Many",
    desc: "Our platform is loved and trusted by thousands of buyers and sellers.",
  },
];

const AboutMain = () => {
  return (
    <div className="about-section">
        <h1 className="hero-title about-title half-underline">About Us</h1>
      <Row gutter={[32, 32]} align="middle">
        {/* Left: Image Grid */}
        <Col xs={24} md={12}>
          <div className="image-grid">
            <img src="/about/riceVarities.png" alt="img1" />
            <img src="/about/team.jpg" alt="img2" />
            <img src="/about/review.webp" alt="img3" />
            <img src="/about/TrustBadge.png" alt="img4" />
          </div>
        </Col>

        {/* Right: Cards */}
        <Col xs={24} md={12}>
          <div className="card-stack">
            {content.map((item, index) => (
              <Card
                key={index}
                className="about-card"
                bordered={false}
                style={{
                  background: "linear-gradient(-90deg, #bff5a9ff, #fffef7)", // light rice cream
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                  border: "none",
                }}
              >
                <div className="card-content" >
                  {item.icon}
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutMain;
