import React, { useState, useEffect } from 'react';
import PostCard from './subcomponents/PostCard';
import { useInView } from 'react-intersection-observer'
import { isMobileOnly } from 'react-device-detect';

export default (props) => {

  const threshold = isMobileOnly ? { threshold: 0.2 } : { threshold: 0.5 }
  const [ref,inView] = useInView(threshold);

  const feedUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40shivang_dave'
  const [posts,setPosts] = useState([])

  useEffect(() => {
    fetch(feedUrl)
    .then(res => res.json())
    .then(feed => {
      setPosts(feed.items)
    })
  },[])

  if(inView){
    props.setLocation(3)
  }

  return (
    <div ref={ref} className={'posts-container'}>
      {
        posts.map((post,index) =>
          <PostCard
            location={props.location}
            key={post.guid}
            post={post}
            index={index}
          />)
      }
    </div>
  )
}
