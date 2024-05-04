import React from 'react'
import './css/style.css'
import profile from './images/profile.svg'

const feeds = () => {
  return (
    <>
  <div className="tweet">
    <img
      src={profile}
      alt="user photo"
      className="tweeter-img"
    />
    <p className="tweeter-info">
      <span className="username">Amy Kelleher</span>
      <span className="usertag">@killeramy</span>
      <span className="tweeted-ago">32m</span>
    </p>
    <ion-icon name="ellipsis-horizontal-outline" className="settings-icon" />
    <p className="tweet-content">
      Got the job at Google! Someone congratulate me plz
    </p>
    <div className="tweet-menu">
      <div className="count-box">
        <ion-icon name="chatbubble-outline" />
        <span className="count">2</span>
      </div>
      <ion-icon name="git-compare-outline" />
      <div className="count-box">
        <ion-icon name="heart-outline" />
        <span className="count">8</span>
      </div>
      <ion-icon name="share-outline" />
    </div>
  </div>
  <div className="tweet">
    <img
      src={profile}
      alt="user photo"
      className="tweeter-img"
    />
    <p className="tweeter-info">
      <span className="username">Dave Jones</span>
      <span className="usertag">@robotman666</span>
      <span className="tweeted-ago">31m</span>
    </p>
    <ion-icon name="ellipsis-horizontal-outline" className="settings-icon" />
    <p className="tweet-content">
      Wow. I'm actually HYPED lmao
      <iframe
        width={360}
        height={215}
        src="https://www.youtube.com/embed/KydqdKKyGEk"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen=""
      />
    </p>
    <div className="tweet-menu">
      <ion-icon name="chatbubble-outline" />
      <ion-icon name="git-compare-outline" />
      <ion-icon name="heart-outline" />
      <ion-icon name="share-outline" />
    </div>
  </div>
  <div className="tweet">
    <img
      src={profile}
      alt="user photo"
      className="tweeter-img"
    />
    <p className="tweeter-info">
      <span className="username">Charlie Charles</span>
      <span className="usertag">@charlieboi</span>
      <span className="tweeted-ago">15m</span>
    </p>
    <ion-icon name="ellipsis-horizontal-outline" className="settings-icon" />
    <p className="tweet-content">
      <span className="reply-to">@killeramy</span> lol I just got fired from
      google so you're probably my replacement. hope u fail miserably
    </p>
    <div className="tweet-menu">
      <ion-icon name="chatbubble-outline" />
      <ion-icon name="git-compare-outline" />
      <ion-icon name="heart-outline" className="like" />
      <ion-icon name="share-outline" />
    </div>
  </div>
</>

)
}

export default feeds