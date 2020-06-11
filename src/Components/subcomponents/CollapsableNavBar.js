import React from 'react';

import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion';

export default (props) => {

  const sectionTitle = {
    1: 'Skills',
    2: 'Projects',
    3: 'Blogs',
    4: 'Gallery',
    5: 'Thanks for visiting :)'
  }

  const location = props.location

  const control = useAnimation()

  const [ref] = useInView({ threshold: 0.1 });

  return (
      <motion.div
        className={'sticky-navbar'}
        onClick={props.toTheTop}
      >
        <motion.div ref={ref}
        variants={{
          visible: { scale: 0.8, transition: { duration: 0.5 } },
          hidden: { x: "200vh" },
          next: { scale: 1, transition: { duration: 0.5 } }
        }}
        intial={"hidden"}
        animate={control}>
          { sectionTitle[location] }
        </motion.div>
      </motion.div>
  )
}
