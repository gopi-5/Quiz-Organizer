import React from "react";
import { Link } from 'react-router-dom'
import "./organise.css";

const Organise = () => {
  return (
    <>
      <div className="na">
        <Link to="/home">logo</Link>
        <Link to="/home">Home</Link>
        <a href="">about</a>
        <a href="">contact</a>
        <Link className="sign" to="/">sign up</Link>
      </div>

      <div className="con">
        <h1 className="k">Organise With Us</h1>

        <div className="section">
          <div className="box">
            <h1>1. Sir MVIT</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis eius quas cupiditate animi debitis.</p>
            <a href="#">Organise</a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.1799628197227!2d77.6074423745493!3d13.151045710919709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae192ddf1ae00d%3A0xa150c6dea93315c!2sSir%20M.%20Visvesvaraya%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1733683066951!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="section">
          <div className="box">
            <h1>2. BMS CE</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis eius quas cupiditate animi debitis.</p>
            <a href="#">Organise</a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4720098413404!2d77.56423497454614!3d12.941620315535932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158b11e34d2f%3A0x5f4adbdbab8bd80f!2sBMS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1733685893550!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="section">
          <div className="box">
            <h1>3. RVCE</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis eius quas cupiditate animi debitis.</p>
            <a href="#">Organise</a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.37546978127!2d77.49631939839473!3d12.923722800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ee159ba3729%3A0x75a3463d510cf26e!2sR.%20V.%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1733685957176!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="footer">
        <footer>
          <div className="container">
            <div className="footer-content">
              <h3>Contact Us</h3>
              <p>Email: Info@example.com</p>
              <p>Phone: +121 56556 565556</p>
              <p>Address: Your Address 123 street</p>
            </div>

            <div className="footer-content">
              <h3>Quick Links</h3>
              <ul className="list">
                <li><Link to="/home">Home</Link></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="footer-content">
              <h3>Follow Us</h3>
              <ul className="social-icons">
                <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>

          <div className="bottom-bar">
            <p>&copy; 2023 your company. All rights reserved</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Organise;
