import React, { useState, useEffect, PureComponent } from "react";
import axios from "./axios";
import Post from "./Post";
import "./Feed.css";
import moment from "moment";

class Feed extends PureComponent {
  componentDidMount = async () => {
    const request = await axios.get();
    console.log(request);
    this.setState({ posts: request.data });
  };
  state = {
    posts: [],
    likeSort: true,
    timeSort: true,
  };

  sort = (type, asc) => {
    const { posts } = this.state;
    let orderedPosts = [];
    console.log(type, asc);
    if (type == "timestamp") {
      this.setState({ timeSort: asc });
      orderedPosts = posts.sort((a, b) =>
        asc
          ? moment(a[type]) - moment(b[type])
          : moment(b[type]) - moment(a[type])
      );
    } else {
      this.setState({ likeSort: asc });
      orderedPosts = posts.sort((a, b) =>
        asc ? a[type] - b[type] : b[type] - a[type]
      );
    }
    this.setState({
      posts: orderedPosts,
    });
    window.scrollTo(0, 0);
  };
  render() {
    const { posts, likeSort, timeSort } = this.state;
    console.log(posts, moment());
    return (
      <div>
        <div className="header">
          <div className="title">Instagram</div>
          <div className="sorting">
            <div className="header__likes">
              Likes
              <span
                className="sorting__post"
                onClick={() => this.sort("likes", !likeSort)}
              >
                {likeSort ? "Asc" : "Dsc"}
              </span>
            </div>
            <div className="time_stamp">
              Time
              <span
                className="sorting__post"
                onClick={() => this.sort("timestamp", !timeSort)}
              >
                {timeSort ? "Asc" : "Dsc"}
              </span>
            </div>
          </div>
        </div>
        <div className="feed">
          {this.state.posts?.map((post) => (
            <Post {...post} />
          ))}
        </div>
      </div>
    );
  }
}

export default Feed;
