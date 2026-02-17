import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container py-4">
        <div className="row">

          {/* Brand */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">RiceWorld</h5>
            <p className="small text-white">
              Delivering premium quality rice with trust and tradition.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/home" className="footer-link">Home</Link></li>
              <li><Link to="/shop" className="footer-link">Shop</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/blog" className="footer-link">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Legal</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/privacypolicy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/termsandconditions" className="footer-link">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <hr className="footer-divider" />

        <div className="text-center small text-white">
          © {new Date().getFullYear()} RiceWorld. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
