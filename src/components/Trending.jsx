import React from 'react'
import './css/trending.css';
import { Button } from '@mui/material';

export const Trending = () => {
  return (
    <>
    <div className="notifymain">
      <div className="search">
        <i className="fa-solid fa-magnifying-glass iconn search_icon" />
        <input type="text" placeholder="Search" className="search_input" />
      </div>

      <div className="subscribe">
        <div className="heading">Subscribe to Premium</div>
        <p className="sub_para">
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <Button className='sub_button'>Subscribe</Button>
      </div>

      <div className="trends">
        <div className="t_heading">What's Happening</div>

        <div className="trend_lists">
          <div className="type">Politics</div>
          <div className="title">#LokSabha</div>
          <div className="tag">1.2k posts</div>
        </div>

        <div className="trend_lists">
          <div className="type">Sports</div>
          <div className="title">#Klopp</div>
          <div className="tag">1.2k posts</div>
        </div>

        <div className="trend_lists">
          <div className="type">Entertain</div>
          <div className="title">#Kapilsharma</div>
          <div className="tag">1.2k posts</div>
        </div>

        <div className="trend_lists">
          <div className="type">Knowledge</div>
          <div className="title">#Dhruvrathee</div>
          <div className="tag">1.2k posts</div>
        </div>

        <div className="trend_lists">
          <div className="type">Trending In India</div>
          <div className="title">#StockMarket</div>
          <div className="tag">1.2k posts</div>
        </div>
      </div>

      <div className="recommends">
      <div className="f_heading">Who to Follow</div>
        <div className="reommend_acc">
        <div className="useracc">
       

        <div className="uprofile"></div>
              <div className="username">Microsoft
              <span className="uid">@microsoft</span></div>
            </div>
            <div className="followbtn">Follow</div>
        </div>
        <div className="reommend_acc">
        <div className="useracc">
        <div className="uprofile"></div>
              <div className="username">Amazon
              <span className="uid">@amazon</span></div>
            </div>
            <div className="followbtn">Follow</div>
        </div>
        <div className="reommend_acc">
        <div className="useracc">
        <div className="uprofile"></div>
              <div className="username">Forbes
              <span className="uid">@forbes</span></div>
            </div>
            <div className="followbtn">Follow</div>
        </div>
      </div>
    </div>
  </>
  )
}
