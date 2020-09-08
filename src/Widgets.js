import "./Widgets.css";

import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1303357281115889664"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="rakshith89"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.instagram.com/rakshith.raj.s/"}
          option={{ text: "#reactjs is awesome", via: "matrixrak" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
