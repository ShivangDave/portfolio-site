import React from 'react';

export default ({ scrollY }) => {

  return (
    <section className={'intro-container'}>
      <div className={'intro-content'}>
        <h1 className={'intro-title'}>
          Crafting Digital
          <br />
          Experiences
        </h1>
        <p className={'intro-subtitle'}>
          Full-stack developer building beautiful, performant applications with modern technologies.
        </p>
        <div className={'intro-cta'}>
          <a href="#projects" className={'btn btn-primary'}>
            View My Work
          </a>
          <a href="#projects" className={'btn btn-secondary'}>
            Get In Touch
          </a>
        </div>
      </div>
      
      <div className={'intro-visual'}>
        <div className={'avatar-blob'}>
          <img src="/img/me.jpg" alt="Profile" onError={(e) => { e.target.src = '/img/github.png' }} />
        </div>
      </div>

      <div className={'scroll-indicator'}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5v10M12 19v2" stroke="currentColor" strokeLinecap="round"/>
          <path d="M7 12l5 5 5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}

