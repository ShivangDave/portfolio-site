import React from 'react';

import { motion } from 'framer-motion';
import { isMobileOnly } from 'react-device-detect';

export default (props) => {

  const arrowPosition = isMobileOnly ? 50 : 150

  const scrollDownBtnVariants = {
    visible: {
        scale: 0.5,
        y: arrowPosition,
        transition: { duration: 1 }
    },
    hover: {
      scale: 0.6,
      duration: 0.5
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
