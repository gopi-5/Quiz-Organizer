import React from "react";
import { Link } from "react-router-dom";
import "./first.css";

const Home = () => {
  return (
    <>
      <div className="na">
        <Link className="hello" to="/home">
          <span className="hii">Quiz</span>Nest
        </Link>
        <Link to="/home">Home</Link>
        <a href="#d">Our Services</a>
        <Link to="/find">Try me</Link>
        <Link className="sign" to="/">sign up</Link>
      </div>

      <div id="con">
        <video src="https://videos.pexels.com/video-files/8381237/8381237-uhd_3840_2160_25fps.mp4" autoPlay loop muted className="bg"></video>
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
            <img src="https://images.unsplash.com/photo-1519305120185-5f3b2a8f0b7b?q=80&w=1600&auto=format&fit=crop" alt="" />
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
            <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1600&auto=format&fit=crop" alt="" />
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
                  <Link to="/home">Home</Link>
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
