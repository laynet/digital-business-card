import React from 'react'
import profilePic from '../images/layne.jpeg'


const Info = () => {
  return (
    <div class="info">
        <img src={profilePic} alt=""></img>
        <h1>Layne Taylor</h1>
        <h4>Junior Web Developer</h4>
        <button className="btn email-btn"><i class="fa-solid fa-envelope"></i>email</button>
        <button className="btn linkedin-btn"><i class="fa-brands fa-linkedin"></i>linkedin</button>
    </div>
  )
}

export default Info