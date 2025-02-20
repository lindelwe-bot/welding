import React from "react";
import styled from "styled-components";

const ServicesStyles = styled.section`
  .services {
    display: grid; 
    align-items: center;
    justify-content: center;
    justify-items: center; 
    height: 80vh;
    width: 100%;
  }

  .services h2 {
    font-size: 3rem;
    color: black;
  }

  .services hr {
    border: 3px solid gold;
    width: 80px;
    border-radius: 8px;
    margin: 1rem 0;
  }

  .service-inner {
    display: flex;
    gap: 5rem;
    margin-top: 2rem;
  }
`;

const CardContainer = styled.div`
  width: 40vh;
  height: 40vh;
  perspective: 1000px;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 30vh;
    height: 30vh;
  }
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-shadow: 5px 5px 5px 5px grey;
`;

const CardFront = styled(CardFace)`
  background-color: white;
`;

const CardBack = styled(CardFace)`
  background-color: gold;
  transform: rotateY(180deg);
  color: black;
  text-align: center;
`;

function Services() {
  return (
    <ServicesStyles>
      <div className="services">
        <h2>Our Services</h2>
        <hr />
        <p>We offer you the best tailored solutions for you</p>
        <div className="service-inner">
          <CardContainer>
            <Card>
              <CardFront>
                <img 
                  width={100} 
                  height={100} 
                  src="./weldingicon.jpeg" 
                  alt="Welding Icon" 
                />
                <h3>Welding and Steel</h3>
                <p>loremuhgin</p>
              </CardFront>
              <CardBack>
                <h3>Welding and Steel</h3>
                <p>Additional details about our welding and steel services.</p>
              </CardBack>
            </Card>
          </CardContainer>

          <CardContainer>
            <Card>
              <CardFront>
                <img 
                  width={100} 
                  height={100} 
                  src="./weldingmachine.jpeg" 
                  alt="Welding Machine" 
                />
                <h3>Welding Machines</h3>
                <p>loremuhgin</p>
              </CardFront>
              <CardBack>
                <h3>Welding Machines</h3>
                <p>Learn more about our advanced welding machine range.</p>
              </CardBack>
            </Card>
          </CardContainer>

          <CardContainer>
            <Card>
              <CardFront>
                <img 
                  width={100} 
                  height={100} 
                  src="./equipment.jpeg" 
                  alt="Equipment" 
                />
                <h3>Welding Equipment</h3>
                <p>We provide equipment hiring at affordable prices</p>
              </CardFront>
              <CardBack>
                <h3>Welding Equipment</h3>
                <p>Explore our range of quality welding equipment available for hire.</p>
              </CardBack>
            </Card>
          </CardContainer>
        </div>
      </div>
    </ServicesStyles>
  );
}

export default Services;
