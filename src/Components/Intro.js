import React from 'react';
import { useInView } from 'react-intersection-observer';

import AvatarContainer from './subcomponents/AvatarContainer';
import IntroText from './subcomponents/IntroText';
import ScrollDownBtn from './subcomponents/ScrollDownBtn';

export default (props) => {

  const [ref,inView] = useInView({ threshold: 0.6 });

  if(inView){
    props.setLocation(0)
  }

  return (
    <div ref={ref} className={'intro-container'}>
      <AvatarContainer location={props.location} />
      <IntroText />
      <ScrollDownBtn toSkills={props.toSkills} />
    </div>
  )
}
