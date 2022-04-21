import React from 'react'
import githubIcon from '../images/GitHub-Icon.png';
import twitterIcon from '../images/Twitter-Icon.png';
import linkedinIcon from '../images/Linkedin-dark.png'

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://www.linkedin.com/in/layne-taylor/" target="blank"><img src={linkedinIcon} alt="" className="icon" /></a>
      <a href="https://github.com/laynet" target="blank"><img src={githubIcon} alt="" className="icon"/></a>
      <a href="https://twitter.com/laynerzzzz" target="blank"><img src={twitterIcon} alt="" className="icon"/></a>
    </footer>
  )
}

export default Footer