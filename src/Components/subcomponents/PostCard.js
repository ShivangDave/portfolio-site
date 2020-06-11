import React, { useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';

export default (props) => {

  const post = props.post

  const location = props.location
  const control = useAnimation();

  useEffect(() => {
    if(location === 3) {
      control.start("visible")
    }
  }, [control,location]);

  const cardContainerVariant = {
    visible: {
      scale: [0,0.5,1],
      transition: { duration: 0.5 }
    },
    hidden: {
      scale: 0
    }
  }

  const cardImgVariant={
    visible: {
      x: 0,
      transition: { duration: 0.4 }
    },
    hidden: {
      x: "-110vh"
    }
  }

  const cardTextVariant={
    visible: {
      x: 0,
      transition: { duration: 0.5 }
    },
    hidden: {
      x: "110vh"
    }
  }

  const RenderCard = () => (
    <motion.div
      className={'post-card'}
      variants={cardContainerVariant}
      initial={control}
      animate={control}
    >
      { props.index % 2 > 0 ? <RightCard /> : <LeftCard /> }
    </motion.div>
  )

  const LeftCard = (props) => (
    <>
      <CardImage thumb={post.thumbnail} />
      <CardText {...post} />
    </>
  )

  const RightCard = (props) => (
    <>
      <CardText {...post} />
      <CardImage thumb={post.thumbnail} />
    </>
  )

  const CardText = (props) => (
    <motion.div
      variants={cardImgVariant}
      initial={control}
      animate={control}>
      <p className={'post-title'}> {props.title.replace(/&amp;/g, '&')} </p>
      <a href={props.link} target={'_blank'} rel="noopener noreferrer" className={'read-more-btn'}> Read More </a>
    </motion.div>
  )

  const CardImage = (props) => (
    <motion.img
      variants={cardTextVariant}
      initial={control}
      animate={control}
      src={props.thumb} alt={''} />
  )

  return (
    <>
      <RenderCard />
    </>
  )
}
