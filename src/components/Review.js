import React from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup'


const ReviewStyle = styled.section`
.reviews{
display: flex;
gap: 10rem;
alignItems:center;
justify-content: center;
justify-items:center;
background-image:url(./darkbackground.jpg);
background-repeat:none;
background-size: cover;
margin-top:10rem;
padding-top:3rem;
color:white;
height:60vh;
width:100%;
}

.reviews .cards
{
align-items: center;
justify-content: center;
text-align: center;
}

.reviews .cards img{
width:150px;
height:150px;
}

.reviews .cards h4{
font-weight:900;
font-size:40px;
color:white;
}

.reviews .cards p{
font-size:30px;
color:white;
}
`




function Review() {
  return (
    <ReviewStyle>
      <div className= 'reviews'>
<div className='cards'>
  <img 
  src="./lightning.png"
  class="img-fluid rounded-top"
  alt=""
/>
<h4> <CountUp start={0} end={2899}  duration={5.75} ></CountUp> </h4>
<p>Energy Projects</p></div>


<div className='cards'>
   <img 

  src="./gears.png"
  class="img-fluid rounded-top"
  alt=""
/>
 
<h4 ><CountUp start={0} end={844} duration={5.75} ></CountUp></h4>
<p>Mechanical Projects</p></div>


<div className='cards'>
  <img 
  src="./trophy.png"
  class="img-fluid rounded-top"
  alt=""
/>
 <h4 > <CountUp start={0} end={321} duration={5.75} ></CountUp> </h4>
<p>Awards</p></div>


<div className='cards'><img

  src="./smiley.png"
  class="img-fluid rounded-top"
  alt=""
/>
 <h4> <CountUp start={0} end={1322} duration={5.75} ></CountUp> </h4>
<p>Happy Customer</p></div>

</div>
    </ReviewStyle>
  )
}

export default Review