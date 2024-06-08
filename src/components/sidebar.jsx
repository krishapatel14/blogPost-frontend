import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import XIcon from '@mui/icons-material/X';
import SidebarLink from './SidebarLink';
import { Button } from '@mui/material';
import './sidebar.css'

const sidebar = () => {
  return (
    <div className='sidebar'>
    <XIcon />
    <SidebarLink text="Home" Icon={HomeIcon} />
    <SidebarLink text="Explore" Icon={SearchIcon} />
    <SidebarLink text="Notifications" Icon={NotificationsNoneIcon} />
    <SidebarLink text="Messages" Icon={MailOutlineIcon} />
    <SidebarLink text="Grok" Icon={ChatBubbleOutlineRoundedIcon} />
    <SidebarLink text="communities" Icon={PeopleOutlineIcon} />
    <SidebarLink text="premium" Icon={XIcon} />
    <SidebarLink text="Profile" Icon={PermIdentityIcon} />
    <SidebarLink text="More" Icon={MoreHorizOutlinedIcon}/>
    <Button id="tweet">
      Tweet
    </Button>
    <div className="account">
          <div className="pfp">K</div>
          <div className="id">
            <div className="name">Krisha Patel</div>
            <div className="uname">@krisha1403</div>
          </div>
        <div className="opt"><i className="fa-solid fa-ellipsis" /></div> 
        </div>
    </div>
  )
}

export default sidebar