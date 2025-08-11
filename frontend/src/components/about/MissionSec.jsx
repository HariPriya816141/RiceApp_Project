import { SmileOutlined, AimOutlined, LikeOutlined, } from '@ant-design/icons';
import '../../styles/about.css';

const MissionSec = () => {
  return (
    <section className="mission-section">
            <h2 className="section-heading">Our Core Beliefs</h2>
            <div className="card-container">
              <div className="belief-card">
                <SmileOutlined style={{ fontSize: '2rem', color: '#52c41a' }} />
                <h3>Our Mission</h3>
                <p>To bring farm-fresh rice to every household while empowering local farmers and sustaining nature.</p>
              </div>
              <div className="belief-card">
                <AimOutlined style={{ fontSize: '2rem', color: '#1890ff' }} />
                <h3>Our Vision</h3>
                <p>To be a trusted brand that nurtures health, heritage, and harmony through every grain.</p>
              </div>
              <div className="belief-card">
                <LikeOutlined style={{ fontSize: '2rem', color: '#eb2f96' }} />
                <h3>Our Values</h3>
                <p>Integrity, Sustainability, and a deep Respect for Farmers and Communities.</p>
              </div>
            </div>
          </section>
  )
}

export default MissionSec
