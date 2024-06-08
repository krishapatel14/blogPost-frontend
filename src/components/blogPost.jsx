import React from 'react'
import './css/style.css'
import profile from './images/profile.svg'

const blogPost = () => {
  return (
    <>
  <div className="tweet-box">
    <img src={profile} alt="user" />
    <input type='text' placeholder="What's happening?!"/>

    <div className="tweet-icons">
      <ion-icon name="image-outline" className="tweet-icon" />
      <ion-icon name="color-palette-outline" className="tweet-icon" />
      <ion-icon name="bar-chart-outline" className="tweet-icon" />
      <ion-icon name="happy-outline" className="tweet-icon" />
      <ion-icon name="calendar-number-outline" className="tweet-icon" />
      <ion-icon name="location-outline" className="tweet-icon" />
    </div>
    <button className="main-tweet-btn">Tweet</button>
  </div>
  <div className="underline" />
</>

  )
}

export default blogPost