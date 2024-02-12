import React from "react";
import styled from "styled-components";
import ln from "./Materials/linkedin.png";
import inn from "./Materials/insta";
import gm from "./Materials/gm.svg";
import fb from "./Materials/facebook.webp";
import gb from "./Materials/github.png";
import me from "./Materials/IMG_20220815_144842.jpg";

export default function Footer() {
  return (
    <>
      <Container>
        <footer>
          <div class="footerbox">
            <div class="footerfirst">
              <h3>Harshit's Developer Portfolio</h3>
            </div>
            <div class="footersecond">
              <ul>
                <li>
                  <img src={ln} alt="" />{" "}
                  <a href="https://www.linkedin.com/in/harshit-chauhan-06680b226/">
                    Linkedin{" "}
                  </a>
                </li>
                <li>
                  <img src={inn} alt="" />{" "}
                  <a href="https://www.instagram.com/nova.i1/">Instagram </a>
                </li>
                <li>
                  <img src={gb} alt="" />{" "}
                  <a href="https://github.com/Krypton654321">GitHub </a>
                </li>
                <li>
                  <img src={fb} alt="" />{" "}
                  <a href="https://www.facebook.com/harshit.chauhan8/">
                    Facebook{" "}
                  </a>
                </li>
                <li>
                  <img src={gm} alt="" /> <a href="/">Gmail </a>
                </li>
              </ul>
            </div>
            <div class="footerthird">
              <img src={me} alt="" />
            </div>
          </div>
        </footer>
      </Container>
    </>
  );
}
const Container = styled.div`
  footer .footerbox {
    display: flex;
    justify-content: space-evenly;
    background-color: #0e0e1a;
    padding: 50px 0;
    align-items: center;
  }
  footer .footerbox > div {
    width: 150px;
  }
  footer .footerthird img {
    width: 80px;
    height: 100px;
    border-radius: 1800%;
    border-style: solid;
    border-color: #c188d0;
  }
  footer h3 {
    font-size: 1.5rem;
    color: rgb(170, 107, 228)
  }
  .footersecond ul {
    list-style: none;
  }
  .footersecond ul li {
    font-size: 1.1rem;
    margin: 5px 0;
  }

  .footersecond ul img {
    width: 18px;
    margin-right: 5px;
  }
  .footersecond ul li a {
    text-decoration: none;
    color: rgb(234, 197, 233);
  }
  .footersecond ul li a:hover {
    color: white;
    font-size: 1.01rem;
  }
`;
