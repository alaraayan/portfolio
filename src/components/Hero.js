import { Link } from 'react-scroll'

import alara from '../assets/images/alara.png'
import locationPin from '../assets/images/pin.png'
import gitHub from '../assets/images/github.png'
import linkedIn from '../assets/images/linkedin.png'

export default function Hero() {

  return (
    <>
      <div className="component-container light">
        <div className="column-flex-container">
          <div className="title-container">
            <h1 className="caps title-font">alara ayan</h1>
            <h4 className="caps title-font medium-title">junior web developer</h4>
          </div>
          <img src={alara} alt="alara icon" id="alara"></img>
        </div>
        <div className="column-flex-container">
          <p className="hero-text">Recent gradute of the General Assembly Software Engineering Immersive with 4 years marketing experience. Passionate about building full stack apps and everything React.js. Looking to build on my skills within an engaging work environment where I can root and grow as a developer.</p>
          <div className="grid-flex-container">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              // offset={-70}
              duration={500}
              className="button hero-button cursor"
            >About Me</Link>
            <Link
              activeClass="active"
              to="languages"
              spy={true}
              smooth={true}
              duration={500}
              className="button hero-button cursor"
            >Languages</Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="button hero-button cursor"
            >Projects</Link>
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              className="button hero-button cursor"
            >Previous Experience</Link>
            {/* <button type="button" className="button hero-button">Contact</button> */}
          </div>
          <hr className="break"/>
          <div className="icons row-flex-container">
            <a href="https://github.com/alaraayan" target="_blank" rel="noreferrer" className="contact-links cursor"><img src={gitHub} alt="github icon" className="icon"></img></a>

            <a href="https://www.linkedin.com/in/alaraayan/" target="_blank" rel="noreferrer" className="contact-links" ><img src={linkedIn} alt="linkedin icon" className="icon cursor"></img></a>
            <div className="location-link-container "><img src={locationPin} alt="location pin icon" className="icon"></img>LONDON, N8</div>
          </div>
        </div>
        {/* <hr className="section-break-horizontal"/> */}
      </div>
      <hr className="section-break"/>
    </>
  )
}