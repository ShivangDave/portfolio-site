import React, { useEffect } from 'react';
import PostCard from './PostCard';
import { useInView } from 'react-intersection-observer'

export default ({ setSection, posts }) => {

  const [ref,inView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if(inView){
      console.log('this is posts')
      setSection(3)
    }
  },[inView,setSection])

  return (
    <div ref={ref} className={'posts-container'}>
      {
        posts.map((post,index) =>
          <PostCard
            key={post.guid}
            post={post}
            index={index}
          />)
      }
    </div>
  )
}
