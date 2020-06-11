import React, { useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';

export default (props) => {

  const project = props.project
  const location = props.location

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

  const controlLeft = useAnimation();
  const controlRight = useAnimation();

  useEffect(() => {
    if(location === 2) {
      controlLeft.start("visible")
      .then(() => {
        controlRight.start("visible")
      })
    }else{
      controlLeft.start("hidden")
      .then(() => {
        controlRight.start("hidden")
      })
    }
  }, [controlLeft, controlRight,location]);

  const projectCard = () => {

    const control = props.index % 2 > 0 ? controlLeft : controlRight
    const controlVariant = props.index % 2 > 0 ? animateFromLeft : animateFromRight

    return (
      <motion.div
        className={'project-card-container'}
        variants={controlVariant}
        initial={control}
        animate={control}
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
