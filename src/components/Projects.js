import Carousel from 'react-material-ui-carousel'
import { Card, Button } from '@mui/material'
import { styled } from '@mui/styles'


import zenith from '../assets/images/zenith.png'
import moodflix from '../assets/images/moodflix.png'
import trivial from '../assets/images/trivial.png'
import pacMan from '../assets/images/pacman.png'
import todo from '../assets/images/todo.png'

export default function Projects() {
  
  const projects = [
    {
      name: 'Side Project: To-Do App',
      image: todo,
      technologies: ['devicon-python-plain', 'devicon-django-plain', 'devicon-postgresql-plain', 'devicon-javascript-plain','devicon-react-original-wordmark',  'devicon-sass-original','devicon-html5-plain-wordmark', 'devicon-css3-plain-wordmark', 'devicon-git-plain','devicon-heroku-original'],
      description: 'Star Wars themed to-do list app allowing the user to create, edit and delete items from their current to-do list or save them for later.',
      links: {
        demo: 'https://todo-app-sw.netlify.app',
        gitHub: 'https://github.com/alaraayan/todo-frontend',
      },
    },
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
        demo: 'https://alaraayan.github.io/sei-project-1/',
        gitHub: 'https://github.com/alaraayan/sei-project-1',
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
                backgroundColor: '#1D2226',
                color: '#F8F8F8',
                margin: '5px',
              } } 
            }
            indicators={false}
            className="project-carousel"

          >
            {
              projects.map( (project, index) => {
                return (
                  <ProjectCard key={index} className="project-card">
                    
                    <h2 className="project-name medium-title">{project.name}</h2>
                    <img src={project.image} className="project-img"></img>
                    <div className="row-flex-container tech-icon-container">
                      { project.technologies.map((tech,index) => (
                        <div className="icon-item icon" key={index}><i className={tech}></i></div>
                      ))}
                    </div>
                    <h3 className="project-desc">{project.description}</h3>
                    <div className="project-button-container">
                      <Button className="CheckButton">
                        <a href={project.links.demo} target="_blank" rel="noreferrer" className="cursor demo-link">see the website</a>
                      </Button>
                      <Button className="CheckButton">
                        <a href={project.links.gitHub} target="_blank" rel="noreferrer" className="cursor repo-link"><i className="devicon-github-original"></i> see the code</a>
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

