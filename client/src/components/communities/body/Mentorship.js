import MentorshipIcon from "../images/Mentorship.png";
import { Post } from "./Post.js";
import { BodyHeader } from "../../toolbox/header/BodyHeader.js";
import { CreatePost } from "./CreatePost";
import { useEffect, useState } from "react";
import { getFeedPost } from "../../../utils.js";
import "./ProjectCollaboration.css";
export function Mentorship() {
  let description =
    "A networking hub for Computer Science students and industry professionals to establish mentor-mentee relationships, fostering direct connections and supporting professional growth.";
  let titleArr = [MentorshipIcon, "Mentorship", description];
  const forum = "Mentorship";
  const [posts, setPosts] = useState([]);
  const [startingIndex, setStartingIndex] = useState(0);
  const [top, setTop] = useState(false);
  const [created, setCreated] = useState(true);
  useEffect(() => {
    getPosts();
  }, [top, created]);
  const getPosts = async () => {
    try {
      const resp = await getFeedPost(
        top,
        forum,
        localStorage.getItem("userToken")
      );
      setPosts(resp);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };
  const nextClick = () => {
    setStartingIndex(
      posts.length - 1 < startingIndex + 5 ? startingIndex : startingIndex + 5
    );
  };
  const prevClick = () => {
    setStartingIndex(0 > startingIndex - 5 ? 0 : startingIndex - 5);
  };
  const latestClick = () => {
    setPosts([]);
    setTop(false);
  };
  const topClick = () => {
    setPosts([]);
    setTop(true);
  };
  return (
    // <>
    //   <BodyHeader titleArr={titleArr} />
    //   <CreatePost />
    // </>
    <div className="ProjectCollab-body">
      <BodyHeader titleArr={titleArr} />
      <CreatePost
        setPosts={setPosts}
        setCreated={setCreated}
        created={created}
        forum={forum}
      ></CreatePost>
      <div className="post-nav-container">
        <div className="post-nav-buttons">
          <div className="latest-top-container">
            <button onClick={latestClick} className="blue-nav-button">
              Latest
            </button>
            <button onClick={topClick} className="blue-nav-button">
              Top
            </button>
          </div>
          <div className="prev-next-container">
            <button onClick={prevClick} className="black-nav-button">
              Prev
            </button>
            <button onClick={nextClick} className="black-nav-button">
              Next
            </button>
          </div>
        </div>
        <div className="page-number">
          <div>Page {Math.floor(startingIndex / 5 )+ 1}</div>
        </div>
      </div>
      {posts.map((post, index) => {
        if (index >= startingIndex && index < startingIndex + 5) {
          return <Post post={post}></Post>;
        }
      })}
    </div>
  );
}
