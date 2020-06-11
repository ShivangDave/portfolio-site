import React from 'react';

import { motion } from 'framer-motion';

import ChangingProgressProvider from '../../Containers/ChangingProgressProvider'

export default (props) => {

  const containerClass = props.val ? 'small-loader-container' : 'loader-container'
  const barClass = props.val ? 'small-loader' : 'loader'

  const loaderVariants = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  }

  const renderAnimation = (skill,index) => {

    const values = props.val ? [0,props.val[index]] : [0,0]
    const smallLoaders = props.val ? true : false

    return (
      <ChangingProgressProvider
        key={index}
        barClass={barClass}
        skill={skill}
        values={values}
        smallLoaders={smallLoaders}
      />
    )
  }

  const loaderContainer = (skill,index) => (
    <motion.div variants={loaderVariants}
      intial={'hidden'}
      animate={'visible'}
      key={index}
      className={containerClass}>
      {
        renderAnimation(skill,index)
      }
    </motion.div>
  )

  return (
    <div className='loader-container-parent'>
      {
        props.arr.map((skill,index) => {
          return loaderContainer(skill,index)
        })
      }
    </div>
  )
}
