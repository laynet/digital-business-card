import React from 'react'
import profilePic from '../images/layne.jpeg'
import mailIcon from '../images/Mail.png';
import linkinedinIconBtn from '../images/linkedin.png';


const Info = () => {
  return (
    <div class="info">
        <img src={profilePic} alt="" className="hero--image"></img>
        <h1>Layne Taylor</h1>
        <h4>Junior Web Developer</h4>
        <div className="flex">
          <a  href="mailto:layneingramtaylor@gmail.com" className="btn email-btn flex"><img src={mailIcon} alt=""/>Email</a>
          <a href="https://www.linkedin.com/in/layne-taylor/" target="blank" className="btn linkedin-btn flex"><img src={linkinedinIconBtn} alt=""/>Linkedin</a>
        </div>
        
    </div>
  )
}

export default Info