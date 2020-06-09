import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'

const projects = require('../static/projects.json');

export default (props) => {

  const [ref,inView] = useInView({ threshold: 0.6 });

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
        allProjects.map((project) => {
          return (<span> Coming Soon </span>)
        })
      }
    </div>
  )
}
