import React from 'react'

import blobLeft from '../assets/images/blob1.png'
import blobCenter from '../assets/images/blob2.png'
import blobRight from '../assets/images/blob3.png'
import surf from '../assets/images/surf.png'
import mixer from '../assets/images/mixer.png'
import pottery from '../assets/images/pottery.png'

export default function About() {
  const [isLeftFlipped, setIsLeftFlipped] = React.useState(false)
  const [isCenterFlipped, setIsCenterFlipped] = React.useState(false)
  const [isRightFlipped, setIsRightFlipped] = React.useState(false)

  const handleLeftClick = () => {
    setIsLeftFlipped(!isLeftFlipped)
  }
  const handleCenterClick = () => {
    setIsCenterFlipped(!isCenterFlipped)
  }
  const handleRightClick = () => {
    setIsRightFlipped(!isRightFlipped)
  }
  
  return (
    <>
      <div className="component-container dark" id="about"> 
        <div className="column-flex-container separated-columns">
          <div className="row-flex-container flex-row-centered">
            <h1 className="title-font section-title">Hi!<br/> I'm Alara.</h1>
            <div className="info-text">
              <p>I recently graduated from the Software Engineering Immersive at General Assembly and continue to work there as a TA. Previously, I have built a career of 4 years in marketing, working in an international team.</p> 
              <br/>
              <p>In late 2019, I took a 6-month break to forge myself a new career. A pandemic and countless sourdough breads later, always being interested in web design, I started to teach myself HTML and CSS. It quickly became clear VSCode was where I belonged. I then enrolled in the General Assembly SEI bootcamp. 13 wonderful weeks later, I am now looking to build on my skills within an engaging work environment where I can root and grow as a developer.</p>
            </div>
          </div>
          <div className="row-flex-container">
            <div className="blob-container" onClick={handleLeftClick}>
              <div className="blob-inner">
                <img className={`blob blob-front ${isLeftFlipped ? 'no-show' : ''}`} src={surf}></img>
                <img className={`blob blob-back ${!isLeftFlipped ? 'no-show' : ''}`} src={blobLeft}></img>
                <p className={`centered-blob-text left-blob ${!isLeftFlipped ? 'no-show' : ''}`}> I love being in the open water and although I've tried most water sports, nothing beats windsurfing.</p>
              </div>
            </div>
            <div className="blob-container" value="center" onClick={handleCenterClick}>
              <div className="blob-inner">
                <img className={`blob blob-front ${isCenterFlipped ? 'no-show' : ''}`} src={pottery}></img>
                <img className={`blob blob-back ${!isCenterFlipped ? 'no-show' : ''}`} src={blobCenter}></img>
                <p className={`centered-blob-text ${!isCenterFlipped ? 'no-show' : ''}`}> Trained in both the  wheel and hand-building, I really enjoy drinking my my morning coffee out of mugs I've made myself.</p>
              </div>
            </div>
            <div className="blob-container" value="right" onClick={handleRightClick}>
              <div className="blob-inner">
                <img className={`blob blob-front ${isRightFlipped ? 'no-show' : ''}`} src={mixer}></img>
                <img className={`blob blob-back ${!isRightFlipped ? 'no-show' : ''}`} src={blobRight}></img>
                <p className={`centered-blob-text right-blob ${!isRightFlipped ? 'no-show' : ''}`}>I love how baking is both an intrinsic and extremely strict process. My specialty is brioche burger buns.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="section-break-left"/>
    </>
  )
}