import React, { useState } from 'react';

import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import Posts from './Posts';
import Gallery from './Gallery';
import Footer from './Footer';

import TopButton from './subcomponents/TopButton';
import CollapsableNavBar from './subcomponents/CollapsableNavBar';


export default () => {

  const container = React.createRef()

  const [position,setPosition] = useState(0)
  const [location,setLocation] = useState('')

  const handleScroll = () => {
    let position = container.current.scrollTop / container.current.offsetHeight
    let calculate = position > 3.7 ? Math.round(position) + 1 : Math.round(position)
    handleToTop(calculate)
  }

  const handleToTop = (position) => {
    setPosition(position)
  }

  const navControlsJSX = () => {
    return (
      <>
        <CollapsableNavBar position={position} toTheTop={toTheTop} />
        <TopButton toTheTop={toTheTop} />
      </>
    )
  }

  const navControls = () => {
    return position > 0
      ? navControlsJSX()
        : null
  }

  const toTheTop = () => {
    container.current.scrollTo({top: 0, behavior: 'smooth' });
  }

  const toSkills = () => {
    container.current.scrollTo({
      top: container.current.offsetHeight,
      behavior: 'smooth'
    });
  }

  return (
    <div ref={container} onScroll={handleScroll} className={'main-container'}>
      <Intro position={position} toSkills={toSkills} />
      { navControls() }
      <Skills position={position} />
      <Projects />
      <Posts />
      <Gallery />
      <Footer />
    </div>
  );
}
