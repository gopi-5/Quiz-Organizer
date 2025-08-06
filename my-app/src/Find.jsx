import React from "react";
import './find.css'
const Find = () => {
  return (
    <>
      <div className="na">
        <a href="">logo</a>
        <a href="first.html">Home</a>
        <a href="">about</a>
        <a href="">contact</a>
        <a className="sign" href="">
          sign up
        </a>
      </div>

      <div className="con">
        <h1 className="k">Find With Us</h1>

        <div className="section">
          <div className="box">
            <h1>1.Manyata Tech Park</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              officiis eius quas cupiditate animi debitis.
            </p>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124425.58683566947!2d77.5442684505447!3d12.952671559778155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae174a0130109b%3A0x29e61da83c2b385b!2sManyata%20Tech%20Park!5e0!3m2!1sen!2sin!4v1733686540410!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Manyata Tech Park Map"
          ></iframe>
        </div>

        <div className="section">
          <div className="box">
            <h1>2.PES University</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              officiis eius quas cupiditate animi debitis.
            </p>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5738757353265!2d77.53346577454607!3d12.935086915678825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e468d8d36d3%3A0x694d74f6ac640acf!2sPES%20University!5e0!3m2!1sen!2sin!4v1733686674249!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PES University Map"
          ></iframe>
        </div>

        <div className="section">
          <div className="box">
            <h1>3.RVCE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              officiis eius quas cupiditate animi debitis.
            </p>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.37546978127!2d77.49631939839473!3d12.923722800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ee159ba3729%3A0x75a3463d510cf26e!2sR.%20V.%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1733685957176!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="RVCE Map"
          ></iframe>
        </div>
      </div>

      <div className="footer">
        <footer>
          <div className="container">
            <div className="footer-content">
              <h3>Contact Us</h3>
              <p>Email:Info@example.com</p>
              <p>Phone:+121 56556 565556</p>
              <p>Address:Your Address 123 street</p>
            </div>

            <div className="footer-content">
              <h3>Quick Links</h3>
              <ul className="list">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Products</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-content">
              <h3>Follow Us</h3>
              <ul className="social-icons">
                <li>
                  <a href="">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bottom-bar">
            <p>© 2023 your company . All rights reserved</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Find;
