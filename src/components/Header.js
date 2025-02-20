import React, { useState } from "react";
import styled from "styled-components";

const HeaderStyles = styled.section`
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;

  .Links ul {
    display: flex;
    gap: 30px;
    font-size: large;
    font-weight: 500;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .Links ul li a {
    color: gold;
    text-decoration: none;
  }

  img {
    width: 10rem;
    height: 10rem;
  }

  .signIn {
    color: gold;
    cursor: pointer;
    font-size: large;
    font-weight: 500;
  }
`;

const SignInForm = styled.form`
  position: absolute;
  top: 100%;
  right: 2rem;
  background: #222;
  padding: 1rem;
  border: 1px solid #444;
  border-radius: 4px;
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    color: #fff;
    font-size: 0.9rem;
  }

  input {
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
  }

  button {
    background: gold;
    color: black;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
`;

function Header() {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleToggleSignIn = () => {
    setShowSignIn((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    alert("Sign in submitted!");
  };

  return (
    <HeaderStyles>
      <div>
        <img src="./lsn.png" alt="Company Logo" />
      </div>

      <div className="Links">
        <ul>
          <li>
            <a href="./Home">Home</a>
          </li>
          <li>
            <a href="./About">About</a>
          </li>
          <li>
            <a href="./Solutions">Solutions</a>
          </li>
          <li>
            <a href="./Projects">Projects</a>
          </li>
          <li>
            <a href="./Contact">Contact</a>
          </li>
          <li>
            <a href="./Shoptools">Shoptools</a>
          </li>
          <li>
            <a href="./Pages">Pages</a>
          </li>
          <li>
            <span className="signIn" onClick={handleToggleSignIn}>
              Sign In
            </span>
          </li>
        </ul>
      </div>

      {showSignIn && (
        <SignInForm onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Sign In</button>
        </SignInForm>
      )}
    </HeaderStyles>
  );
}

export default Header;
