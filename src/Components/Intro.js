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
    // document.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    // document.removeEventListener('scroll', this.handleScroll)
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
      <motion.div className={'intro-container'} ref={this.element}>

        <motion.div animate={{
          scale: this.state.scale,
          rotate: 135
        }} className={'avatar-container'}>
          <motion.img
            src={'https://avatars3.githubusercontent.com/u/5992751?s=460&u=01873cd9275344ec8c6198676d70b506a0f6dd2b&v=4'}
            alt={''}
            animate={{
              rotate: 225,
              scale: 1
            }}
            className={'avatar'} />
        </motion.div>


        <motion.h1 animate={{
          fontSize: 70,
          color: 'rgba(253, 177, 177, 1)'
        }} className={'intro'} ref={this.myRef} >
          Hey There!
        </motion.h1>

        <Link to={'skills'}
          smooth={true}
          offset={0}
          duration= {500}>
          <motion.h3 className={'clickme'} animate={{
            scale: 2,
            y: 200
          }}>
            downarrow
          </motion.h3>
        </Link>

      </motion.div>
    )
  }
}
