import React from 'react';

import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import Posts from './Posts';
import Gallery from './Gallery';
import Footer from './Footer';

export default class Main extends React.Component {

  render(){
    return (
      <div className={'main-container'}>
        <Intro />
        <Skills />
        <Projects />
        <Posts />
        <Gallery />
        <Footer />
      </div>
    );
  }
}
