import React, { useState, useEffect, useRef } from "react"
import "./App.scss"
import "./Navigation.scss"

import download from "./assets/Download.svg"
import arrow from "./assets/Arrow.svg"
import medium from "./assets/medium.svg"
import linkedin from "./assets/linkedin.svg"
import github from "./assets/github.svg"

function App() {
  const [checkbox, setCheckbox] = useState(false)
  const [counter, setCounter] = useState(0)
  const [science, setScience] = useState(true)
  const [deep, setDeep] = useState(false)
  const [data, setData] = useState(false)
  const [dev, setDev] = useState(false)

  const activeScience = e => {
    setScience(true)
    setDeep(false)
    setData(false)
    setDev(false)
    setCounter(0)
  }
  const activeDeep = e => {
    setScience(false)

    setDeep(true)
    setData(false)
    setDev(false)
    setCounter(1)
  }
  const activeData = e => {
    setScience(false)
    setDeep(false)
    setData(true)
    setDev(false)
    setCounter(2)
  }
  const activeDev = e => {
    setScience(false)
    setDeep(false)
    setData(false)
    setDev(true)
    setCounter(3)
  }

  const skillRef = useRef()

  const handleScroll = e => {
    //console.log(skillRef.current.getBoundingClientRect().top)
    if (
      skillRef.current.getBoundingClientRect().top < 50 &&
      skillRef.current.getBoundingClientRect().top > 0
    ) {
      setCounter(counter + 1)
      //console.log(counter)
      if (counter < 4) {
        document.body.style.overflowY = "hidden"
        if (counter === 0) {
        }
        if (counter === 1) {
          setScience(false)
          setDeep(true)
        }

        if (counter === 2) {
          setDeep(false)
          setData(true)
        }

        if (counter === 3) {
          setData(false)
          setDev(true)
        }
      } else {
        document.body.style.overflowY = "auto"
      }
    } else {
    }
  }
  return (
    <div className="App">
      <div className="navContainer">
        <ul className="navBar">
          <ul>
            <li>
              <a href="#edication" style={{ margin: "0px", top: "0px" }}>
                <span>Education</span>
              </a>
            </li>

            <li>
              <a href="#experience" style={{ margin: "0px", top: "0px" }}>
                <span>Experience</span>
              </a>
            </li>

            <li>
              <a href="#skills" style={{ margin: "0px", top: "0px" }}>
                <span>Skills</span>
              </a>
            </li>
            <li>
              <a href="#projects" style={{ margin: "0px", top: "0px" }}>
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="#contact" style={{ margin: "0px", top: "0px" }}>
                <span>Contact</span>
              </a>
            </li>
            <li>
              <a href={github} download style={{ top: "0px" }}>
                <span>
                  Download Resume
                  <span>
                    <img src={download} alt="Logo" width="14px" />
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </ul>

        <div>
          <input
            type="checkbox"
            id="menuToggle"
            checked={checkbox}
            onClick={() => {
              setCheckbox(!checkbox)
            }}
          />
          <label id="trigger" htmlFor="menuToggle" />
          <label id="burger" htmlFor="menuToggle" />
          <ul id="menu">
            <li>
              <a
                href="#edication"
                style={{ margin: "0px", top: "0px" }}
                onClick={() => {
                  setCheckbox(!checkbox)
                }}
              >
                <span>Education</span>
              </a>
            </li>

            <li>
              <a
                href="#experience"
                style={{ margin: "0px", top: "0px" }}
                onClick={() => {
                  setCheckbox(!checkbox)
                }}
              >
                <span>Experience</span>
              </a>
            </li>

            <li>
              <a
                href="#skills"
                style={{ margin: "0px", top: "0px" }}
                onClick={() => {
                  setCheckbox(!checkbox)
                }}
              >
                <span>Skills</span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                style={{ margin: "0px", top: "0px" }}
                onClick={() => {
                  setCheckbox(!checkbox)
                }}
              >
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                style={{ margin: "0px", top: "0px" }}
                onClick={() => {
                  setCheckbox(!checkbox)
                }}
              >
                <span>Contact</span>
              </a>
            </li>
            <li>
              <a href={github} download style={{ top: "0px" }}>
                <span>
                  Download Resume
                  <span>
                    <img src={download} alt="Logo" width="14px" />
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="navbar">
        <a href="#edu">Education</a>
        <a href="#exp">Experience</a>
        <a href="#skill">Skills</a>
        <a href="#proj">Projects</a>
        <a href="#cont">Contact</a>
        <a href="#dwnl">
          Download Resume
          <span>
            <img src={download} alt="Logo" width="14px" />
          </span>
        </a>
      </div> */}
      <div className="Landing">
        <div className="Name">Faik Aydin</div>
        <div className="Discription">
          <p className="langing_desc">
            <span className="gradient">Data Scientist</span> & Machine Learning
            Engineer | Active Research in
            <span className="gradient">Deep Learning</span>
          </p>
          <p>
            Whose Also Into <span className="gradient">Art & Design!</span>
          </p>

          <div className="button_div">
            <button className="scroll_button">More about me</button>
          </div>
          <div className="arrow">
            <img src={arrow} alt="Scroll Down" />
          </div>
        </div>
      </div>
      <div className="Education" id="edication">
        <div className="hard_header">
          <h2>Education</h2>
        </div>
        <div className="edu_content">
          <div className="content_row">
            <div className="edu_time">
              <h3 className="left">Febuary 2017 - December 2018</h3>
              <h4 className="left">Master of Data Science</h4>
            </div>
            <div className="edu border">
              <div className="dot" />

              <h3 className="right">MONASH UNIVERSITY</h3>
              <h4 className="right">
                Under the International Merit Scholarship
              </h4>
              <h4 className="right">
                Research Thesis: Medical Multimodal Classification and Detection
                Under Small Data Conditions.
              </h4>
              <h4 className="right">
                Graduated, WAM: 81.313/GPA: 3.625, H1 High Honours
              </h4>
            </div>
          </div>

          <div className="edu_content">
            <div className="content_row">
              <div className="edu_time">
                <h3 className="left">January 2018 - Febuary 2018</h3>
                <h4 className="left">Bayesian Machine Learning</h4>
              </div>
              <div className="edu border">
                <div className="dot" />

                <h3 className="right">
                  Australian Mathematical Sciences Institute
                </h3>
                <h4 className="right">
                  Advanced unit offered by AMSI on statistical ML
                </h4>
              </div>
            </div>
          </div>

          <div className="edu_content">
            <div className="content_row">
              <div className="edu_time">
                <h3 className="left">December 2016</h3>
                <h4 className="left">Mechanical Engineering</h4>
              </div>
              <div className="edu border">
                <div className="dot" />

                <h3 className="right">BILKENT UNIVERSITY</h3>
                <h4 className="right">Bachelor of Science</h4>
                <h4 className="right">Field of specialization: Mechatronics</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="Experience" id="experience">
          <div className="hard_header">
            <h2>Experience</h2>
          </div>
          <div className="edu_content">
            <div className="content_row">
              <div className="edu_time">
                <h3 className="left">January 2019 - Ongoing</h3>
                <h4 className="left">
                  Data Scientist & Machine Learning Engineer
                </h4>
                <h4 className="left">Melbourne, Australia</h4>
              </div>
              <div className="edu border">
                <div className="dot" />

                <h3 className="right">TELSTRA</h3>
                <h4 className="right">Big Data & AI Department</h4>
                <h4 className="right">
                  Working on Chatbot development using Skipthought and
                  Transformer deep learning architectures (such as BERT). Mainly
                  involved with model improvement and evaluation methods.
                </h4>
                <h4 className="right space">Telstra Labs </h4>
                <h4 className="right">
                  Geospatial Analytics (tracking & monitoring). Retail video
                  analytics with deep learning.
                </h4>
              </div>
            </div>

            <div className="edu_content">
              <div className="content_row">
                <div className="edu_time">
                  <h3 className="left">Febuary 2018 - January 2019</h3>
                  <h4 className="left">Data Scientist</h4>
                  <h4 className="left">Melbourne, Australia</h4>
                </div>
                <div className="edu border">
                  <div className="dot" />

                  <h3 className="right">BLUEROCK </h3>
                  <h4 className="right">
                    Predictive Modelling, Multivariate, Multi-seasonal Time
                    Series Advanced Geospatial Analytics with R. Machine
                    Learning solutions for clients. Supply, Demand Forecasting
                    and Churn Analysis of services in a geospatial location.
                  </h4>
                </div>
              </div>
            </div>
            <div className="edu_content">
              <div className="content_row">
                <div className="edu_time">
                  <h3 className="left">Febuary 2017 - December 2018</h3>
                  <h4 className="left">Deep Learning Research</h4>
                  <h4 className="left">Melbourne, Australia</h4>
                </div>
                <div className="edu border">
                  <div className="dot" />

                  <h3 className="right">MONASH UNIVERSITY</h3>
                  <h4 className="right">
                    This is my postgrad thesis association with Alfred Hospital
                    in Melbourne and Monash University. I combine a 1D
                    Convolutional Neural Network Text classifier (using doctor
                    notes) and large deep neural networks for image data to get
                    a custom Multi Model in order to classify various internal
                    diseases.
                  </h4>
                  <h4 className="right">
                    My work focuses on low data deep learning (as hospitals
                    practically do not carry large sums of data especially
                    labeled). This is why I use transfer learning. I use
                    gradients to make the model tell me what pixel and word
                    combinations drove the multi- model to its decision.
                  </h4>
                </div>
              </div>
            </div>
            <div className="edu_content">
              <div className="content_row">
                <div className="edu_time">
                  <h3 className="left">Febuary 2015 - June 2016</h3>
                  <h4 className="left">R&D Mechatronics Engineer</h4>
                  <h4 className="left">Melbourne, Australia</h4>
                </div>
                <div className="edu border">
                  <div className="dot" />

                  <h3 className="right">ROKETSAN</h3>
                  <h4 className="right">
                    ROKETSAN is one of the biggest defence systems company in
                    Turkey, specialising in missile design. Contributed to
                    Roketsan’s SMART WINGS project’s avionic control division.
                    SMART WINGS are long range missile wings that adapt to the
                    surroundings and change shape in order to save fuel and
                    better accuracy. Programmed microprocessors in C ++.
                  </h4>
                  <h4 className="right">
                    Did System Modeling with MATLAB, Solidworks & COMSOL.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="Skills"
          id="skills"
          onWheel={() => setTimeout(handleScroll, 1000)}
          ref={skillRef}
        >
          <div className="skill_header">
            <h2>Skills</h2>
          </div>
          <div className="grid_header">
            <div
              className={
                science ? "science_header emphasis_header" : "science_header"
              }
              onClick={activeScience}
            >
              Data Science
            </div>
            <div
              className={deep ? "deep_header emphasis_header" : "deep_header"}
              onClick={activeDeep}
            >
              Deep Learning
            </div>
            <div
              className={data ? "data_header emphasis_header" : "data_header"}
              onClick={activeData}
            >
              Data
            </div>
            <div
              className={dev ? "dev_header emphasis_header" : "dev_header"}
              onClick={activeDev}
            >
              Dev
            </div>
          </div>
          <div className="grid_table">
            <div className={deep ? "deep emphasis" : "deep"}>Deep Learning</div>
            <div className={data ? "sql emphasis" : "sql"}>SQL</div>
            <div className={dev ? "html emphasis" : "html"}>HTML</div>
            <div className={science ? "geo emphasis" : "geo"}>
              Geospatial Analytics
            </div>

            <div className={dev ? "git emphasis" : "git"}>git</div>
            <div className={science ? "python emphasis" : "python"}>Python</div>
            <div className={deep ? "keras emphasis" : "keras"}>Keras</div>
            <div className={deep ? "net emphasis" : "net"}>
              Convolutional Networks
            </div>

            <div className={science ? "r emphasis" : "r"}>R</div>
            <div className={deep ? "tensor emphasis" : "tensor"}>
              TensorFlow
            </div>
            <div className={data ? "hadoop emphasis" : "hadoop"}>Hadoop</div>
            <div className={science ? "liner emphasis" : "liner"}>
              Linear and Non-Linear Classification Tasks
            </div>

            <div className={deep ? "recurrent emphasis" : "recurrent"}>
              Recurrent Networks
            </div>
            <div className={dev ? "js emphasis" : "js"}>JS</div>
            <div className={science ? "baysian emphasis" : "baysian"}>
              Bayesian ML
            </div>
            <div className={data ? "scala emphasis" : "scala"}>Scala</div>

            <div className={science ? "forcast emphasis" : "forcast"}>
              Forecasting
            </div>
            <div className={deep ? "rein emphasis" : "rein"}>
              Reinforcement Learning
            </div>
            <div className={dev ? "css emphasis" : "css"}>CSS</div>
            <div className={deep ? "transformer emphasis" : "transformer"}>
              Transformer
            </div>

            <div className={dev ? "node emphasis" : "node"}>Node.js</div>
            <div className={science ? "time emphasis" : "time"}>
              Time Series Anomaly Detection
            </div>
            <div className={deep ? "arch emphasis" : "arch"}>
              Architecture Optimization
            </div>
            <div className={dev ? "react emphasis" : "react"}>React.js</div>

            <div className={deep ? "nlp emphasis" : "nlp"}>NLP</div>
            <div className={data ? "spark emphasis" : "spark"}>Spark</div>
            <div className={science ? "tableau emphasis" : "tableau"}>
              Tableau
            </div>
            <div className={deep ? "image emphasis" : "image"}>Imaging</div>
          </div>
        </div>

        <div className="Projects" id="projects">
          <div className="hard_header">
            <h2>Projects</h2>
          </div>
        </div>

        <div className="Contact" id="contact">
          <div className="hard_header">
            <h2>Contact</h2>
          </div>
          <div className="contact_content">
            <div className="content_row">
              <div className="contact_left">
                <h3 className="contact_name">Faik Canberk Aydin</h3>
                <h4 className="contact_name">Data Science</h4>
              </div>
              <div className="contact_right">
                <h4 className="contact_detail">Email:</h4>
                <h4 className="contact_detail">faikcanberkadyin@gmail.com</h4>
                <div className="icons">
                  <a href="https://github.com/faikezra/">
                    <img src={github} alt="Github" height="30px" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
