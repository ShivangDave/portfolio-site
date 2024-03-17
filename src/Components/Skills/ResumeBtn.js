import React from 'react';

import { motion } from 'framer-motion';

export default (props) => {

  const resumeBtnVariants = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
    onInteraction: { scale: 1.1 }
  }

  return (
    <motion.div variants={resumeBtnVariants}
      animate={'visible'}
      whileTap = {'onInteraction'}
      whileHover={'onInteraction'}
      className={'resume-btn-container'}>
      <button className={'resume-btn'}>
        <a href={'https://drive.google.com/file/d/190Y2zXn8lq5ABR3q07rXX66DAr9r0mEV/view?usp=sharing'}
          target={'_blank'}
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </button>
    </motion.div>
  )
}
