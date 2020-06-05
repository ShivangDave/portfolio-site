import React from 'react';
import { motion } from "framer-motion"

import { Link } from 'react-scroll';

export default class Intro extends React.Component {

  constructor(){
    super()
    this.state = {
      scale: 1,
      scrollPosition: 0
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (e) => {

    if(window.pageYOffset <= 0){
      this.setState({ scale: 1, scrollPosition: 0 })
      this.props.handleToTop(false)
    }else if(window.pageYOffset >= 600){
      this.setState({ scale: 0 })
      this.props.handleToTop(true)
    }else{
      if(window.pageYOffset > 0){
        this.props.handleToTop(true)
        this.setState({ scale: this.state.scale + 0.4, scrollPosition: 0 })
      }else{
        this.props.handleToTop(true)
        this.setState({ scale: this.state.scale - 0.5, scrollPosition: 0 })
      }
    }

  }

  render(){
    return (
      <motion.div id={'navbar'} className={'intro-container'} ref={this.element}>

        <motion.div animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0, 135, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%", "50%"],
          }}
          transition={{ duration: 1 }}
          className={'avatar-container'}
        >
          <motion.img
            src={'https://avatars3.githubusercontent.com/u/5992751?s=460&u=01873cd9275344ec8c6198676d70b506a0f6dd2b&v=4'}
            alt={''}
            initial={{
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            transition={{ delay: 1.5 }}
            className={'avatar'} draggable={'false'}
          />
        </motion.div>


        <motion.h2
         intial= {{
           scale: 0,
           opacity: 0
         }}
         animate={{
          fontSize: 70,
          color: 'rgba(253, 177, 177, 1)',
          scale: 1,
          opacity: 1
        }}
        transition={{ delay: 2, duration: 0.5 }}
        className={'intro'} ref={this.myRef} >
          Hey There!
        </motion.h2>

        <motion.span className={'clickme'} animate={{
            scale: 0.5,
            y: 200
          }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 0.6, duration: 0.5 }}
        >
          <Link to={'skills'}
            smooth={true}
            offset={0}
            duration={300}>
            <img src={'/expand-arrow-100.png'} draggable={'false'} alt={''} />
          </Link>
        </motion.span>



      </motion.div>
    )
  }
}
