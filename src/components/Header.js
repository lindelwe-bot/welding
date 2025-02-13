import React from 'react';
import styled from 'styled-components'

const HeaderStyles = styled.section`
    background: black;
    display: flex;
    justfiy-content: space-between;
    


    .Links ul{
    display: flex;
    gap: 30px;
    font-size:large;
    font-weight:500;
    padding-left:500px;
    list-style:none;
    padding-top:1rem;
    }

    .Links ul li a{
    color:gold;
    }

    img{
    width:10rem;
    height:10rem;

    }
`


function Header() {
  return (
    <HeaderStyles >
<div>
        <img src='./lsn.png' alt=''  />
</div>


      <div className='Links'>
        <ul>
          <li ><a href="./Home">Home</a></li>
          <li ><a href="./">About</a></li>
          <li ><a href="">Solutions</a></li>
          <li ><a href="">Projects</a></li>
          <li ><a href="">Contact</a></li>
          <li ><a href="">Shoptools</a></li>
          <li ><a href="">Pages</a></li>
        </ul>
      </div>
    </HeaderStyles>
  )
}

export default Header