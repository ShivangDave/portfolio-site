import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

import { useInView } from 'react-intersection-observer';

const projects = require('./static/projects.json');

export default ({ setSection }) => {

  const [allProjects, setProjects] = useState([]);
  const [ref,inView] = useInView({ threshold: 0.6 });

  const [showBackground,setShowBackground] = useState(null);

  useEffect(() => {
    if(inView){
      setProjects(projects['projects'])
      setSection(2)
      console.log('this is projects')
    }
  },[inView,setSection])

  return (
    <>
      <span className={'project-hint'}> hint: cards can be dragged around. </span>
      <div ref={ref} className={'projects-container'}>
        {
          allProjects.map((project,index) => {
            return <ProjectCard
                  showBackground={showBackground}
                  setShowBackground={setShowBackground}
                  key={index} index={index} project={project}
                />
          })
        }
      </div>
    </>
  )
}
