import React from 'react';

import AvatarContainer from './subcomponents/AvatarContainer';
import IntroText from './subcomponents/IntroText';
import ScrollDownBtn from './subcomponents/ScrollDownBtn';

export default (props) => {

  return (
    <div className={'intro-container'}>
      <AvatarContainer position={props.position} />
      <IntroText />
      <ScrollDownBtn toSkills={props.toSkills} />
    </div>
  )
}
