import React from "react";
import styled from "styled-components";

// Define slider images (update these paths to your actual project images)
const sliderImages = [
  "./project1.jpeg",
  "./project2.jpeg",
  "./project3.jpeg",
];

// Slider Component
const SliderContainer = styled.div`
  width: 300px;
  height: 200px;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  margin: 0 auto;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: absolute;
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.active ? 1 : 0)};
`;

function Slider() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SliderContainer>
      {sliderImages.map((img, index) => (
        <Slide
          key={index}
          active={index === currentIndex}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
    </SliderContainer>
  );
}

// Footer Component
const FooterStyled = styled.section`
  .footer {
    display: grid;
    text-align: center;
    justify-content: center;
    justify-items: center;
    background-color: black;
    padding: 2rem 0;
  }

  .footer span {
    color: black;
    background-color: gold;
    width: 100%;
    padding: 1rem 0;
    font-weight: bold;
  }

  .footer hr {
    border: 3px solid gold;
    width: 80rem;
  }

  .footer-top {
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: black;
  }

  .footer-top-inner {
    display: flex;
    gap: 15rem;
    background-color: black;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .footer-bottom {
    display: flex;
    gap: 22rem;
    margin-top: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .about {
    display: grid;
    align-items: center;
    justify-items: center;
  }

  .about h3,
  .cards h3 {
    color: white;
    margin-bottom: 0.5rem;
  }

  .about hr,
  .cards hr {
    border: 3px solid gold;
    border-radius: 8px;
    width: 50px;
    margin: 0.5rem auto;
  }

  .about ul {
    display: flex;
    list-style: none;
    padding: 0;
    gap: 1rem;
    justify-content: center;
  }

  .about ul img,
  .cards li a img {
    width: 40px;
    height: 40px;
  }

  /* Flip Card Styles for Footer Cards */
  .card-container {
    width: 15rem;
    height: 15rem;
    perspective: 1000px;
    cursor: pointer;
  }

  .flip-card {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover {
    transform: rotateY(180deg);
  }

  .card-face {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(128, 128, 128, 0.5);
    padding: 1rem;
  }

  .card-front {
    background-color: #222;
    color: white;
  }

  .card-back {
    background-color: gold;
    color: black;
    transform: rotateY(180deg);
  }

  .footer-top-inner img {
    width: 10rem;
    height: 10rem;
  }

  .footer-top-inner h3,
  .footer-top-inner a,
  .footer-top-inner p {
    color: white;
  }

  .swiper {
    display: flex;
    height: 10vh;
    width: 50px;
    justify-content: center;
    align-items: center;
  }
`;

function Footer() {
  return (
    <FooterStyled>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-inner">
            <img src="./lsn.png" alt="logo" />

            {/* Flip Card for Our Office */}
            <div className="card-container">
              <div className="flip-card">
                <div className="card-face card-front">
                  <h3>OUR OFFICE</h3>
                  <ul>
                    <li>
                      <a href="https://maps.app.goo.gl/rKkTTXS5gBNDwJ728">
                        Location
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-face card-back">
                  <p>Visit us at our head office for personalized service.</p>
                </div>
              </div>
            </div>

            {/* Flip Card for Contact Us */}
            <div className="card-container">
              <div className="flip-card">
                <div className="card-face card-front">
                  <h3>CONTACT US</h3>
                  <ul>
                    <li>
                      <a href="tel:+263717263905">+263717263905</a>
                    </li>
                  </ul>
                </div>
                <div className="card-face card-back">
                  <p>Call us for inquiries and support.</p>
                </div>
              </div>
            </div>

            {/* Flip Card for Working Hours */}
            <div className="card-container">
              <div className="flip-card">
                <div className="card-face card-front">
                  <h3>WORKING HOURS</h3>
                  <p>8.00am to 5.00pm</p>
                </div>
                <div className="card-face card-back">
                  <p>We're open Monday to Friday.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <div className="about">
            <h3>ABOUT</h3>
            <hr />
            <ul>
              <li>
                <a href="tel:+263717263905">
                  <img src="./app.png" alt="App" />
                </a>
              </li>
              <li>
                <a href="tel:+263717263905">
                  <img src="./call.png" alt="Call" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">
                  <img src="./linkedin.png" alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/archive/stories/">
                  <img src="./insta.png" alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61568373734206">
                  <img src="./facebook.png" alt="Facebook" />
                </a>
              </li>
            </ul>
          </div>

          <div className="cards">
            <h3>LATEST NEWS</h3>
            <hr />
            <ul>
              <li>
                <a href="https://www.instagram.com/">
                  <img src="./insta.png" alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>

          <div className="cards">
            <h3>LATEST PROJECTS</h3>
            <hr />
            <div className="Slider">
              {/* Slider component inserted here */}
              <Slider />
            </div>
          </div>
        </div>

        <span>All rights reserved® Lsn.coding.2025</span>
      </div>
    </FooterStyled>
  );
}

export default Footer;
