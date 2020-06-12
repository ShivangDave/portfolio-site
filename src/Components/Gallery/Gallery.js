import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'

export default ({ pictures, setSection }) => {

  const [ref,inView] = useInView({ threshold: 1 });

  useEffect(() => {
    console.log('this is gallery.')
    setSection(4)
  },[inView,setSection])

  return (
    <div ref={ref} className={'gallery-container'}>
      {
        pictures.map((picture,index) => {
          const caption = picture.caption

          const pre = caption.length > 100 ? caption.substring(0,100) : caption
          const post = caption.length > 40 ? '#tech' : ''

          const cardCaption = pre + '... ' + post

          return (
            <a key={index} className={'gallery-link'}
              href={picture.permalink} alt={'link'} rel="noopener noreferrer" target={'_blank'}>
              <div className={'gallery-card-container'}>
                <div className={'gallery-card'}>
                  <img src={picture.url} alt={''} draggable={'false'} />
                </div>
                <p>{ cardCaption }</p>
              </div>
            </a>
          )
        })
      }
    </div>
  )
}
