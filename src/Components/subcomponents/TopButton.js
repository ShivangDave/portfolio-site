import React from 'react';

import { motion } from "framer-motion"

export default (props) => {
  return (
    <motion.img
        animate={{
          scale: 0.3,
          rotate: 180
        }}
        transition={{ duration: 0.2 }}
        whileHover={{ scale: 0.4 }}
        className={'takemetothetop'}
        src={'/expand-arrow-100.png'}
        draggable={'false'}
        alt={''}
        onClick={props.toTheTop}
    />
  )
}
