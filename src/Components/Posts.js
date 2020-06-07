import React, { useState, useEffect } from 'react';
import PostCard from './subcomponents/PostCard';

export default () => {
  const feedUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40shivang_dave'
  const [posts,setPosts] = useState([])

  useEffect(() => {
    fetch(feedUrl)
    .then(res => res.json())
    .then(feed => setPosts(feed.items))
  }, [])

  return (
    <div className={'posts-container'}>
      {
        posts.map(post => <PostCard key={post.guid} post={post} />)
      }
    </div>
  )
}
