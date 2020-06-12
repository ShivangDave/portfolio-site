import React from 'react';
import { motion } from 'framer-motion';

export default (props) => {

  const scrollDownBtnVariants = {
    visible: {
        y: [40,100,40,100],
        transition: {
          duration: 3,
          yoyo: Infinity
        }
    },
    hover: {
      scale: 1.1,
      duration: 0.3
    },
    exit: {
      scale: 0
    }
  }

  return (
    <motion.span className={'clickme'}
      variants={scrollDownBtnVariants}
      animate={'visible'}
      whileHover={'hover'}
      onClick={props.toSkills}
    >
      <img src={'/img/expand-arrow-100.png'}
        draggable={'false'} alt={''}
      />
    </motion.span>
  )
}
