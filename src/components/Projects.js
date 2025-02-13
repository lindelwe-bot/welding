import React from 'react'
import styled from 'styled-components'




const ProjectStyles = styled.section`
.project-main{
display: inline-block;
background-color: white;
height:100vh;
width:100%;
justify-content: center;
align-items: center;
justify-items: center;
padding-top:3rem;
padding-bottom:3rem;
margin:0;
}

.project-main .project{
display:flex;
gap:none;
background-color:grey;
}

.project-main .project   .img{
height:100%;

}

.project-main .project  .img img{
height:60vh;
width:40rem;
}

.project-main .project  .content{
text-align:flex-start;
justify-content: flex-start;
justify-items: flex-start;
background-color:grey;
width:30rem;
height:30vh;
padding:2rem;
}

.project-main .project  .content h2{
color:white;
}

.project-main .project  .content .hr{
border: 3px solid gold;
border-radius:8px;
display:flex-start;
width:50px;

}



.project-main .project  .content button{
 background-color:gold;
    padding: 1rem;
    margin: 5px;
    font-size: medium;
    font-weight: 600;
    border: 3px solid gold;
    color: white;
    border-radius: 5px;

}

.project-main .project .content button:hover{
background-color:transparent;
color:black;

}
`



function Projects() {
  return (
    <ProjectStyles>

      <div className="project-main">
<div className="project">
<div className='img'>
  <img src="./laser.jpeg" alt=""/>
</div>
<div className='content'>
  <h2>Laser Welding</h2>
  <hr className="hr"/>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, lectus id pellentesque hendrerit, purus urna ultricies velit, at fringilla eros velit vel ipsum.</p>

  <button>Read More</button>
</div>

</div>
<div className="project">

<div className='content'>
  <h2>Industrial Welding</h2>
  <hr className="hr"/>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, lectus id pellentesque hendrerit, purus urna ultricies velit, at fringilla eros velit vel ipsum.</p>

  <button>Read More</button>
</div>
<div className='img'>
  <img src="./industrialwelding.jpeg" alt=""/>
</div>

</div>
<div className="project">
<div className='img'>
  <img src="./electricwelding.jpeg" alt=""/>
</div>
<div className='content'>
  <h2>Electron Welding</h2>
  <hr className="hr"/>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, lectus id pellentesque hendrerit, purus urna ultricies velit, at fringilla eros velit vel ipsum.</p>

  <button>Read More</button>
</div>

</div>
</div>

    </ProjectStyles>
  )
}

export default Projects