import ProjectCollabIcon from "../images/Project-Collab.png";
import { Post } from "./Post.js";
import { BodyHeader } from "../../toolbox/header/BodyHeader";
import { useEffect, useState } from "react";
import { getFeedPost } from "../../../utils.js";
import { CreatePost } from "./CreatePost";
import "./ProjectCollaboration.css";

export function ProjectCollab() {
  let description =
    "Project Collaboration is a focused forum for student projects. Here, you can ask project-related questions, exchange ideas, or find team members for your projects. A practical platform for project discussion and team formation. Utilize this space for effective collaboration and knowledge exchange.";
  let titleArr = [ProjectCollabIcon, "Project Collaboration", description];
  const forum = "ProjectCollaboration";
  const [posts, setPosts] = useState([]);
  const [startingIndex, setStartingIndex] = useState(0);
  const [top, setTop] = useState(false);
  const [created, setCreated] = useState(true);
  const [deleted, setDeleted] = useState(false);
  useEffect(() => {
    getPosts();
  }, [top, created, deleted]);
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
    <div className="content">
      <BodyHeader titleArr={titleArr} />
      <CreatePost
        setPosts={setPosts}
        setCreated={setCreated}
        created={created}
        forum={forum}
      ></CreatePost>
      <div className="post-nav-container">
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
          <div className="page-number">
            <div>Page {Math.floor(startingIndex / 5) + 1}</div>
          </div>
          <button onClick={nextClick} className="black-nav-button">
            Next
          </button>
        </div>
      </div>
      {posts.map((post, index) => {
        if (index >= startingIndex && index < startingIndex + 5) {
          return (
            <Post
              post={post}
              setPosts={setPosts}
              deleted={deleted}
              setDeleted={setDeleted}
            ></Post>
          );
        }
      })}
    </div>
  );
}
