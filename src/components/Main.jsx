import React from "react";
import styled from "styled-components";
import bg from "./Materials/—Pngtree—web developer isometric illustration_6067558.png";
import { ReactTyped } from "react-typed";

export default function Main() {
  const handleClick = () => {
    alert("This feature is not yet implemented");
  };
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
                <button className="btn" onClick={handleClick}>
                  Download Resume
                </button>
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
          <section className="secondsection">
            <h1>Education</h1>
            <div className="outerbox">
              <div className="box">
                <div className="vertical">
                  <div className="verticalheading">Class 10</div>
                  <div className="verticaltext">
                    <ul>
                      <li>S.D. Public School</li>
                      <li>Muzaffarnagar, UP ,India</li>
                      <li>Percentage: 94.60%</li>
                      <li>March 2018</li>
                    </ul>
                  </div>
                </div>
                <div className="vertical">
                  <div className="verticalheading">Class 12</div>
                  <div className="verticaltext">
                    <ul>
                      <li>P.R. Public School</li>
                      <li>Muzaffarnagar, UP ,India</li>
                      <li>Percentage: 92.20%</li>
                      <li>March 2020</li>
                    </ul>
                  </div>
                </div>
                <div className="vertical">
                  <div className="verticalheading">B-Tech</div>
                  <div className="verticaltext">
                    <ul>
                      <li>Indian Institute of Technology (ISM) Dhanbad</li>
                      <li>
                        Bachelor of Technology- Electronica and Communication
                        Engineering
                      </li>
                      <li>CGPA: 8.46</li>
                      <li>December 2021- Present</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h1>Skills</h1>
            <div className="outerbox">
              <div className="box">
                <div className="vertical">
                  <div className="verticalheading">Core Skills</div>
                  <div className="verticaltext">
                    <ul>
                      <li>C, C++</li>
                      <li>Data Structures and Algorithms</li>
                      <li>OOPS OS</li>
                    </ul>
                  </div>
                </div>
                <div className="vertical">
                  <div className="verticalheading">
                    {" "}
                    Full Stack Web Developer
                  </div>
                  <div className="verticaltext">
                    <ul>
                      <li> HTML, CSS, Javascript</li>
                      <li>ReactJs, NodeJs, ExpressJs</li>
                      <li>Mongoose, MongoDB</li>
                    </ul>
                  </div>
                </div>
                <div className="vertical">
                  <div className="verticalheading">Learning Skills</div>
                  <div className="verticaltext">
                    <li>Trading (Stock Market)</li>
                    <li>Video Editing</li>
                  </div>
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
    margin-right: 5px;
  }
  .rightSection img {
    width: 80%;
  }
  .purple {
    color: rgb(170, 107, 228);
  }
  .textgray {
    color: gray;
  }
  .secondsection .box {
    display: flex;
    background-color: antiquewhite;
    margin: 0 50px;
    height: 2px;
  }

  .box .vertical {
    background-color: antiquewhite;
    height: 80px;
    width: 2px;
    margin: 0 200px;
  }
  .secondsection h1 {
    font-size: 2rem;
    margin: 30px 50px;
    color: rgb(170, 107, 228)
  }
  .outerbox {
    height: 200px;
    margin: 0 50px;
  }
  .verticalheading {
    position: relative;
    top: 85px;
    width: 220px;
    font-size: 1.1rem;
    /* color: white; */
    color: rgb(170, 107, 228);
    font-size: 20px;
  }
  .verticaltext {
    position: relative;
    top: 90px;
    width: 220px;
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
