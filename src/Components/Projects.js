import React from 'react';
import { useInView } from 'react-intersection-observer'

export default (props) => {

  const [ref,inView] = useInView({ threshold: 0.6 });

  if(inView){
    props.setLocation(2)
  }

  return (
    <div ref={ref} className={'projects-container'}>
      <h1> Coming Soon </h1>
    </div>
  )
}
