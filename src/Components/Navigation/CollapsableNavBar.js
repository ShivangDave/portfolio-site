import React from 'react';

import { motion } from 'framer-motion';

export default ({ currentSection }) => {

  const sectionTitle = {
    1: 'Skills',
    2: 'Projects',
    3: 'Blogs',
    4: 'Gallery',
    5: 'Thanks for visiting :)'
  }

  const navbarTitleVariants = {
    visible: {
      scale: 0.8,
      transition: { duration: 0.5 }
    },
    hidden: {
      x: "200vh"
    },
    next: {
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
      <motion.div className={'sticky-navbar'}>
        <motion.div variants={navbarTitleVariants}
          intial={'hidden'}
            animate={'visible'}>
              { sectionTitle[currentSection] }
        </motion.div>
      </motion.div>
  )
}
