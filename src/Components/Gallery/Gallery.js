import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'

export default ({ setSection }) => {

  const [ref,inView] = useInView({ threshold: 1 });

  useEffect(() => {
    console.log('this is gallery.')
    setSection(4)
  },[inView,setSection])

  return (
    <div ref={ref} className={'gallery-container'}>
      <rssapp-wall id="DRApa2KjfXGDOlOX">
      </rssapp-wall>
    </div>
  )
}
