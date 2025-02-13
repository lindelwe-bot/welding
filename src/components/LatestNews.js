import React from 'react'
import styled from 'styled-components'


const LatestNewsStyled = styled.section`
.latest{
display:grid;
align-items:center;
justify-items:center;
justify-content:center;
text-align:center;
}

.latest hr {
border: 3px solid gold;
border-radius:8px;
width:50px;
}

.latest .row{
display:flex;
gap:1rem;
padding-bottom:3rem;
}


.row img{
width:10rem;
height:10rm;
}

.row .cards button{
background-color:gold;
    padding: 1rem;
    margin: 5px;
    font-size: medium;
    font-weight: 600;
    border: 3px solid gold;
    color: white;
    border-radius: 5px;

}

.row .cards button :hover{
background-color:transparent;
color:black;
}

`

function LatestNews() {
  return (
    <LatestNewsStyled>

       <div className='latest' >
       <h3>Latest News</h3> 
       <hr/>
       <p>We give the best update for offers and promotions</p>
<div className='row'>
       <div className='cards'>
<img src="./industrialwelding.jpeg" alt="" />

         <h4>Aricultural Revolution</h4>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id bibendum nunc. Donec non dolor non ex sagittis mollis. Aliquam erat volutpat. Sed vel velit id arcu posuere pellentesque.</p>

        <button>Read More</button>
       </div>

       <div className='cards'>
<img src="./welding2.jpeg" alt="" />

         <h4>New Renewable Energy</h4>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id bibendum nunc. Donec non dolor non ex sagittis mollis. Aliquam erat volutpat. Sed vel velit id arcu posuere pellentesque.</p>

        <button>Read More</button>
       </div>

       <div className='cards'>
<img src="./welding.jpeg"  alt=""/>

         <h4>Construction Improvements</h4>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id bibendum nunc. Donec non dolor non ex sagittis mollis. Aliquam erat volutpat. Sed vel velit id arcu posuere pellentesque.</p>

        <button>Read More</button>
       </div>
</div>
</div>

    </LatestNewsStyled>
  )
}

export default LatestNews