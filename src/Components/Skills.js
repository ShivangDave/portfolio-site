import React from 'react';
import { useInView } from 'react-intersection-observer'
import { isMobileOnly } from 'react-device-detect';

import HighlightedSkills from './subcomponents/HighlightedSkills';
import ResumeBtn from './subcomponents/ResumeBtn';

export default (props) => {

  const language = [
    'Ruby',
    'Ruby on Rails',
    'Python',
    'JavaScript',
    'ReactJS',
    'Redux',
    'Node',
    'React Native',
    'HTML',
    'CSS',
    'Swift',
    'Git',
    'SQL',
    'Postgres',
    'MongoDB',
    'AWS',
    'Google Cloud',
    'Heroku',
    'Digital Ocean',
    'Docker',
    'KVM',
    'Framer Motion'
  ]
  const percentage = [
    95,
    94,
    80,
    97,
    97,
    90,
    92,
    85,
    92,
    90,
    80,
    95,
    90,
    90,
    83,
    84,
    84,
    70,
    80,
    92,
    70,
    80
  ]

  const highlightedSkills = [
    'Full Stack',
    'Mobile Apps',
    'Educator'
  ]

  const threshold = isMobileOnly ? { threshold: 0.2 } : { threshold: 1 }
  const [ref,inView] = useInView(threshold);

  if(inView){
    props.setLocation(1)
  }

  return (
    <div ref={ref} id={'skills'} className={'skills-container'}>
        <HighlightedSkills arr={highlightedSkills} location={props.location}/>
        <HighlightedSkills arr={language} val={percentage} location={props.location} />
        <ResumeBtn position={props.position} />
    </div>
  )
}
