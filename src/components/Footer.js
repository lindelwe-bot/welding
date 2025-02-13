import React from 'react';
import styled from 'styled-components';
import Swiper from './Swiper';


const FooterStyled = styled.section`
.footer{
display:grid;
text-align:center;
justify-content:center;
justify-items:center;
background-color:black;

}

.footer span{
color :black;
background-color:gold;
width :100%;
}

.footer .hr {
color:white;
width:80rem;
}

.footer .footer-top{
display:flex;
}

.footer .footer-top .footer-top-inner{
display:flex;
gap:15rem;
background-color:black;
width:100%;
}

.footer-bottom {
display:flex;
gap:22rem;
}


.footer-bottom .about{
display:grid;

}

.footer-bottom h3{
color:white;
}

.footer-bottom .about hr{
border: 3px solid gold;
border-radius:8px;
width:50px;
}

.footer-bottom .cards hr{
border: 3px solid gold;
border-radius:8px;
width:50px;
}

.footer-bottom .cards p{
color:white;
}

.footer-bottom .about ul{
display:flex;
list-style:none;
}

.footer-botom .cards {
width:50rem;
height:50rem;
justify-content:center;
justify-items:center;
align-text:center;
}

.footer-bottom .about ul img{
width:40px;
height:40px;
}

.footer-bottom .cards li a img{
width:40px;
height:40px;
}

.footer .footer-top .footer-top-inner .cards{
justify-content:center;
justify-items:center;
text-align:center;
align-items:center;

}



.footer .footer-top .footer-top-inner img{
    width:10rem;
    height:10rem;

}

.footer .footer-top .footer-top-inner h3{
color:white;
}

.footer .footer-top .footer-top-inner a {
color:white;
}

.footer .footer-top .footer-top-inner p{
color:white;
}

.swiper {
display:flex;
height:10vh;
width:50px;
justify-Content: center;
justify-items:center;
}

`


function Footer() {
    return (
        <FooterStyled>
            <div className='footer'>
                <div className='footer-top'>
                    <div className='footer-top-inner'>
                        <img src="./lsn.png" alt="logo" />

                        <div className='cards'><h3>OUR OFFICE</h3><li><a href="https://maps.app.goo.gl/rKkTTXS5gBNDwJ728">location</a></li></div>
                        <div className='cards'><h3>CONTACT US</h3>
                            <li ><a href="tel:+263717263905">+263717263905</a>
                            </li></div>
                        <div className='cards'><h3>WORKING HOURS</h3><p>8.00am to 5.00pm</p></div>
                    </div>

                </div>

                <hr className='hr' />

                <div className='footer-bottom'>
                    <div className='about'>
                        <h3>ABOUT</h3>
                        <hr />
                        <ul>
                            <li><a href="tel:+263717263905"><img src="./app.png" alt=""></img></a></li>
                            <li><a href="tel:+263717263905"><img src="./call.png" alt=""></img></a></li>
                            <li><a href="https://www.linkedin.com/feed/?lipi=urn%3Ali%3Apage%3Ad_flagship3_notifications%3BlzvqxqzBQL2UXOlC%2FJgC3g%3D%3D"><img src="./linkedin.png" alt=""></img></a></li>
                            <li><a href="https://www.instagram.com/archive/stories/"><img src="./insta.png" alt=""></img></a></li>
                            <li><a href="https://www.facebook.com/profile.php?id=61568373734206"><img src="./facebook.png" alt=""></img></a></li>


                        </ul>
                    </div>

                    <div className='cards'>
                        <h3>LATEST NEWS</h3>
                        <hr />
                        <li><a href="https://www.instagram.com/" >< img src="./insta.png" alt=""></img></a></li>
                    </div>


                    <div className='cards'>
                        <h3>LATEST PROJECTS</h3>
                        <hr />

                        <div className="Slider">
                            <Swiper/>
                        </div>

                    </div>




                </div>
<span>All rights reserved®Lsn.coding.2025</span>
            </div>
        </FooterStyled>
    )
}

export default Footer