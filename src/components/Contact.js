// import locationPin from '../assets/images/pin.png'
// import gitHub from '../assets/images/github.png'
// import linkedIn from '../assets/images/linkedin.png'

export default function Contact() {
  return (
    <>
      <div className="component-container dark " id="contact"> 
        <div className="row-flex-container flex-row-centered">
          <h1 className="title-font section-title">Contact</h1>
          <div className="contact-icons column-flex-container">    
            <a href="https://github.com/alaraayan" target="_blank" rel="noreferrer" className="contact-links"><i className="devicon-github-original contact-icon"></i><p>github.com/alaraayan</p></a>

            <a href="https://www.linkedin.com/in/alaraayan/" target="_blank" rel="noreferrer" className="contact-links" ><i className="devicon-linkedin-plain contact-icon"></i><p>linkedin.com/in/alaraayan</p></a>

            {/* <div className="location-link-container "></div> */}
          </div>
        </div>
      </div>

      {/* <hr className="section-break-left footer-break"/> */}
    </>
  )

}