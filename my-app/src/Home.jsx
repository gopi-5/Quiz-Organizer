import React from "react";
import { Link } from "react-router-dom";
import "./first.css";

const Home = () => {
  return (
    <>
      <div className="na">
        <a className="hello" href="#">
          <span className="hii">Quiz</span>Nest
        </a>
        <a href="#">Home</a>
        <a href="#d">Our Services</a>
        <a href="1.html">Try me</a>
        <a className="sign" href="sign_up.html">
          sign up
        </a>
      </div>

      <div id="con">
        <video src="video.mp4" autoPlay loop muted className="bg"></video>
        <div className="overlay">
          <div className="over1">
            <h1>Explore More..</h1>
            <Link className="a1" to="/organise">
              Organise
            </Link>
          </div>
        </div>
      </div>

      <div id="d" className="bj">
        <div className="y">
          <h1>Our Services</h1>
        </div>
        <div className="z">
          <div className="card">
            <img src="1.jpg" alt="" />
            <div className="info">
              <h1>Registration Here</h1>
              <p>
                Lorem ipsum is simply dummy text from the printing and typing
                industry
              </p>
              <Link to="/register" className="btn">
                Read More
              </Link>
            </div>
          </div>

          <div className="card">
            <img src="2.jpg" alt="" />
            <div className="info">
              <h1>Find Quiz</h1>
              <p>
                Lorem ipsum is simply dummy text from the printing and typing
                industry
              </p>
              <Link to="/find" className="btn">
                Read More
              </Link>
            </div>
          </div>
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
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-content">
              <h3>Follow Us</h3>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bottom-bar">
            <p>© 2023 your company. All rights reserved</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
