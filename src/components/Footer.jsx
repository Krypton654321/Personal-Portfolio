import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <Container>
        <footer class="footer">
          <div class="first">
            <h3>Harshit,s Developer Portfolio</h3>
          </div>
          <div class="second">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Services</li>
              <li>Home</li>
            </ul>
          </div>
          <div class="third">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Services</li>
              <li>Home</li>
            </ul>
          </div>
          <div class="fourth">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Services</li>
              <li>Home</li>
            </ul>
          </div>
        </footer>
      </Container>
    </>
  );
}
const Container = styled.div`
  footer {
  background-color: #0e0e1a;
}
.footer {
  display: flex;
  padding: 23px 122px;
  justify-content: space-evenly;
}
.footer ul {
  list-style: none;
}
.footer > div {
  width: 223px;
}
`;
