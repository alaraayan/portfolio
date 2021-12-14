// import flower1 from '../assets/images/flower1.gif'

export default function Skills() {
  return (
    <>
      <div className="component-container light" id="skills"> 
        <div className="separate">
          <h1 className="title-font">Skills &amp; Tools</h1>
          <div className="skills-container">
            <div className="skills languages">
              
              <h2 className="skills-header">Skills</h2>
              <ul className="skills-list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Sass</li>
                <li>Javascript</li>
                <li>React.js</li>
                <li>Node.js + Express.js</li>
                <li>MongoDB + Mongoose</li>
                <li>Python + Django</li>
                <li>PostgreSQL</li>
                <li>Git</li>
                <li>GitHub</li>
                
              </ul>
            </div>
            <div className="skills tools">
              <h2 className="skills-header">Tools</h2>
              <ul className="skills-list">
                <li>VS Code</li>
                <li>Insomnia</li>
                <li>Slack</li>
                <li>Trello</li>
                <li>Asana</li>
                <li>Figma</li>
                <li>Photoshop</li>
                
              </ul>
              
            </div>
            <div className="skills studying">
              <h2 className="skills-header">Studying</h2>
              <ul className="skills-list">
                <li>TypeScript</li>
                <li>Java</li>
              </ul>
            </div>
            {/* <img src={flower1} className="flower"></img> */}
          </div>
          
          

        </div>
      </div>
      <hr className="section-break"/>
    </>
  )
}