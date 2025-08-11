import React from 'react';
import { FaGavel } from 'react-icons/fa';

const TermsAndConditions = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: 'linear-gradient(-45deg, #f5f5f5 0%, #ffdf80 100%)',
      padding: '3rem',
      fontFamily: "'Segoe UI', sans-serif",
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: '#fff',
        padding: '2rem',
        borderRadius: '16px',
        boxShadow: '0 0 15px rgba(0,0,0,0.1)',
      }}>
        <h1 style={{ color: 'rgba(185, 63, 6, 1)', marginBottom: '1rem' }}>
          <FaGavel style={{ marginRight: '0.5rem' }} />
          Terms & Conditions
        </h1>
        <p style={{ marginBottom: '1.5rem' }}>
          These Terms and Conditions govern the use of RiceApp. By accessing our service, you agree to these terms.
        </p>

        <h3>1. Use of Service</h3>
        <p>Customers must use the platform for lawful purposes only, and not misuse the app for spam, fraud, etc.</p>

        <h3>2. Orders & Payments</h3>
        <p>Orders once placed can only be modified within 10 minutes. Payments are processed securely via third-party providers.</p>

        <h3>3. Account Security</h3>
        <p>You are responsible for keeping your login credentials safe and private.</p>

        <h3>4. Intellectual Property</h3>
        <p>All logos, text, and rice-related artwork belong to RiceApp and may not be reused without permission.</p>

        <h3>5. Modifications</h3>
        <p>We reserve the right to change these terms anytime. We will notify users in advance for significant updates.</p>

        <p style={{ marginTop: '2rem' }}>
          For queries, contact us at <strong>support@riceapp.com</strong>.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
