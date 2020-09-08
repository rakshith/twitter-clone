import "./TweetBox.css";

import React from "react";
import { Button, Avatar } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu9dGsLCeGlOFsFJuaRdGv_GFvxQDgcrI6V-5KuQ=s64-c-mo" />

          <input type="text" placeholder="what's happening?" />
        </div>
        <input
          className="tweetBox__inputImage"
          type="text"
          placeholder="Optional: Enter image URL"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
