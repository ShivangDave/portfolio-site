import React from 'react';
import { motion } from 'framer-motion';

export default (props) => {
  const post = props.post
  
  return (
    <motion.div className={'post-card'}>
      <motion.img
        initial={{
          x: -110
        }}
        animate={{
          x: 0
        }}
        transition={{
          duration: 0.5
        }} src={post.thumbnail} alt={''} />
      <motion.div
        initial={{
          x: 110
        }}
        animate={{
          x: 0
        }}
        transition={{
          duration: 0.7
        }}>
        <p className={'post-title'}> {post.title.replace(/&amp;/g, '&')} </p>
        <a href={post.link} target={'_blank'} rel="noopener noreferrer" className={'read-more-btn'}> Read More </a>
      </motion.div>
    </motion.div>
  )
}
