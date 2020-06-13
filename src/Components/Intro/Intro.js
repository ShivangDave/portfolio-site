import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import AvatarContainer from './AvatarContainer';
import IntroText from './IntroText';
import ScrollDownBtn from './ScrollDownBtn';

export default ({ setSection, toSkills}) => {

  const [ref,inView] = useInView({ threshold: 0.6 });

  useEffect(() => {
    if(inView){
      setSection(0)
      console.log('this is intro.')
    }
  },[inView,setSection])

  return (
    <div ref={ref} className={'intro-container'}>
      <AvatarContainer />
      <IntroText />
      <ScrollDownBtn toSkills={toSkills} />
    </div>
  )
}
