import React, { useState, useEffect } from 'react';

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

  const [location,setLocation] = useState(0)

  useEffect(() => {
  },[location])

  const navControlsJSX = () => {
    return (
      <>
        <CollapsableNavBar location={location} toTheTop={toTheTop} />
        <TopButton toTheTop={toTheTop} />
      </>
    )
  }

  const navControls = () => {
    return location > 0
      ? navControlsJSX()
        : null
  }

  const toTheTop = () => {
    container.current.scrollTo({top: 0, behavior: 'smooth' });
  }

  const toSkills = () => {
    container.current.scrollTo({
      top: container.current.offsetHeight
    });
  }

  return (
    <div ref={container} className={'main-container'}>
      <Intro location={location} setLocation={setLocation} toSkills={toSkills} />
      { navControls() }
      <Skills location={location} setLocation={setLocation} />
      <Projects location={location} setLocation={setLocation} />
      <Posts location={location} setLocation={setLocation} />
      <Gallery location={location} setLocation={setLocation} />
      <Footer location={location} setLocation={setLocation} />
    </div>
  );
}
