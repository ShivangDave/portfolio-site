import React from 'react';

import AvatarContainer from './subcomponents/AvatarContainer';
import IntroText from './subcomponents/IntroText';
import ScrollDownBtn from './subcomponents/ScrollDownBtn';

export default class Intro extends React.Component {

  render(){
    return (
      <div className={'intro-container'}>
        <AvatarContainer />
        <IntroText />
        <ScrollDownBtn toSkills={this.props.toSkills} />
      </div>
    )
  }
}
