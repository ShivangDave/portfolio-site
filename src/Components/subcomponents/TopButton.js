import React from 'react';

import { motion } from "framer-motion"

export default (props) => {
  return (
    <motion.img
        animate={{
          scale: 0.5,
          rotate: 180
        }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 0.6 }}
        className={'takemetothetop'}
        src={'/expand-arrow-100.png'}
        draggable={'false'}
        alt={''}
        onClick={props.toTheTop}
    />
  )
}
