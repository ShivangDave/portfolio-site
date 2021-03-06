import React from 'react';

import { motion } from 'framer-motion';

export default (props) => {

  const avatarVariants = {
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 1.5 }
    },
    hidden: {
      opacity: 0,
      scale: 0
    }
  }

  return (
    <motion.img
      src={'https://avatars3.githubusercontent.com/u/5992751?s=460&u=01873cd9275344ec8c6198676d70b506a0f6dd2b&v=4'}
      variants={avatarVariants}
      initial={'hidden'}
      animate={'visible'}
      alt={''}
      className={props.avatarClass} draggable={'false'}
    />
  )
}
