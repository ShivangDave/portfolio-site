import React, { useState, useEffect } from 'react';
import PostCard from './subcomponents/PostCard';
import { useInView } from 'react-intersection-observer'

export default (props) => {

  const [ref,inView] = useInView({ threshold: 0.6 });
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
        posts.map(post => <PostCard key={post.guid} post={post} />)
      }
    </div>
  )
}
