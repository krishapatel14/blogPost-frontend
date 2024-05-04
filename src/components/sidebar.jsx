import React from 'react'
import './css/style.css'
// import home from './images/home.svg'
// import explore from './images/explore.svg'
// import notification from './images/notifications.svg'
// import messages from './images/messages.svg'
// import bookmark from './images/bookmarks.svg'
// import logo from './images/twitter.svg'
// import list from './images/lists.svg'
// import profile from './images/profile.svg'
// import more from './images/more.svg'


const sidebar = () => {
  return (
    <>
  <div className="menu">
    <div className="menu-structure">
      <ion-icon name="logo-twitter" className="icon main-icon" />
      <div className="menu-item">
        <ion-icon name="home-outline" className="icon" />
        <h2 className="menu-heading">Home</h2>
      </div>
      <div className="menu-item">
        <ion-icon name="globe-outline" className="icon" />
        <h2 className="menu-heading">Explore</h2>
      </div>
      <div className="menu-item">
        <ion-icon name="notifications-outline" className="icon" />
        <h2 className="menu-heading">Notifications</h2>
      </div>
      <div className="menu-item">
        <ion-icon name="mail-outline" className="icon" />
        <h2 className="menu-heading">Messages</h2>
      </div>
      <div className="menu-item">
        <ion-icon name="bookmark-outline" className="icon" />
        <h2 className="menu-heading">Bookmarks</h2>
      </div>
      <div className="menu-item">
        <ion-icon name="list-outline" className="icon" />
        <h2 className="menu-heading">Lists</h2>
      </div>
      <div className="menu-item">
        <ion-icon name="person-circle-outline" className="icon" />
        <h2 className="menu-heading">Profile</h2>
      </div>
      <div className="menu-item">
        <ion-icon name="ellipsis-horizontal-circle-outline" className="icon" />
        <h2 className="menu-heading">More</h2>
      </div>
      <button className="tweet-btn">Post</button>
    </div>
    
  </div>
  {/* </div> */}
</>

  )
}

export default sidebar