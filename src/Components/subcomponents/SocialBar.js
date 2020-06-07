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

  return (
    <div className={'social-bar-container'}>
      {
        socialLinks.map((item,index) => {
          return <a href={item} target='_blank' rel="noopener noreferrer">
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={imgs[index]}
              draggable={'false'}
              alt={''}
            />
          </a>
        })
      }
    </div>
  )
}
