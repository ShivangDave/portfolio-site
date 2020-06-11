import React, { useEffect } from 'react';

import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion';

import Avatar from './Avatar';

export default (props) => {

  const location = props.location
  const control = useAnimation()
  const [ref] = useInView({ threshold: 0.6 });

  useEffect(() => {
    if (location === 0) {
      control.start("visible")
    }else{
      control.start("hidden")
    }
  }, [control,location]);

  return (
    <motion.div
      ref={ref}
      variants={{
        visible: {
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0, 135, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%", "50%", "55%"],
          transition: { duration: 0.8 }
        },
        hidden: { scale: 0 },
      }}
      initial={'hidden'}
      animate={control}
      className={'avatar-container'}
    >
      <Avatar avatarClass={'avatar'} />
    </motion.div>
  )
}
