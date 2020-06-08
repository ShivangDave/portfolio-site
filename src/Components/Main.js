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
    position: 0
  }


  handleScroll = () => {

    let position = this.container.current.scrollTop / this.container.current.offsetHeight
    let calculate = position > 3.7 ? Math.round(position) + 1 : Math.round(position)

    console.dir(this.container.current)

    console.log(`ref position : ${position}`)
    console.log(`ref calculate : ${calculate}`)


    this.handleToTop(calculate)
  }

  handleToTop = (position) => {
    if(position > 0.7){
      this.setState({ position: position })
    }
    else{
      this.setState({ position: position })
    }
  }



  navControlsJSX = () => {
    return (
      <>
        <CollapsableNavBar isVisible={this.state.isVisible} position={this.state.position} toTheTop={this.toTheTop} />
        <TopButton toTheTop={this.toTheTop} />
      </>
    )
  }

  navControls = () => {
    return this.state.position > 0
      ? this.navControlsJSX()
        : null
  }

  toTheTop = () => {
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
