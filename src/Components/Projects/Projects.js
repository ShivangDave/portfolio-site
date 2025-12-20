import React from 'react';

const projects = require('./static/projects.json');

export default () => {

  const projectList = projects['projects'] || [];

  return (
    <section id="projects" className={'projects-container'}>
      <div className={'section-header'}>
        <h2 className={'section-title'}>Featured Projects</h2>
        <p className={'section-subtitle'}>
          Building innovative solutions with cutting-edge technologies
        </p>
      </div>
      
      <div className={'projects-grid'}>
        {projectList.map((project, idx) => (
          <div key={idx} className={'project-card'}>
            <div className={'project-image'}>
              {project.img ? (
                <img src={project.img} alt={project.title} />
              ) : (
                <span role="img" aria-label="project">📱</span>
              )}
            </div>
            <div className={'project-info'}>
              <h3 className={'project-title'}>{project.title}</h3>
              <p className={'project-desc'}>
                {(project.desc && project.desc.content) ? project.desc.content : 'Innovative project built with modern technologies'}
              </p>
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
    </section>
  )
}
