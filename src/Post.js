import "./Post.css";

import React from "react";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu9dGsLCeGlOFsFJuaRdGv_GFvxQDgcrI6V-5KuQ=s64-c-mo" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Rakshith Raj{" "}
              <span>
                <VerifiedUserIcon className="post__badge" />
              </span>
            </h3>
          </div>
          <div class="post__headerDescription">
            <p>I challenge you to build a Twitter clone with React JS</p>
          </div>
        </div>
        <img
          src="https://www.awesomegifs.com/wp-content/uploads/WD-on-tour-GIF_1-FULL-FRAMES-Opto-skip-2-frames-andcompress-100.gif"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
