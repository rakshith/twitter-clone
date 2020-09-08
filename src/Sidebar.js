import "./Sidebar.css";

import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter icon */}
      <TwitterIcon className="sidebar_twitterIcon" />
      {/* Sidebar option */}
      <SidebarOption active Icon={HomeIcon} title={"Home"} />
      <SidebarOption Icon={SearchOutlinedIcon} title={"Explore"} />
      <SidebarOption
        Icon={NotificationsNoneOutlinedIcon}
        title={"Notification"}
      />
      <SidebarOption Icon={MailOutlineIcon} title={"Messages"} />
      <SidebarOption Icon={BookmarkBorderIcon} title={"Bookmarks"} />
      <SidebarOption Icon={ListAltIcon} title={"Lists"} />
      <SidebarOption Icon={PermIdentityIcon} title={"Profile"} />
      <SidebarOption Icon={MoreHorizIcon} title={"More"} />
      {/* Button ->Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth="100%">
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
