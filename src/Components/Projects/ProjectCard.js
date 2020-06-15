import React from 'react';

import { motion } from 'framer-motion';

export default (props) => {

  const project = props.project

  const animateProjectCard = {
    visible: {
      scale: 1.1,
      transition: { duration: 0.5 }
    },
    hidden: {
      scale: 1
    }
  }

  const bgImage = project.img && props.showBackground === props.index ? `url(${project.img})` : ``
  const showText = bgImage !== `` ? false : true

  return (
    <motion.div
      drag
      dragConstraints={{
        top: -150,
        left: -150,
        right: 150,
        bottom: 150,
      }}
      onMouseEnter={() => props.setShowBackground(props.index) }
      onMouseLeave={() => props.setShowBackground(null) }
      className={'gallery-link'}
    >
      <motion.div
        variants={animateProjectCard}
        initial={'hidden'}
        whileHover={'visible'}
        whileTap={'visible'}
        className={'project-card-container'}
      >
        <div className={'project-text'}
          onDoubleClick={() => window.open(`${project.desc.url}`, "_blank")}
            style={{ backgroundImage: bgImage }}>
          {
            showText && (
              <span> { project.title } </span>
            )
          }
        </div>
      </motion.div>
    </motion.div>
  )
}
