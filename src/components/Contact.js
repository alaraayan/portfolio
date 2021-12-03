import locationPin from '../assets/images/pin.png'
import gitHub from '../assets/images/github.png'
import linkedIn from '../assets/images/linkedin.png'

export default function Contact() {
  return (
    <>
      <div className="component-container dark " id="contact"> 
        <div className="row-flex-container flex-row-centered">
          <h1 className="title-font section-title">Contact</h1>
          <div className="contact-info-container">
            <div className="icons row-flex-container">
              <a href="https://github.com/alaraayan" target="_blank" rel="noreferrer" className="contact-links cursor"><img src={gitHub} alt="github icon" className="icon icon-white"></img><p>github.com/alaraayan</p></a>

              <a href="https://www.linkedin.com/in/alaraayan/" target="_blank" rel="noreferrer" className="contact-links" ><img src={linkedIn} alt="linkedin icon" className="icon icon-white"></img></a>
              <div className="location-link-container "><img src={locationPin} alt="location pin icon" className="icon icon-white"></img>LONDON, N8</div>
            </div>
          </div>
        </div>
      </div>
      {/* <hr className="section-break-left footer-break"/> */}
    </>
  )

}