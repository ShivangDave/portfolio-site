import React, { useState, useEffect } from 'react';

import Intro from './Intro/Intro';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Posts from './Posts/Posts';
import Footer from './Footer/Footer';

const feedUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40shivang-dave'

export default () => {

  const [posts, setPosts] = useState([])
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    fetch(feedUrl)
      .then(res => res.json())
      .then(feed => {
        if(feed.items){
          setPosts(feed.items)
        }else{
          setPosts([])
        }
      })
  },[])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className={'app-wrapper'}>
      <Intro scrollY={scrollY} />
      <Skills />
      <Projects />
      <Posts posts={posts} />
      <Footer />
    </main>
  );
}
