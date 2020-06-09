import React, { useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';

export default (props) => {

  const project = props.project
  const location = props.location

  const control = useAnimation();

  useEffect(() => {
    if(location === 2) {
      control.start("visible")
    }
  }, [control,location]);

  const cardContainerVariant = {
    visible: {
      scale: [0,0.5,1],
      transition: { duration: 1 }
    },
    hidden: {
      scale: 0
    }
  }

  return (
    <>
    </>
  )
}
