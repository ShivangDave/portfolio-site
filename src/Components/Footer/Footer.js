import React from 'react';

export default () => {

  return (
    <footer className={'footer-container'}>
      <div className={'footer-content'}>
        <div className={'footer-top'}>
          <div className={'footer-brand'}>
            <h3>Shivang Dave</h3>
            <p>
              mail@shivangdave.com
            </p>
          </div>
          
          <div className={'footer-col'}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#timeline">Career</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          <div className={'footer-col'}>
            <h4>Social</h4>
            <div className={'footer-socials'}>
              <a href="https://github.com/ShivangDave" target="_blank" rel="noopener noreferrer" className={'social-link'} title="GitHub">
                <img src="/img/github.png" alt="GitHub" />
              </a>
              <a href="https://linkedin.com/in/dshivang" target="_blank" rel="noopener noreferrer" className={'social-link'} title="LinkedIn">
                <img src="/img/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="https://twitter.com/___Shivang___" target="_blank" rel="noopener noreferrer" className={'social-link'} title="Twitter">
                <img src="/img/twitter.png" alt="Twitter" />
              </a>
            </div>
          </div>
        </div>

        <div className={'footer-bottom'}>
          <p>No cookies were baked in the making of this site.</p>
        </div>
      </div>
    </footer>
  )
}

