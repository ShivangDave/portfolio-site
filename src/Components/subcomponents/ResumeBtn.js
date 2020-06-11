import React from 'react';

import { motion } from 'framer-motion';

export default (props) => {
  return (
    <motion.div
      animate={{
        scale: 1
      }}
      whileTap = {{
        scale: 1.1
      }}
      whileHover={{
        scale: 1.1
      }}
      className={'resume-btn-container'}>
      <button className={'resume-btn'}> Resume </button>
    </motion.div>
  )
}
