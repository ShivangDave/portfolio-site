import React, { useState, useEffect } from 'react';

import Intro from './Intro/Intro';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Posts from './Posts/Posts';
import Gallery from './Gallery/Gallery';
import Footer from './Footer/Footer';

import TopButton from './Navigation/TopButton';
import CollapsableNavBar from './Navigation/CollapsableNavBar';

const feedUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40shivang_dave'

export default () => {

  const container = React.createRef()

  const [posts,setPosts] = useState([])
  const [currentSection,setSection] = useState(0)

  useEffect(() => {
    fetch(feedUrl)
    .then(res => res.json())
    .then(feed => {
      console.log('fetching')
      setPosts(feed.items)
    })
  },[])

  const navControls = () => {
    return (
      currentSection > 0 && (
        <>
          <CollapsableNavBar currentSection={currentSection} />
          <TopButton toTheTop={toTheTop} />
        </>
      )
    )
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
      { navControls() }
      <Intro setSection={setSection} toSkills={toSkills} />
      <Skills setSection={setSection} />
      <Projects setSection={setSection} />
      <Posts posts={posts} setSection={setSection} />
      <Footer />
    </div>
  );
}

// <Gallery setSection={setSection} />
