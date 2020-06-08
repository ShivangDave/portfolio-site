import React from 'react';
import Avatar from './Avatar';

import { motion } from 'framer-motion';

export default () => {
  return (
    <motion.div animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0, 135, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%", "50%", "55%"],
      }}
      layoutTransition
      transition={{ duration: 1 }}
      className={'avatar-container'}
    >
      <Avatar avatarClass={'avatar'} />
    </motion.div>
  )
}
