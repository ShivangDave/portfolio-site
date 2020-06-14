import React from 'react';

import { motion } from 'framer-motion';

export default () => {

  const introTextVariants = {
    visible: {
     x: 0,
     y: 50,
     scale: 1
   },
    hidden: {
      y: 100,
      scale: 0,
      transition: { delay: 2, duration: 0.5 }
    }
  }

  return (
    <motion.h2
     id= {'intro'}
     variants={introTextVariants}
     intial={'hidden'}
     animate={'visible'}
     className={'intro'}>
      Hey There!
    </motion.h2>
  )
}
