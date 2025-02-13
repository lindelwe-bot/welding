import React from 'react'
import styled from 'styled-components'

const HeroStyles = styled.section`
.hero{
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position:absolute;
  background-image:url(./background2.jpeg);
background-size: cover;
align-content: center;
justify-content: center;
justify-items: center;


}

h1 {
color: whitesmoke;
font-size: xx-large ;
font-weight: bolder;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
padding-top: 20rem;
}

.hero p{
    color: whitesmoke;
}

.hero button{
    background-color:transparent;
    padding: 1rem;
    margin: 5px;
    font-size: medium;
    font-weight: 600;
    border: 3px solid gold;
    color: gold;
    border-radius: 5px;
}

.hero button:hover{
background-color:gold;
color:black;
}
`
function Hero() {
  return (
    <HeroStyles>
<div className='hero'>
<h1> Industrial Solutions</h1>
<p>Precise cutting edge technology fabrication</p>


<button href="">Learn More</button>
</div>
    </HeroStyles>
  )
}

export default Hero;