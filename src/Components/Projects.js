import React, { useState, useEffect } from 'react';
import ProjectCard from './subcomponents/ProjectCard';

import { useInView } from 'react-intersection-observer';
import { isMobileOnly } from 'react-device-detect';

const projects = require('../static/projects.json');

export default (props) => {

  const threshold = isMobileOnly ? { threshold: 0.2 } : { threshold: 0.4 }
  const [ref,inView] = useInView(threshold);

  const [allProjects,setProjects] = useState([]);

  useEffect(() => {
    setProjects(projects['projects'])
  },[])

  if(inView){
    props.setLocation(2)
  }

  return (
    <div ref={ref} className={'projects-container'}>
      {
        allProjects.map((project,index) => {
          return <ProjectCard index={index} location={props.location} project={project} />
        })
      }
    </div>
  )
}
