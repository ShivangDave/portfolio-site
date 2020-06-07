import React from 'react';

import { motion } from 'framer-motion';

export default () => {
  return (
    <motion.h2
     id= {'intro'}
     intial= {{
       scale: 0,
       opacity: 0
     }}
     animate={{
      fontSize: 50,
      color: 'rgba(253, 177, 177, 1)',
      scale: 1,
      opacity: 1
    }}
    transition={{ delay: 2, duration: 0.5 }}
    className={'intro'}>
      Hey There!
    </motion.h2>
  )
}
