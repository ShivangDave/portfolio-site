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

  const projectCard = () => {

    return (
      <a href={project.desc.url}
        target={'_blank'} className={'gallery-link'} rel="noopener noreferrer">
        <motion.div
          variants={animateProjectCard}
          initial={'hidden'}
          whileHover={'visible'}
          whileTap={'visible'}
          className={'project-card-container'}
          style={{ backgroundImage: `url(${project.img})` }}
        >
          <div className={'project-text'}>
            <span> { project.title } </span>
          </div>
        </motion.div>
      </a>
    )
  }

  return (
    <>
      { projectCard() }
    </>
  )
}
