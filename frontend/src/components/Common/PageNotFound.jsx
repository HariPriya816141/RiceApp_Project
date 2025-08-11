import React from 'react';
import { GiWheat } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import riceicon from "../../assets/rice-icon.png"

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: '100vh',
        backgroundImage:
          'linear-gradient(-45deg, #f5f5f5 0%, #ffdf80 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Segoe UI', sans-serif",
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          background: '#fff',
          padding: '3rem',
          borderRadius: '20px',
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
          maxWidth: '500px',
        }}
      >
        <GiWheat
          style={{
            fontSize: '60px',
            color: 'goldenrod',
            marginBottom: '1rem',
          }}
        />
        <h1
          style={{
            fontSize: '24px',
            color: 'rgba(185, 63, 6, 1)',
            marginBottom: '0.5rem',
          }}
        >
          ❌ Sorry, couldn't harvest that!
        </h1>
        <p
          style={{
            color: 'gray',
            fontSize: '14px',
            marginBottom: '2rem',
          }}
        >
          (page not found)
        </p>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '10px 20px',
            backgroundImage:
              'linear-gradient(120deg, #6b940b 0%, #0cc725 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          }}
        >
          Go Back <img src={riceicon} alt="logo" className="logo-icon" />
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;

