import React from'react';
import styled from 'styled-components';







const ServicesStyles = styled.section`

.services{
 display: grid; 
 align-items: center;
 justify-content: center;
 justify-items: center; 
 height:80vh;
 width:100%; 

}
 .services h2{
 font-size: 3rem;
 color: black;
 }

 .services hr{
 border: 3px solid gold;
 with:80px;
 border-radius:8px;
 }

.services .service-inner{
    display:flex ;
    gap: 5rem;

}
    
.services .service-inner .cards{
align-items: center;
justify-items: center;
justify-content: center;
text-align:center;
width: 40vh;
height: 40vh;
border-radius: 10px;
box-shadow:grey 5px 5px 5px 5px ;
animate:;
}

.services .service-inner .cards:hover{
z-index:4;

background-color:gold;

}
`



function Services() {

  return (

    <ServicesStyles>
        <div class="services">
<h2>Our Services</h2>

<hr/>

<p> We offer you the best tailored solutions for you </p>

<div  className="service-inner">
    <div className="cards">
<div className='cards-front'>
        <div> <img width={100} height={100}
        src="./weldingicon.jpeg"
        class="img-fluid rounded-top"
        alt=""
    />

    </div>
       
    <h3>Welding and Steel</h3>
    <p>loremuhgin </p>
</div>


<div className="cards-back">



</div>
    </div>

    <div className="cards">

        <div className='cards-front'>
        <div>  <img width={100} height={100}
        src="./weldingmachine.jpeg"
        class="img-fluid rounded-top"
        alt=""
    /></div>
      
    <h3>Welding and Steel</h3>
    <p>loremuhgin </p>

    </div>

<div className='cards-back'>


    </div>
    </div>

    <div className="cards">

        <div className='cards-front'>
        <div> <img width={100} height={100}
        src="./equipment.jpeg"
        class="img-fluid rounded-top"
        alt=""
    /></div>
       
    <h3>Welding Equipment</h3>
    <p>We provide equipment hiring at affordable prices</p>
    </div>
    </div>

    <div className='cards-back'>

        
    </div>
</div>
</div>
    </ServicesStyles>
  )
}

export default Services