import React from 'react';

import { motion } from 'framer-motion';

export default (props) => {

  const project = props.project

  const animateProjectCard = {
    visible: {
      scale: 1.08,
      y: -10,
      transition: { duration: 0.4 }
    },
    hidden: {
      scale: 1,
      y: 0
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
      dragElastic={0.1}
      onMouseEnter={() => props.setShowBackground(props.index) }
      onMouseLeave={() => props.setShowBackground(null) }
      className={'gallery-link'}
      layout
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
