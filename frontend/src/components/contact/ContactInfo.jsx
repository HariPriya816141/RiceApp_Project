import React from 'react';
import { PhoneOutlined, MailOutlined, InstagramOutlined, TwitterOutlined, WhatsAppOutlined } from '@ant-design/icons';
import '../../styles/contact.css';

const contacts = [
  { icon: <PhoneOutlined />, title: 'Phone', value: '+91 98765 43210' },
  { icon: <MailOutlined />, title: 'Email', value: 'support@riceapp.com' },
  { icon: <InstagramOutlined />, title: 'Instagram', value: '@riceapp.official' },
  { icon: <TwitterOutlined />, title: 'Twitter', value: '@RiceAppIndia' },
  { icon: <WhatsAppOutlined />, title: 'WhatsApp', value: '+91 91234 56789' },
];

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <h2>Get in Touch</h2>
      <div className="info-card-container">
        {contacts.map((item, index) => (
          <div key={index} className="info-card">
            <div className="icon">{item.icon}</div>
            <div className="details">
              <h4>{item.title}</h4>
              <p>{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;
