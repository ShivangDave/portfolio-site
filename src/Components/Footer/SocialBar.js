import React from 'react';
import { motion } from 'framer-motion';

export default () => {

  const socialLinks = [
    "https://github.com/ShivangDave",
    "https://linkedin.com/in/dshivang",
    "https://instagram.com/dshivang0",
    "https://twitter.com/___Shivang___"
  ]

  const imgs = [
    '/img/github.png',
    '/img/linkedin.png',
    '/img/instagram.png',
    '/img/twitter.png'
  ]

  const socialImgVariants = {
    onInteraction: { scale: 1.2 }
  }

  return (
    <div className={'social-bar-container'}>
      <div className={'footer-icons'}>
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
      mail@shivangdave.com
    </div>
  )
}
