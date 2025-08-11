import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  DatabaseOutlined,
  ShopOutlined,
  RiseOutlined,
  GlobalOutlined,
} from '@ant-design/icons';

const stats = [
  {
    title: 'Varieties',
    end: 150,
    suffix: '+',
    icon: <DatabaseOutlined />,
  },
  {
    title: 'Sellers',
    end: 60,
    suffix: '+',
    icon: <ShopOutlined />,
  },
  {
    title: 'Profit',
    end: 12,
    suffix: 'L',
    prefix: '₹',
    icon: <RiseOutlined />,
  },
  {
    title: 'Countries',
    end: 10,
    suffix: '+',
    icon: <GlobalOutlined />,
  },
];

const CountRow = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      style={{
        width: '100%',
        padding: '1.5rem 1rem',
        backgroundColor: 'gold',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
        margin: '2rem 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            alignItems: 'center',
            padding: '1.2rem 1.5rem',
            border: 'none',
            gap: '1rem',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              data-aos="fade-up"
              style={{
                flex: '1 1 150px',
                textAlign: 'center',
                padding: '0.5rem',
                color: '#fff',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}>
                {React.cloneElement(stat.icon, { style: { color: 'white' } })}
              </div>
              <div
                style={{
                  fontSize: '1.6rem',
                  fontStyle: 'italic',
                  fontWeight: '600',
                  color: 'rgba(185, 63, 6, 1)',
                  marginBottom: '0.2rem',
                }}
              >
                <CountUp
                  start={0}
                  end={stat.end}
                  duration={2.2}
                  suffix={stat.suffix}
                  prefix={stat.prefix || ''}
                />
              </div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)' }}>
                {stat.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountRow;



