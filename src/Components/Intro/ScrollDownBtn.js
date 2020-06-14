import React from 'react';
import { motion } from 'framer-motion';

export default (props) => {

  const scrollDownBtnVariants = {
    visible: {
        y: [100,150,100,150],
        transition: {
          duration: 3,
          yoyo: Infinity
        }
    },
    hover: {
      scale: 1.1,
      duration: 0.3
    }
  }

  const arrowPathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        delay: 3,
        duration: 2,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.span className={'clickme'}
      variants={scrollDownBtnVariants}
      animate={'visible'}
      whileHover={'hover'}
      onClick={props.toSkills}
    >
      <motion.svg version="1.1"
         fill="rgba(253, 177, 177, 1)"
         xmlns="http://www.w3.org/2000/svg"
         x="0px" y="0px"
         viewBox="0 0 512.011 512.011"
         style={{ height: 40, width: 40 }} >
        <g>
          <g>
            <motion.path
              variants={arrowPathVariants}
              animate={'visible'}
              initial={'hidden'}
              d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0
          			s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667
          			C514.096,145.416,514.096,131.933,505.755,123.592z"/>
          </g>
        </g>
      </motion.svg>
    </motion.span>
  )
}

// <img src={'/img/expand-arrow-100.png'}
//   draggable={'false'} alt={''}
// />
