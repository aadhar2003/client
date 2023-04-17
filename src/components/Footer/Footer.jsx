import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="buttonFooter">
        <div className="btnText">
          Never miss a recipe!<p id="bold">Sign up for our newsletter</p>
        </div>
        <div className="newsletter">
          <input type="text" id="input-footer" placeholder="Email" />
          <button id="footer-button">Subscribe</button>
        </div>
      </div>
      <div className="links">
        <div className="link1">
          <div className="link-items">Our Services</div>
          <div className="link-items">Socials</div>
          <div className="link-items">Term Policies</div>
        </div>
        <div className="link2">
          <div className="link-items">About Us</div>
          <div className="link-items">Cookies</div>
          <div className="link-items">Licenses</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
