import React from 'react';
import { motion } from "framer-motion"
import _ from 'lodash';

export default class Intro extends React.Component {

  constructor(){
    super()
    this.element = React.createRef();

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
    console.log(e.target)
    console.log(window.pageYOffset)

    if(window.pageYOffset <= 0){
      this.setState({ scale: 1, scrollPosition: 0 })
    }else if(window.pageYOffset >= 600){
      this.setState({ scale: 0 })
    }else{
      if(window.pageYOffset > 0){
        this.setState({ scale: this.state.scale + 0.065, scrollPosition: 0 })
      }else{
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

        </motion.div>

        <motion.h1 animate={{
          fontSize: 70,
          color: 'rgba(253, 177, 177, 1)'
        }} className={'intro'} ref={this.myRef} >
          Hey There!
        </motion.h1>

        <motion.a animate={{
          scale: 2,
          y: 200
        }} href={'#skills'} className={'clickme'} ref={this.myRef} >
          downarrow
        </motion.a>

      </motion.div>
    )
  }
}
