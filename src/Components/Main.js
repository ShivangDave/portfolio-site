import React from 'react';

import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import Posts from './Posts';
import Gallery from './Gallery';
import Footer from './Footer';

import TopButton from './subcomponents/TopButton';
import CollapsableNavBar from './subcomponents/CollapsableNavBar';

export default class Main extends React.Component {

  container = React.createRef()

  state = {
    showBackToTop: false,
    position: 0
  }


  handleScroll = (e) => {
    let position = e.target.scrollTop / e.target.offsetHeight
    let calculate = position > 3.7 ? Math.round(position) + 1 : Math.round(position)
    this.handleToTop(calculate)
  }

  handleToTop = (position) => {
    if(position > 0.7){
      this.setState({ showBackToTop: true, position: position })
    }
    else{
      this.setState({ showBackToTop: false, position: position })
    }
  }

  navControlsJSX = () => {
    return (
      <>
        <CollapsableNavBar position={this.state.position} toTheTop={this.toTheTop} />
        <TopButton toTheTop={this.toTheTop} />
     </>
    )
  }

  navControls = () => {
    return this.state.showBackToTop
      ? this.navControlsJSX()
        : null
  }

  toTheTop = () => {
    console.log('clicked')
    this.container.current.scrollTo({top: 0, behavior: 'smooth' });
  }

  toSkills = () => {
    this.container.current.scrollTo({
      top: this.container.current.offsetHeight,
      behavior: 'smooth'
    });
  }

  render(){
    return (
      <div ref={this.container} onScroll={this.handleScroll} className={'main-container'}>
        <Intro toSkills={this.toSkills} />
        { this.navControls() }
        <Skills />
        <Projects />
        <Posts />
        <Gallery />
        <Footer />
      </div>
    );
  }
}
