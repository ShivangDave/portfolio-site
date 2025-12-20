import React from 'react';
import Avatar from './Avatar';

import { motion } from 'framer-motion';

export default (props) => {

  const avatarContainerVariants = {
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hidden: { 
      scale: 0.5,
      opacity: 0
    }
  }

  return (
    <motion.div
      variants={avatarContainerVariants}
      initial={'hidden'}
      animate={'visible'}
      className={'avatar-container'}
    >
      <Avatar avatarClass={'avatar'} />
    </motion.div>
  )
}
