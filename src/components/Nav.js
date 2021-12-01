import React from 'react'
import { Link } from 'react-scroll'
// import { Cross as Hamburger } from 'hamburger-react'

export default function Nav() {
  const [hasScrolled, setHasScrolled] = React.useState(false)

  React.useEffect(()=>{
    document.addEventListener('scroll', e => {
      const scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 700){
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    })
  },[])
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className="navbar" style={{ display: !hasScrolled ? 'none' : '' }}>

      <div className="navbar-flex-container">
        <div className="title-font medium-title cursor" onClick={scrollToTop}>ALARA AYAN</div>
        <div className="navbar-links-container ">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="navbar-link cursor"
          >About</Link>
          {/* <p>|</p> */}
          <Link
            activeClass="active"
            to="languages"
            spy={true}
            smooth={true}
            duration={500}
            className="navbar-link cursor"
          >Languages</Link>
          {/* <p>|</p> */}
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="navbar-link cursor"
          >Projects</Link>
          {/* <p>|</p> */}
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            className="navbar-link cursor"
          >Previous Experience</Link>
          {/* <p>|</p> */}
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="navbar-link cursor"
          >Contact</Link>
        </div>
      </div>
      <span className="material-icons navbar-arrow cursor" onClick={scrollToTop}>arrow_upward</span>
    </div>
  )
}