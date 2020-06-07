import React from 'react';

import { motion } from 'framer-motion';

import Avatar from './Avatar';

export default (props) => {
  return (
    <motion.div
      className={'sticky-navbar'}
      onClick={props.toTheTop}
    >
      <motion.div animate={{
          scale: [1, 0.5],
          rotate: [0, 0, 270, 270, 0, 135, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%", "50%"],
        }}
        transition={{ duration: 1 }}
        className={'navbar-avatar-container'}
      >
        <Avatar avatarClass={'nav-avatar'} />
      </motion.div>
    </motion.div>
  )
}
