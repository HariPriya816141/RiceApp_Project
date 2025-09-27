import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import { useAuth } from '../../store/context/AuthContext';
import ProfileDropdown from './ProfileDropdown';
import './dropdown.css';
import riceicon from '../../assets/rice-icon.png';


const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  


  const handleMenuClick = ({ key }) => {
    if (key === 'logout') {
      logout();
      navigate('/auth');
    } else {
      navigate(`/${key}`);
    }
  };
  

  const handleCartClick = () => {
    if (user) {
      navigate('/cart');
    } else {
      navigate('/auth');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid nav-inner">
        
        {/* Brand */}
        <div className="nav-brand-group">
          <img src={riceicon} alt="logo" className="logo-icon" />
          <Link className="navbar-brand brand-text" to="/">RiceWorld</Link>
        </div>

        {/* Responsive Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse nav-links" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link fw-bold text-light" to="/home">Home</Link></li>
            <li className="nav-item"><Link className="nav-link fw-bold text-light" to="/shop">Shop</Link></li>
            <li className="nav-item"><Link className="nav-link fw-bold text-light" to="/about">About Us</Link></li>
            <li className="nav-item"><Link className="nav-link fw-bold text-light" to="/contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link fw-bold text-light" to="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Right Actions */}
        <div className="nav-right-group">
          <Link to="/dealer-register"> 
          <button className="btn dealer">Become a Dealer</button>
          </Link>

          <Badge count={0} offset={[0, 0]} size="small" color="white">
            <ShoppingCartOutlined
              className="cartIcon"
              onClick={handleCartClick}
              title={user ? 'View Cart' : 'Login to View Cart'}
              style={{ cursor: 'pointer' }}
            />
          </Badge>

          <ProfileDropdown onClick={handleMenuClick} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

