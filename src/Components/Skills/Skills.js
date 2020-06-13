import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import HighlightedSkills from './HighlightedSkills';
import ResumeBtn from './ResumeBtn';

export default ({ setSection }) => {

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

  const [ref,inView] = useInView({ threshold: 0.6 });

  useEffect(() => {
    if(inView){
      console.log('this is skills')
      setSection(1)
    }
  },[inView,setSection])

  return (
    <div ref={ref} id={'skills'} className={'skills-container'}>
        <HighlightedSkills key={'large'} arr={highlightedSkills} />
        <HighlightedSkills key={'small'} arr={language} val={percentage} />
        <ResumeBtn />
    </div>
  )
}
