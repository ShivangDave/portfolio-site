import React from 'react';
import SocialBar from './subcomponents/SocialBar';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'

export default (props) => {

  const [ref,inView] = useInView({ threshold: 0.3 });

  if(inView){
    props.setLocation(5)
  }

  return (
    <div ref={ref} className={'footer-container'}>
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
