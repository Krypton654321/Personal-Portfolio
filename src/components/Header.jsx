import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <Container>
        <header>
          <nav>
            <div class="left">Harshit's Portfolio</div>
            <div class="right">
              <ul>
                <li>
                  <a href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Services</a>
                </li>
                <li>
                  <a href="/">Projects</a>
                </li>
                <li>
                  <a href="/">Contact Me</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </Container>
    </>
  );
}
const Container = styled.div`
  .left {
    font-size: 1.5rem;
  }
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    background-color: rgb(18, 18, 62);
  }
  nav ul {
    display: flex;
    justify-content: center;
  }
  nav ul li {
    list-style: none;
    margin: 0 23px;
  }
  nav ul li a {
    text-decoration: none;
    color: white;
  }
  nav ul li a:hover {
    color: rgb(151, 151, 213);
    size: 1.04rem;
  }
`;
