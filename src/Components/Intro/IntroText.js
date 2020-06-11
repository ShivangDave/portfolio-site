import React from 'react';

import { motion } from 'framer-motion';

export default () => {

  const introTextVariants = {
    visible: {
     fontSize: 50,
     color: 'rgba(253, 177, 177, 1)',
     scale: 1,
     opacity: 1,
     transition: { delay: 2, duration: 0.5 }
   },
    hidden: {
      scale: 0,
      opacity: 0,
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
