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

  const [posts, setPosts] = useState([]);
  const [startingIndex, setStartingIndex] = useState(0);
  const [top, setTop] = useState(false);
  const [created, setCreated] = useState(true);
  useEffect(() => {
    getPosts();
  }, [top, created]);
  const getPosts = async () => {
    try {
      const resp = await getFeedPost(top, localStorage.getItem("userToken"));
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
    <div className="ProjectCollab-body">
      <BodyHeader titleArr={titleArr} />
      <CreatePost
        setPosts={setPosts}
        setCreated={setCreated}
        created={created}
        forum={"ProjectCollaboration"}
      ></CreatePost>

      <div className="post-nav-buttons">
        <div className="latest-top-container">
          <button onClick={latestClick} className="blue-nav-button">Latest</button>
          <button onClick={topClick} className="blue-nav-button">Top</button>
        </div>
        <div className="prev-next-container">
          <button onClick={prevClick } className="black-nav-button">Prev</button>
          <button onClick={nextClick} className="black-nav-button">Next</button>
        </div>
      </div>

      <span>{startingIndex}</span>
      {posts.map((post, index) => {
        if (index >= startingIndex && index < startingIndex + 5) {
          console.log(post.userPicturePath);
          return <Post post={post}></Post>;
        }
      })}
    </div>
  );
}
