import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {InteractiveForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';

import skills from './static/skills';
import ResumeBtn from './ResumeBtn';

export default ({ setSection }) => {

  const [ref,inView] = useInView({ threshold: 0.6 });

  useEffect(() => {
    if(inView){
      console.log('this is skills')
      setSection(1)
    }
  },[inView,setSection])

  const isBigger = (val) => {
    let returnVal = false
    if(val === 'Software Engineer'){
      returnVal = true
    }else if(val === 'Educator'){
      returnVal = true
    }else if(val === 'Full Stack (Web)'){
      returnVal = true
    }
    return returnVal
  }

  return (
    <div ref={ref} id={'skills'} className={'skills-container'}>
      <div className={'graph-container'}>
        <InteractiveForceGraph
          simulationOptions={{
            strength: {
              charge: -500,
              collide: 8
            },
            animate: true,
            alpha: 0.01,
            radiusMargin: 0,
            height: '800',
            width: '800'
          }}
        >
          {
            skills.nodes.map(node =>
              <ForceGraphNode
                key={node.id}
                node={{ id: node.id }}
                showLabel
                r={isBigger(node.id) ? 45 : 20}
                strokeWidth={4}
                fill="rgb(253,177,177,1)"
              />
            )
          }
          {
            skills.links.map((link,index) =>
              <ForceGraphLink
                key={index}
                fill={'white'}
                strokeWidth={2}
                link={{ source: link.source, target: link.target }}
              />
            )
          }
        </InteractiveForceGraph>
      </div>

      <ResumeBtn />
    </div>
  )
}
