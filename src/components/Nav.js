import React from 'react'
import { Link } from 'react-scroll'
// import { Cross as Hamburger } from 'hamburger-react'

export default function Nav() {
  

  return (
    <div className="navbar">

      <div className="navbar-flex-container">
        <div className="title-font medium-title">ALARA AYAN</div>
        <div className="navbar-links-container ">
          {/* <div className="menu-items-end" onClick={handleSideBar}>
          <Hamburger toggled={sidebarShow} toggle={setSidebarShow} />
        </div> */}
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="navbar-link"
          >About</Link>
          {/* <p>|</p> */}
          <Link
            activeClass="active"
            to="languages"
            spy={true}
            smooth={true}
            duration={500}
            className="navbar-link"
          >Languages</Link>
          {/* <p>|</p> */}
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="navbar-link"
          >Projects</Link>
          {/* <p>|</p> */}
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            className="navbar-link"
          >Previous Experience</Link>
          {/* <p>|</p> */}
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="navbar-link"
          >Contact</Link>
        </div>
      </div>

    </div>
  )
}