import React from 'react';

const projects = require('./static/projects.json');

export default () => {

  const projectList = projects['projects'] || [];

  return (
    <section id="projects" className={'projects-container'}>
      <div className={'section-header'}>
        <h2 className={'section-title'}>Projects</h2>
        <p className={'section-subtitle'}>
          Building innovative solutions with cutting-edge technologies
        </p>
      </div>
      
      <div className={'projects-grid'}>
        {projectList.map((project, idx) => (
          <div key={idx} className={'project-card'}>
            <div className={'project-image'}>
              {project.img ? (
                <img 
                  src={project.img} 
                  alt={project.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span role="img" aria-label="project">📱</span>';
                  }}
                />
              ) : (
                <span role="img" aria-label="project">📱</span>
              )}
            </div>
            <div className={'project-info'}>
              <h3 className={'project-title'}>{project.title}</h3>
              {(project.desc && project.desc.url) ? (
                <a href={project.desc.url} target="_blank" rel="noopener noreferrer" className={'project-link'}>
                  View Project →
                </a>
              ) : (
                <span className={'project-link disabled'} aria-disabled="true">View Project →</span>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className={'projects-more'}>
        <a href="https://github.com/ShivangDave" target="_blank" rel="noopener noreferrer" className={'btn btn-primary'}>
          View More on GitHub →
        </a>
      </div>
    </section>
  )
}
