import React from 'react';
import SocialBar from './SocialBar';
import { motion } from 'framer-motion';

export default (props) => {

  return (
    <div className={'footer-container'}>
      <motion.h3 className={'footer-text'}>
        {'//'} Made with React + Framer Motion <span role="img" aria-label="heart">♥️</span>
        {<br />}
        <SocialBar />
        {<br />}
        &copy; 2020 Shivang Dave.
      </motion.h3>
    </div>
  )
}
