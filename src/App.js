import React, { useState, useEffect, useRef } from "react"
import "./App.scss"
import "./Navigation.scss"

import download from "./assets/Download.svg"
import arrow from "./assets/Arrow.svg"

import github from "./assets/github-white.svg"
import resume from "./assets/Faik-Canberk-AYDIN.pdf"

function App() {
  const [checkbox, setCheckbox] = useState(false)
  const [counter, setCounter] = useState(0)
  const [science, setScience] = useState(true)
  const [deep, setDeep] = useState(false)
  const [data, setData] = useState(false)
  const [dev, setDev] = useState(false)
  const [smart, setSmart] = useState(false)
  const [agent, setAgent] = useState(false)

  const [medical, setMedical] = useState(true)
  const [gloria, setGloria] = useState(false)

  const activeSmart = e => {
    setSmart(true)
    setMedical(false)
    setGloria(false)
    setAgent(false)
  }
  const activeAgent = e => {
    setAgent(true)
    setMedical(false)
    setGloria(false)
    setSmart(false)
  }

  const activeMedical = e => {
    setSmart(false)
    setMedical(true)
    setGloria(false)
    setAgent(false)
  }

  const activeGloria = e => {
    setSmart(false)
    setMedical(false)
    setGloria(true)
    setAgent(false)
  }
  const activeScience = e => {
    setScience(true)
    setDeep(false)
    setData(false)
    setDev(false)
    setCounter(1)
  }
  const activeDeep = e => {
    setScience(false)
    setDeep(true)
    setData(false)
    setDev(false)
    setCounter(2)
  }
  const activeData = e => {
    setScience(false)
    setDeep(false)
    setData(true)
    setDev(false)
    setCounter(3)
  }
  const activeDev = e => {
    setScience(false)
    setDeep(false)
    setData(false)
    setDev(true)
    setCounter(4)
  }

  const skillRef = useRef()
  // const fixSection = e =>{
  //   if ()
  //   document.getElementById("container").style.overflow = "hidden"

  // }

  const handleScroll = e => {
    // console
    //   .log
    //skillRef.current.getBoundingClientRect().top
    // skillRef.current.offsetTop,
    // skillRef.current.clientHeight
    // // document.getElementById("skills").outerHeight(),
    // // document.getElementById("skills").height()
    // if (
    //   skillRef.current.getBoundingClientRect().top < 800 &&
    //   skillRef.current.getBoundingClientRect().top > -200
    // ) {
    //   setCounter(counter + 1)
    //   console.log(counter)
    //   document.getElementById("container").style.overflow = "hidden"
    //   if (counter < 4) {
    //     if (counter === 0) {
    //       setScience(true)
    //       setDeep(false)
    //     }
    //     if (counter === 1) {
    //       setScience(false)
    //       setDeep(true)
    //     }
    //     if (counter === 2) {
    //       setDeep(false)
    //       setData(true)
    //     }
    //     if (counter === 3) {
    //       setData(false)
    //       setDev(true)
    //     }
    //   } else {
    //     document.getElementById("container").style.overflow = "scroll"
    //   }
    // }
  }
  return (
    <div className="App">
      <div className="navContainer">
        <ul className="navBar">
          <ul>
            <li>
              <a href="#education" style={{ margin: "0px", top: "0px" }}>
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
              <a href={resume} download style={{ top: "0px" }}>
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
                href="#education"
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
              <a href={resume} download style={{ top: "0px" }}>
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

      <div className="container" id="container">
        <div className="Landing child">
          <div className="Name">Faik Aydin</div>
          <div className="Discription">
            <p className="landing_desc">
              <span className="gradient">Data Scientist</span> & Machine
              Learning Engineer | Active Research in
              <span className="gradient">Deep Learning</span>
            </p>
            <p>
              Whose Also Into <span className="gradient">Art & Design!</span>
            </p>

            <div className="button_div">
              <a style={{ marginRight: "0px", top: "0px" }} href="#education">
                <button className="scroll_button">More about me </button>
              </a>
            </div>
            <div className="arrow">
              <img src={arrow} alt="Scroll Down" />
            </div>
          </div>
        </div>
        <div className="Education child" id="education">
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
                  Research Thesis: Medical Multimodal Classification and
                  Detection Under Small Data Conditions.
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
                  <h4 className="right">
                    Field of specialization: Mechatronics
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="Experience child" id="experience">
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
                    Transformer deep learning architectures (such as BERT).
                    Mainly involved with model improvement and evaluation
                    methods.
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
                      This is my postgrad thesis association with Alfred
                      Hospital in Melbourne and Monash University. I combine a
                      1D Convolutional Neural Network Text classifier (using
                      doctor notes) and large deep neural networks for image
                      data to get a custom Multi Model in order to classify
                      various internal diseases.
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
            className="Skills child"
            id="skills"
            onWheel={() => setTimeout(handleScroll, 100)}
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
                <div className={science ? "line" : ""} />
              </div>
              <div
                className={deep ? "deep_header emphasis_header" : "deep_header"}
                onClick={activeDeep}
              >
                Deep Learning
                <div className={deep ? "line" : ""} />
              </div>
              <div
                className={data ? "data_header emphasis_header" : "data_header"}
                onClick={activeData}
              >
                Data
                <div className={data ? "line" : ""} />
              </div>
              <div
                className={dev ? "dev_header emphasis_header" : "dev_header"}
                onClick={activeDev}
              >
                Dev
                <div className={dev ? "line" : ""} />
              </div>
            </div>
            <div className="grid_table">
              <div className={deep ? "deep emphasis" : "deep"}>
                Deep Learning
              </div>
              <div className={data ? "sql emphasis" : "sql"}>SQL</div>
              <div className={dev ? "html emphasis" : "html"}>HTML</div>
              <div className={science ? "geo emphasis" : "geo"}>
                Geospatial Analytics
              </div>

              <div className={dev ? "git emphasis" : "git"}>git</div>
              <div className={science ? "python emphasis" : "python"}>
                Python
              </div>
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

          <div className="Projects child" id="projects">
            <div className="hard_header">
              <h2>Projects</h2>
            </div>
            <div className="edu_content">
              <div className="content_row">
                <div className="edu_time">
                  <h3
                    className={medical ? "left" : "left notActive"}
                    style={{ fontWeight: "700" }}
                    onClick={activeMedical}
                  >
                    Medical multimodaling with transfer learning
                  </h3>
                  <h3
                    className={agent ? "left" : "left notActive"}
                    style={{ fontWeight: "700" }}
                    onClick={activeAgent}
                  >
                    AGENT ASSIST
                  </h3>
                  <h3
                    className={gloria ? "left" : "left notActive"}
                    style={{ fontWeight: "700" }}
                    onClick={activeGloria}
                  >
                    GLORIA
                  </h3>
                  <h3
                    className={smart ? "left" : "left notActive"}
                    style={{ fontWeight: "700" }}
                    onClick={activeSmart}
                  >
                    SMART WINGS
                  </h3>
                </div>
                <div className="edu border">
                  <div className="dot" />

                  <div
                    className={medical ? "show" : "hidden"}
                    style={{ marginTop: "6px" }}
                  >
                    <h3 className="right">Project Definition:</h3>

                    <h4 className="right">
                      Creating a lung anomaly detector using limited data
                      sources leveraging transfer learning
                    </h4>

                    <h3 className="right" style={{ marginTop: "20px" }}>
                      Project Description:
                    </h3>

                    <h4 className="right">
                      This master's thesis research was about leveraging
                      transfer learning and seeing if we could make use of it at
                      The Alfred Hospital (Melbourne, VIC). For this, we made
                      use of imaging and NLP, using DenseNet trained on
                      ChestX-ray14 and one 1-D CNN text submodel with a
                      pre-trained GloVe embedding layer. Experimental results
                      show that our multimodal improves the accuracy of the
                      classification by 4% and 7% on average of 50 epochs,
                      compared to the individual text and image model,
                      respectively.
                    </h4>
                    <h3 className="right" style={{ marginTop: "20px" }}>
                      Contributions:
                    </h3>

                    <h4 className="right">
                      For Short Paper (with co-authors from Nvidia and Monash)
                      and sample notebooks:
                    </h4>
                    <h4 className="right">
                      <a
                        href="https://github.com/faikezra/medical-multimodal-with-transfer-learning"
                        style={{
                          color: "black",
                          textDecoration: "underline",
                          overflowWrap: "break-word"
                        }}
                      >
                        https://github.com/faikezra/medical-multimodal-with-transfer-learning
                      </a>
                    </h4>
                  </div>

                  <div className={agent ? "show" : "hidden"}>
                    <h3 className="right" style={{ marginTop: "0px" }}>
                      Project Definition:
                    </h3>

                    <h4 className="right">
                      An NLP Product that assists call agents
                    </h4>

                    <h3 className="right" style={{ marginTop: "20px" }}>
                      Project Description:
                    </h3>

                    <h4 className="right">
                      The most established deep learning project inside of
                      Telstra (Melbourne, Australia). It is ongoing research,
                      and also is being used and tested by Telstra call agents.
                      With the use of massive datasets from the chatlogs of
                      millions of Telstra calls, it is not only a challenge to
                      build and evaluate these models, but it also is a very
                      intense data engineering and pipeline problem
                    </h4>
                    <h3 className="right" style={{ marginTop: "20px" }}>
                      Contributions:
                    </h3>

                    <h4 className="right">
                      <li>
                        Integrated BERT into the Tensorflow/Hadoop ecosystem of
                        Agent Assist for entailment the entailment detection to
                        create negative datasets
                      </li>
                      <li>
                        Working with the skip-thought LSTM model to embed agent
                        responses
                      </li>
                      <li>
                        Experimenting with the performance of Multi-task
                        learning agents
                      </li>
                      <li>
                        Detecting canned responses within a large embedding
                        space.
                      </li>
                    </h4>
                    <h4 className="right">
                      To see my other relevant short work about BERT:
                    </h4>
                    <h4 className="right">
                      <a
                        href="https://github.com/faikezra/article-classification-with-transfer-learning"
                        style={{
                          color: "black",
                          textDecoration: "underline",
                          overflowWrap: "break-word"
                        }}
                      >
                        https://github.com/faikezra/article-classification-with-transfer-learning
                      </a>
                    </h4>
                  </div>

                  <div
                    className={gloria ? "show" : "hidden"}
                    style={{ marginTop: "12px" }}
                  >
                    <h3 className="right">Project Definition:</h3>

                    <h4 className="right">
                      Geospatial analytics for retail use
                    </h4>

                    <h3 className="right" style={{ marginTop: "20px" }}>
                      Project Description:
                    </h3>

                    <h4 className="right">
                      Determining the optimal retail mix for large building
                      precinct. GLORIA is an AI-powered tool for modeling a
                      precinct’s commercial ecosystem, that uses supply and
                      demand factors to recommend the highest and best uses for
                      retail space
                    </h4>
                    <h3 className="right" style={{ marginTop: "20px" }}>
                      Contributions:
                    </h3>

                    <h4 className="right">
                      Developing various deep learning models to impute missing
                      geospatial data in large datasets. Building an outlier
                      detection algorithm to identify areas that lack a certain
                      kind of retail store
                    </h4>
                  </div>
                  <div
                    className={smart ? "show" : "hidden"}
                    style={{ marginTop: "12px" }}
                  >
                    <h3 className="right">Project Definition:</h3>

                    <h4 className="right">
                      Wing design for long-range missiles which autonomously
                      reduces drag force during travel
                    </h4>

                    <h3 className="right" style={{ marginTop: "20px" }}>
                      Project Description:
                    </h3>

                    <h4 className="right">
                      A mechatronics project that uses various sensors on a
                      missile and makes realtime adjustments to the shape of the
                      wing and the camber angle to reduce drag force for fuel
                      efficiency and accuracy. The actuators are shape memory
                      alloys which contract and release with heat, generated
                      from the current which flows via PIC microcontrollers.
                      These algorithms that are modeled are programmed into the
                      PIC which controls the state of the current based on
                      realtime data on the missile
                    </h4>
                    <h3 className="right" style={{ marginTop: "20px" }}>
                      Contributions:
                    </h3>

                    <h4 className="right">
                      Worked in the avionics department as a mechatronics
                      engineer (research, part-time) at Roketsan. Mainly
                      contributed to algorithm development and testing &
                      integration of PIC logic into the experimental actuators
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Contact" id="contact">
            <div className="hard_header emphasis">
              <h2>Contact</h2>
            </div>
            <div className="contact_content">
              <div className="content_row">
                <div className="contact_left">
                  <h3 className="contact_name">Faik Canberk Aydin</h3>
                  <h4 className="contact_name">Data Scientist</h4>
                </div>
                <div className="contact_right">
                  <h4 className="contact_detail">Email:</h4>
                  <h4 className="contact_detail">
                    <span className="contact_detail">
                      faikcanberkadyin@gmail.com
                    </span>
                  </h4>
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
    </div>
  )
}

export default App
