import React, { useEffect } from 'react';

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

  const position = props.position
  const control = useAnimation()
  const [ref] = useInView({ threshold: 0.1 });

  useEffect(() => {

    if (position % 2 === 0) {
      control.start("visible")
    }else if(position % 2 === 1){
      control.start("next")
    }
  }, [control, position]);

  return (
      <motion.div
        className={'sticky-navbar'}
        onClick={props.toTheTop}
        animate
      >
        <motion.div ref={ref}
        variants={{
          visible: { scale: 0.8, transition: { duration: 0.5 } },
          hidden: { x: "200vh" },
          next: { scale: 1, transition: { duration: 0.5 } }
        }}
        intial={"hidden"}
        animate={control}>
          { sectionTitle[props.position] }
        </motion.div>
      </motion.div>
  )
}
