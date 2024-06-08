import React from 'react'
import  Sidebar  from './sidebar';
import BlogPost from './blogPost';
import Feeds from './feeds';
import { Trending } from './Trending';
import './css/screen.css'

 const screen = () => {
  return (
    <div className="main">
        <div className="nonscroll">
           <Sidebar/>
       </div>
       <div className="scroll_content">
          <BlogPost/>
          <Feeds/>
          
       </div>
       <div className='trending'>
       <Trending/>
       </div>
      </div>
  )
}
export default screen;
