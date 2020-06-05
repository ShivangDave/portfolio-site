import React from 'react';

import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import Posts from './Posts';
import Gallery from './Gallery';
import Footer from './Footer';

import { motion } from "framer-motion"
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
      ? <motion.img
          animate={{
            scale: 0.5,
            rotate: 180
          }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 0.6 }}
          onClick={() => scroll.scrollToTop({ duration: 300 })}
            className={'takemetothetop'}
              src={'/expand-arrow-100.png'}
                draggable={'false'} alt={''} />
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
