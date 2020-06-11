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
      <button className={'resume-btn'}> Resume </button>
    </motion.div>
  )
}
