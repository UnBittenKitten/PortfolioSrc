import './Projects.css'

function Projects() {
  return (
    <>
      <h1 className='title-decorator'>Projects</h1>

      <ul className="projects-list">
        <li className="project-item">
          <a target='_about' className='project-link' href='https://github.com/UnBittenKitten/cnc'>
            <div className="project-image-wrapper">
              <img className="project-image" src="ss_project_cnc.jpg"></img>
            </div>
            <div className="project-info">
              <h3 className="project-title">CNC</h3>
              <p className="project-description">CNC is a numeric base converter console application.</p>
            </div>
          </a>
        </li>
        <li className="project-item">
          <a target='_about' className='project-link' href='https://github.com/UnBittenKitten/UnBittenKitten.github.io'>
            <div className="project-image-wrapper">
              <img className="project-image" src="ss_project_portfolio.jpg"></img>
            </div>
            <div className="project-info">
              <h3 className="project-title">This Portfolio</h3>
              <p className="project-description">The source code of the website you are viewing.</p>
            </div>
          </a>
        </li>
        
      </ul>
    </>
  )
}

export default Projects