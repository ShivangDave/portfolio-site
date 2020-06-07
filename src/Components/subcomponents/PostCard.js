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
        <button className={'read-more-btn'}> Read More..</button>
      </motion.div>
    </motion.div>
  )
}
