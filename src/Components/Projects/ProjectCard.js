import React from 'react';

import { motion } from 'framer-motion';

export default (props) => {

  const project = props.project

  const animateFromLeft = {
    visible: {
      x: 0,
      transition: { duration: 0.5 }
    },
    hidden: {
      x: "-200vh",
    }
  }

  const animateFromRight = {
    visible: {
      x: 0,
      transition: { duration: 0.5 }
    },
    hidden: {
      x: "200vh",
    }
  }

  const projectCard = () => {
    const controlVariant = props.index % 2 > 0 ? animateFromLeft : animateFromRight
    return (
      <motion.div
        className={'project-card-container'}
        variants={controlVariant}
        initial={'hidden'}
        animate={'visible'}
      >
        { project.title }
      </motion.div>
    )
  }

  return (
    <>
      { projectCard() }
    </>
  )
}
