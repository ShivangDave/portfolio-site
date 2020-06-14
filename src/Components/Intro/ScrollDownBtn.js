import React from 'react';
import { motion } from 'framer-motion';

export default (props) => {

  const scrollDownBtnVariants = {
    visible: {
        y: [100,150,100,150],
        transition: {
          duration: 2,
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
