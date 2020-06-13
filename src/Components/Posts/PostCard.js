import React from 'react';

import { motion } from 'framer-motion';

export default (props) => {

  const post = props.post

  const RenderCard = () => (
    <motion.div className={'post-card'}>
      <CardImage thumb={post.thumbnail} />
      <CardText {...post} />
    </motion.div>
  )

  const CardText = ({ title, link }) => (
    <motion.div>
      <p className={'post-title'}> {title.replace(/&amp;/g, '&')} </p>
      <a href={link} target={'_blank'} rel="noopener noreferrer" className={'read-more-btn'}> Read More </a>
    </motion.div>
  )

  const CardImage = (props) => (
    <motion.img src={props.thumb} alt={''} />
  )

  return (
    <>
      <RenderCard />
    </>
  )
}
