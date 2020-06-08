import React, { useEffect, useState } from 'react';

import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion';

import ChangingProgressProvider from '../../Containers/ChangingProgressProvider'


export default (props) => {

  const containerClass = props.val ? 'small-loader-container' : 'loader-container'
  const barClass = props.val ? 'small-loader' : 'loader'

  const position = props.position
  const control = useAnimation()

  const [ref,inView] = useInView({ threshold: 0.1 });

  const [visible,setVisible] = useState(false)
  const [count,setCount] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount('Timeout called!');
      if (position === 1) {
        setVisible(true)
        control.start("visible")
      }else{
        setVisible(false)
        control.start("hidden")
      }
    }, 500);

    if(inView){
      console.log('skills shown')
    }else{
      console.log('skills hidden')
    }

    return () => clearTimeout(timer);
  }, [control, position, visible, inView]);

  const renderAnimation = (skill,index) => {
    if(props.val && visible){
      return (
        <ChangingProgressProvider
          barClass={barClass}
          skill={skill}
          values={[0,props.val[index]]}
        />
      )
    }else{
      return (
        <ChangingProgressProvider
          barClass={barClass}
          skill={skill}
          values={[0,0]}
        />
      )
    }
  }

  return (
    <div ref={ref} className='loader-container-parent'>
      {
        props.arr.map((skill,index) => {
          return(
            <motion.div
              variants={{
                visible: { scale: 1, transition: { duration: 0.6 } },
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
