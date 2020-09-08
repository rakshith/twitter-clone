import "./TweetBox.css";

import React, { useState } from "react";
import { Button, Avatar } from "@material-ui/core";
import db from "./firebase";
function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Raj",
      username: "quake",
      verified: true,
      text: tweetMessage,
      avatar:
        "https://lh3.googleusercontent.com/ogw/ADGmqu9dGsLCeGlOFsFJuaRdGv_GFvxQDgcrI6V-5KuQ=s64-c-mo",
      image: tweetImage,
    });
  };

  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu9dGsLCeGlOFsFJuaRdGv_GFvxQDgcrI6V-5KuQ=s64-c-mo" />

          <input
            type="text"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="what's happening?"
          />
        </div>
        <input
          className="tweetBox__inputImage"
          type="text"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          placeholder="Optional: Enter image URL"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
