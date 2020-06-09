import React, { useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';

import ChangingProgressProvider from '../../Containers/ChangingProgressProvider'

export default (props) => {

  const containerClass = props.val ? 'small-loader-container' : 'loader-container'
  const barClass = props.val ? 'small-loader' : 'loader'

  const location = props.location
  const control = useAnimation();

  useEffect(() => {
    if(location === 1) {
      control.start("visible")
    }else{
      control.start("hidden")
    }
  }, [control,location]);

  const renderAnimation = (skill,index) => {
    const values = props.val ? [0,props.val[index]] : [0,0]
    const smallLoaders = props.val ? true : false

    return (
      <ChangingProgressProvider
        barClass={barClass}
        skill={skill}
        values={values}
        smallLoaders={smallLoaders}
      />
    )
  }

  return (
    <div className='loader-container-parent'>
      {
        props.arr.map((skill,index) => {
          return(
            <motion.div
              variants={{
                visible: { scale: 1 },
                hidden: { scale: 0 },
              }}
              intial={"hidden"}
              animate={control}
              key={skill} className={containerClass}>
              {
                renderAnimation(skill,index)
              }
            </motion.div>
          )
        })
      }
    </div>
  )
}
