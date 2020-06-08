import React from 'react';

import { motion } from 'framer-motion';

export default (props) => {

  const sectionTitle = {
    1: 'Skills',
    2: 'Projects',
    3: 'Blogs',
    4: 'Gallery',
    5: 'Thanks for visiting :)'
  }

  return (
      <motion.div
        className={'sticky-navbar'}
        onClick={props.toTheTop}
      >
        <motion.span
          initial={{ x: "200vh" }}
          animate={{ x: 0 }}
          exit={{ x: "-200vh" }}
          transition={{ duration: 0.3 }}
        >
          { sectionTitle[props.position] }
        </motion.span>
      </motion.div>
  )
}
