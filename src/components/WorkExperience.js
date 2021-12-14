
export default function WorkExperience() {
  return (
    <>
      <div className="component-container light" id="experience"> 
        <div className="column-flex-container experience-section">
          <h1 className="title-font section-title">Previous Experience</h1>
          <div className="timeline">
            <div className="experience-container left">
              {/* <div className="date">date-field</div> */}
              <div className="content">
                <h2>Marketing Coordinator</h2>
                <h6>Michael Page, Jan 2018 - Dec 2019</h6>
                <p>
        I was in charge of all marketing and communication activities for both Michael Page and Page Executive brands, from strategy and budget planning to execution and reporting. Reported directly to the Sr. Regional Marketing Manager in Spain and worked as part of the regional team accross five countries.  
                </p>
              </div>
            </div>
            <div className="experience-container right">
              <div className="content">
                <h2>Marketing Assistant</h2>
                <h6>Michael Page, Jul 2015 - Dec 2017</h6>
                <p>
        During my time in this role I was lucky enough to be given ownership of two major projects: The launch of the new company training platform and the new intranet. I also assisted with the new website launch and coordinated with the team based in Barcelona.
                </p>
              </div>
            </div>
            <div className="experience-container left">
              <div className="content cursor linkedin-redirect-text">
                <a href="https://www.linkedin.com/in/alaraayan/" target="_blank" rel="noreferrer" ><p>Please click here for the additional career information available on LinkedIn</p></a>
                
              </div>
            </div>
            {/* <div className="experience-container right">
              <div className="content">
                <h2>Marketing Intern</h2>
                <p>
                  Pegasus
                </p>
              </div>
            </div> */}
          </div>
        </div>
      
      </div>
      <hr className="section-break"/>
    </>
  )
}