import React from 'react';

import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';

export default (props) => {

  const arrowPosition = isMobile ? 50 : 150

  return (
    <motion.span className={'clickme'} animate={{
        scale: 0.5,
        y: arrowPosition
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
