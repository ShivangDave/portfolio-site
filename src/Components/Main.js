import React from 'react';

import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import Posts from './Posts';
import Gallery from './Gallery';
import Footer from './Footer';

import { animateScroll as scroll } from 'react-scroll';


export default class Main extends React.Component {

  state = {
    showBackToTop: false
  }

  handleToTop = (decide) => {
    this.setState({ showBackToTop: decide })
  }

  showBackToTop = () => {
    return this.state.showBackToTop
      ? <button onClick={() => scroll.scrollToTop()} className={'takemetothetop'}> to the top </button>
        : null
  }

  render(){
    return (
      <div ref={this.container} className={'main-container'}>
        <Intro handleToTop={this.handleToTop} />
        { this.showBackToTop() }
        <Skills />
        <Projects />
        <Posts />
        <Gallery />
        <Footer />
      </div>
    );
  }
}
