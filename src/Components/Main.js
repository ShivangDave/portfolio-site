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
    showBackToTop: false
  }


  handleScroll = (e) => {
    let scrollPosition = e.target.scrollTop
    this.handleToTop(scrollPosition)
  }

  handleToTop = (scrollPosition) => {
    if(scrollPosition > 400){
      this.setState({ showBackToTop: true })
    }else{
      this.setState({ showBackToTop: false })
    }
  }

  backToTop = () => {
    return this.state.showBackToTop
      ? <TopButton toTheTop={this.toTheTop} />
        : null
  }

  collapsableNavBar = () => {
    return this.state.showBackToTop
      ? <CollapsableNavBar toTheTop={this.toTheTop} />
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
        { this.collapsableNavBar() }
        <Skills />
        <Projects />
        <Posts />
        <Gallery />
        <Footer />
        { this.backToTop() }
      </div>
    );
  }
}
