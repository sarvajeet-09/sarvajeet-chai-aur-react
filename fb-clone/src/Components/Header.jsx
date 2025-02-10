import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search'; 
import HomeIcon from '@mui/icons-material/Home';  
import FlagIcon from '@mui/icons-material/Flag';  
import SubscriptionOutlinedIcon from "@mui/icons-material/SubscriptOutlined"
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined"
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle"
import { Avatar } from '@mui/material';
import {IconButton} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ForumIcon from "@mui/icons-material/Forum"
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
function Header() {
  return (
    <div className='Header'>
        <div className="header-left">
         <img src="https://s.yimg.com/fz/api/res/1.2/bfhuQx02Fd0qgLXZbH1dww--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/ff6c2336-05c2-34bf-8d42-c8eb48fbacf1/t_500x300" alt="facebbok-logo" />


        <div className="header-input">
          <SearchIcon/>
            <input type="text" placeholder='Search Facebook' />
        </div>


        </div>
        <div className="header-middle">
         <div className="header-option-active">
          <HomeIcon fontSize="large"/>
         </div>
         <div className="header-option">
          <FlagIcon fontSize="large"/>
         </div>
         <div className="header-option">
          <SubscriptionOutlinedIcon fontSize="large"/>
         </div>
         <div className="header-option">
          <StorefrontOutlinedIcon fontSize="large"/>
         </div>
         <div className="header-option">
          <SupervisedUserCircleIcon fontSize="large"/>
         </div>
        </div>
        <div className="header-right">
          <div className="header-info">
            <Avatar/>
            <h4>Sarvajeet</h4>
          </div>
          <IconButton>
            <AddIcon/>
          </IconButton>
          <IconButton>
            <ForumIcon/>
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon/>
          </IconButton>
          <IconButton>
            <ExpandMoreIcon/>
          </IconButton>
        </div>

    </div>
  )
}

export default Header