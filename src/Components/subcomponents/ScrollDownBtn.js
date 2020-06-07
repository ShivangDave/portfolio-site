import React from 'react';

import { motion } from 'framer-motion';

export default (props) => {
  return (
    <motion.span className={'clickme'} animate={{
        scale: 0.5,
        y: 100
      }}
      transition={{ duration: 1 }}
      whileHover={{ scale: 0.6, duration: 0.5 }}
    >
      <img
        onClick={props.toSkills}
        src={'/expand-arrow-100.png'}
        draggable={'false'} alt={''}
      />
    </motion.span>
  )
}
