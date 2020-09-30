import React from "react";
import "./Post.css";
import moment from "moment";

function Post({ Image, likes, timestamp }) {
  const time = moment().diff(moment(timestamp), "year");
  return (
    <div className="post">
      <img src={Image} className="post__image" />
      <div className="description">
        <div className="likes">
          <i class="fa fa-heart" aria-hidden="true"></i>{" "}
          <span>{likes} Likes</span>
        </div>
        <div className="time">{time} YEARS AGO</div>
      </div>
    </div>
  );
}

export default Post;
