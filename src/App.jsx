import React from 'react'
import Button from "./components/Button"
import linkImg from "./assets/linkedin.png"
import mailImg from "./assets/Mail.png"
import cardImg from "./assets/card-pic.jpg"
import twitter from "./assets/twitter.png"
import facebook from "./assets/facebook.png"
import instagram from "./assets/instagram.png"
import github from "./assets/github.png"
import './App.css'

function App() {

  return (
    <div className="card--container">
      <div className="inner-container">
        <img src={cardImg} className="profile-pic"/>
        <div className="profile-info">
          <p className="profile-name">Jaswant Singh</p>
          <p className="profile-role">Full Stack Developer</p>
          <p className="profile-link">Portfolio Link</p>
        </div>
        <div className="btn-container">
          <Button img={linkImg} title={"LinkedIn"} background={"#5093E2"} fontColor={"White"}/>
          <Button img={mailImg} title={"Email"} background={"white"} fontColor={"black"}/>
        </div>
        <div className="about-container">
          <h3 className="about-text">About</h3>
          <p className="about-desc">I am a full stack developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
        <div className="about-container">
          <h3 className="about-text">Interests</h3>
          <p className="about-desc">Travelling. Music. Reader. Internet fanatic. Coding cool stuff. football geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
        <footer class ="footer-container">
          <div className="img-container">
            <img src={twitter} className="footer-img"/>
            <img src={facebook} className="footer-img"/>
            <img src={instagram} className="footer-img"/>
            <img src={github} className="footer-img"/>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
