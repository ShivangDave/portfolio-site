import React from 'react';
import { motion } from 'framer-motion';

export default () => {

  const socialLinks = [
    "https://instagram.com/dshivang0",
    "https://linkedin.com/in/dshivang",
    "https://github.com/ShivangDave",
    "https://twitter.com/___Shivang___"
  ]

  const imgs = [
    '/img/instagram.png',
    '/img/linkedin.png',
    '/img/github.png',
    '/img/twitter.png'
  ]

  const socialImgVariants = {
    onInteraction: { scale: 1.2 }
  }

  return (
    <div className={'social-bar-container'}>
      {
        socialLinks.map((item,index) => {
          return <a key={index} href={item} target='_blank' rel="noopener noreferrer">
            <motion.img variants={socialImgVariants}
              whileHover={'onInteraction'}
              src={imgs[index]} draggable={'false'} alt={''}
            />
          </a>
        })
      }
    </div>
  )
}
