// components/admin/cardsui/StatCards.jsx
import React from 'react';
import {
  UserOutlined,
  HeartOutlined,
  DollarCircleOutlined,
} from '@ant-design/icons';

import { FaArrowUp, FaArrowDown } from 'react-icons/fa6';
import '../adminStyles/statCards.css'; // if you want to style separately (optional)

// Card Data
const statCards = [
  {
    title: "Today's Sales",
    value: '₹53,000',
    change: '+30%',
    isIncrease: true,
    icon: <DollarCircleOutlined style={{ fontSize: '22px', color: '#fff' }} />,
    
  },
  {
    title: "Today's Users",
    value: '3,200',
    change: '+20%',
    isIncrease: true,
    icon: <UserOutlined style={{ fontSize: '22px', color: '#fff' }} />,
    
  },
  {
    title: 'New Clients',
    value: '+1,200',
    change: '-20%',
    isIncrease: false,
    icon: <HeartOutlined style={{ fontSize: '22px', color: '#fff' }} />,
    
  },
];


// Card UI component
const StatCard = ({ title, value, change, isIncrease, icon, iconBg }) => {
  return (
    <div className="stat-card">
      <div>
        <p className="stat-title">{title}</p>
        <p className="stat-value" style={{display:"inline-block" }}>{value}</p>
        <div
          className="stat-change mx-2"
          style={{ color: isIncrease ? '#00C853' : '#D50000', display:"inline-block" }}
        >
          {isIncrease ? <FaArrowUp /> : <FaArrowDown />}
          {change}
        </div>
      </div>
          <div className="stat-icon">
        {icon}
      </div>
    </div>
  );
};

// Wrapper to map all cards
const StatCards = () => {
  return (
    <div className="stat-card-container">
      {statCards.map((card, index) => (
        <StatCard key={index} {...card} />
      ))}
    </div>
  );
};

export default StatCards;



