import React from 'react'
import Sidebarroe from "./Sidebarroe"
import "./Sidebar.css"
import LocalHospitalIcon from "@mui/icons-material/LocalHospital"
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags"
import PeopleIcon from "@mui/icons-material/People"
import ChatIcon from "@mui/icons-material/Chat"
import StorefrontIcon from "@mui/icons-material/Storefront"
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary"
import ExpanMoreOutlined from "@mui/icons-material/ExpandMoreOutlined"




function Sidebar() {
  return (
    <div className='Sidebar'>
      <Sidebarroe src={"https://avatars.githubusercontent.com/u/146048804?v=4"} title = {"Sarvajeet Singh"}/>
      <Sidebarroe Icon={LocalHospitalIcon} title="COVID-19 Inforrmation center"/>
      <Sidebarroe Icon={EmojiFlagsIcon} title="pages" />
      <Sidebarroe Icon={PeopleIcon} title="Friends"/>
      <Sidebarroe Icon={StorefrontIcon} title="MarketPlace" />
      <Sidebarroe Icon={VideoLibraryIcon} title="Videos" />
      <Sidebarroe Icon={ExpanMoreOutlined} title="Marketplace" />

    </div>
  )
}

export default Sidebar