import React from "react";
import styled from "styled-components";
import bg from "./Materials/—Pngtree—web developer isometric illustration_6067558.png";
import { ReactTyped } from "react-typed";

export default function Main() {
  return (
    <>
      <Container>
        <main>
          <section className="firstSection">
            <div className="leftSection">
              Hi, My name is <span className="purple">Harshit Chauhan</span>
              <div>and I am a </div>
              <ReactTyped
                strings={["Web Developer", "Competitive Coder", "Video Editor"]}
                typeSpeed={50}
              />
              <div className="buttons">
                <button className="btn">Download Resume</button>
                <a href="http://github.com/Krypton654321">
                  <button className="btn">Visit Github</button>
                </a>
              </div>
            </div>
            <div className="rightSection">
              <img src={bg} alt="" />
            </div>
          </section>
          <hr />
          <section className="secondSection">
            <span className="textgray">What I have done so far</span>
            <h1>Work Experience</h1>
            <div className="box">
              <div className="vertical">
                <div className="vertical-title">IIT DHANBAD (2021-2025)</div>
                <div className="vertical-des">
                  I am pursuing Bachelor of Technology in Electronics And
                  Communication Engineering
                </div>
              </div>
              <div className="vertical">
                <div className="vertical-title">Web Developer (2021-present)</div>
                <div className="vertical-des">
                  I am Web developer. I know ReactJs,HTML,CSS,Javascript.
                </div>
              </div>
              <div className="vertical">
                <div className="vertical-title">
                  Competitive Coder (2021-present)
                </div>
                <div className="vertical-des">
                  I am doing Competitive Programming on Codeforces in C++.
                </div>
              </div>
              <div className="vertical">
                <div className="vertical-title">Video Editor</div>
                <div className="vertical-des">
                  I am also doing video editing using iMovie.
                </div>
              </div>
            </div>
          </section>
        </main>
      </Container>
    </>
  );
}
const Container = styled.div`
  .firstSection {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 80px 0;
  }
  .firstSection > div {
    width: 30%;
  }
  .leftSection {
    font-size: 2.6em;
    margin: 70px 0;
  }
  .leftSection .buttons {
    padding: 50px 0;
  }
  .leftSection .btn {
    padding: 12px;
    background: #1e2167;
    color: white;
    border: 2px solid white;
    border-radius: 6px;
    font-size: 20px;
    cursor: pointer;
    margin-right:5px;
  }
  .rightSection img {
    width: 80%;
  }
  .purple {
    color: rgb(170, 107, 228);
  }
  .secondSection {
    max-width: 80vw;
    margin: auto;
    height: 60vh;
  }
  .secondSection h1 {
    font-size: 1.9rem;
  }
  .secondSection .box {
    background: white;
    width: 65vw;
    height: 2px;
    margin: 56px 0;
    display: flex;
  }
  .secondSection .vertical {
    height: 93px;
    width: 1px;
    background-color: white;
    margin: 0 100px;
  }
  .textgray {
    color: gray;
  }
  .vertical-title {
    position: relative;
    top: 100px;
    width: 150px;
  }
  .vertical-des {
    position: relative;
    top: 111px;
    color: gray;
    width: 150px;
    font-size: 9px;
  }
  #element {
    color: rgb(170, 107, 228);
  }
  main hr {
    border: 0;
    background-color: #9c97f1;
    height: 1.2px;
    margin: 60px 84px;
  }
`;
