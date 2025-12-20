import React from 'react';

export default () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className={'footer-container'}>
      <div className={'footer-content'}>
        <div className={'footer-top'}>
          <div className={'footer-brand'}>
            <h3>Shivang</h3>
            <p>
              Full-stack developer passionate about creating beautiful, 
              functional web experiences. Available for projects and collaborations.
            </p>
          </div>
          
          <div className={'footer-col'}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          <div className={'footer-col'}>
            <h4>Resources</h4>
            <ul>
              <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
              <li><a href="https://github.com/ShivangDave" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com/in/dshivang" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>

          <div className={'footer-col'}>
            <h4>Social</h4>
            <div className={'footer-socials'}>
              <a href="https://github.com/ShivangDave" target="_blank" rel="noopener noreferrer" className={'social-link'} title="GitHub">
                <span role="img" aria-label="GitHub">GH</span>
              </a>
              <a href="https://linkedin.com/in/dshivang" target="_blank" rel="noopener noreferrer" className={'social-link'} title="LinkedIn">
                <span role="img" aria-label="LinkedIn">in</span>
              </a>
              <a href="https://twitter.com/___Shivang___" target="_blank" rel="noopener noreferrer" className={'social-link'} title="Twitter">
                <span role="img" aria-label="Twitter">𝕏</span>
              </a>
            </div>
          </div>
        </div>

        <div className={'footer-bottom'}>
          <p>&copy; {currentYear} Shivang Dave. All rights reserved. Built with React & Modern Web Technologies.</p>
        </div>
      </div>
    </footer>
  )
}

