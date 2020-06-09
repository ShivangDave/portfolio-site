import React from 'react';
import { useInView } from 'react-intersection-observer'
import { isMobileOnly } from 'react-device-detect';

export default (props) => {

  const threshold = isMobileOnly ? { threshold: 0.1 } : { threshold: 1 }
  const [ref,inView] = useInView(threshold);

  if(inView){
    props.setLocation(4)
  }

  return (
    <div ref={ref} className={'gallery-container'}>
      <h1> Instagram! </h1>
      <rssapp-wall id="DRApa2KjfXGDOlOX">
      </rssapp-wall>
    </div>
  )
}
