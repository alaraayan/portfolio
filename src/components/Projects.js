import Carousel from 'react-material-ui-carousel'
import { Card, Button } from '@mui/material'
import { styled } from '@mui/styles'


import zenith from '../assets/images/zenith.png'
import moodflix from '../assets/images/moodflix.png'
import trivial from '../assets/images/trivial.png'
import pacMan from '../assets/images/pacman.png'
import gitHub from '../assets/images/github.png'

export default function Projects() {
  
  const projects = [
    {
      name: 'Project-4: Zenith',
      image: zenith,
      technologies: ['devicon-python-plain', 'devicon-django-plain', 'devicon-postgresql-plain', 'devicon-javascript-plain','devicon-react-original-wordmark',  'devicon-sass-original','devicon-html5-plain-wordmark', 'devicon-css3-plain-wordmark', 'devicon-git-plain','devicon-heroku-original'],
      description: 'Use agile methodology to run 4-week personal growth and development sprints utilising a personal dashboard. Full stack app. 10-day sprint, 3-person team.',
      links: {
        demo: 'https://ga-zenith.netlify.app',
        gitHub: 'https://github.com/alaraayan/sei-project-4-frontend',
      },
    },
    {
      name: 'Project-3: Moodflix',
      image: moodflix,
      technologies: ['devicon-javascript-plain', 'devicon-nodejs-plain', 'devicon-express-original', 'devicon-mongodb-plain-wordmark', 'devicon-react-original-wordmark', 'devicon-sass-original','devicon-html5-plain-wordmark', 'devicon-css3-plain-wordmark', 'devicon-git-plain', 'devicon-heroku-original'],
      description: 'A new take on Netflix where you can choose movies based on your current mood. Full stack MERN app. 10-day sprint, 3-person team.',
      links: {
        demo: 'https://ga-moodflix.netlify.app',
        gitHub: 'https://github.com/alaraayan/sei-project-3-frontend',
      },
    },
    {
      name: 'Project-2: Trivial Pursuit',
      image: trivial,
      technologies: ['devicon-react-original-wordmark', 'devicon-javascript-plain', 'devicon-sass-original','devicon-html5-plain-wordmark', 'devicon-css3-plain-wordmark', 'devicon-git-plain'],
      description: 'A multiple-choice quiz generator that consumes a public API. 28-hour hackathon, pair programming.',
      links: {
        demo: 'https://trivialpursuit-ga.netlify.app',
        gitHub: 'https://github.com/alaraayan/sei-project-2',
      },
    },
    {
      name: 'Project-1: Pac-Man',
      image: pacMan,
      technologies: ['devicon-javascript-plain', 'devicon-html5-plain-wordmark', 'devicon-css3-plain-wordmark', 'devicon-git-plain'],
      description: 'The classic arcade game built using HTML, CSS and Vanilla JavaScript. 1-week solo project.',
      links: {
        demo: 'https://github.com/alaraayan/sei-project-1',
        gitHub: 'https://alaraayan.github.io/sei-project-1/',
      },
    }
  ]
  
  return (
    <>
      <div className="component-container dark" id="projects"> 
        <div className="column-flex-container">
          <h1 className="title-font">Projects</h1>
          <p>Our learning in the General Assembly Software Engineering Immersive was consolidated with four projects:</p>
          <Carousel 
            autoPlay={false}
            animation="slide"
            navButtonsAlwaysVisible={true}
            navButtonsProps={{     
              style: {
                backgroundColor: '#F8F8F8',
                color: '#1D2226',
              } } 
            }
            indicators={false}
            className="project-carousel"

          >
            {
              projects.map( (project, index) => {
                return (
                  <ProjectCard key={index} className="project-card">
                    
                    <h2 className="project-name">{project.name}</h2>
                    <img src={project.image} className="project-img"></img>
                    <div className="row-flex-container">
                      { project.technologies.map((tech,index) => (
                        <div className="icon-item" key={index}><i className={tech}></i></div>
                      ))}
                    </div>
                    <h3 className="project-desc">{project.description}</h3>
                    <div>
                      <Button className="CheckButton">
                        <a href={project.links.demo} target="_blank" rel="noreferrer" className="cursor">live website</a>
                      </Button>
                      <Button className="CheckButton">
                        <a href={project.links.gitHub} target="_blank" rel="noreferrer" className="cursor"><img src={gitHub} alt="github icon" className="icon"></img>GitHub</a>
                      </Button>
                    </div>
                  </ProjectCard> )
              })
            }
          </Carousel>
        </div>
      </div>

      
      <hr className="section-break-left"/>
    </>
  )
}

const ProjectCard = styled(Card)({  
  backgroundColor: '#1D2226',
})

