import React from 'react';

import { motion } from 'framer-motion';

export default () => {

  const introTextVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hidden: {
      opacity: 0,
      y: 30
    }
  }

  return (
    <motion.h2
      id={'intro'}
      variants={introTextVariants}
      initial={'hidden'}
      animate={'visible'}
      className={'intro'}>
      Hey There!
    </motion.h2>
  )
}
