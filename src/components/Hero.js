import { Link } from 'react-scroll'

import alara from '../assets/images/alara.png'
import locationPin from '../assets/images/pin.png'
import gitHub from '../assets/images/github.png'
import linkedIn from '../assets/images/linkedin.png'

export default function Hero() {

  return (
    <div className="component-container light">
      <div className="column-flex-container">
        <div className="title-container">
          <h1 className="caps">alara ayan</h1>
          <h4 className="caps">junior web developer</h4>
        </div>
        <img src={alara} alt="alara icon"></img>
      </div>
      <div className="column-flex-container">
        <p className="hero-text">Recent gradute of the General Assembly Software Engineering Immersive. Passionate about building full stack apps and everything React.js. Looking to build on my skills within an engaging work environment where I can root and grow as a developer.</p>
        {/* <p className="hero-text">I make ceramics, bake bread and am a dog person.</p> */}
        <div className="grid-flex-container">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            // offset={-70}
            duration={500}
            className="button hero-button"
          >About Me</Link>
          <Link
            activeClass="active"
            to="languages"
            spy={true}
            smooth={true}
            duration={500}
            className="button hero-button"
          >Languages</Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="button hero-button"
          >Projects</Link>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            className="button hero-button"
          >Previous Experience</Link>
          {/* <button type="button" className="button hero-button">Contact</button> */}
        </div>
        <hr className="break"></hr>
        <div className="icons row-flex-container">
          <img src={gitHub} alt="github icon" className="icon"></img>
          <img src={linkedIn} alt="linkedin icon" className="icon"></img>
          <img src={locationPin} alt="location pin icon" className="icon"></img>
        </div>
      </div>
    </div>
  )
}