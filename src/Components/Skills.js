import React from 'react';

import HighlightedSkills from './subcomponents/HighlightedSkills';
import ResumeBtn from './subcomponents/ResumeBtn';

export default () => {

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


  return (
    <div id={'skills'} className={'skills-container'}>
        <HighlightedSkills arr={highlightedSkills} />
        <HighlightedSkills arr={language} val={percentage} />
        <ResumeBtn />
    </div>
  )
}
