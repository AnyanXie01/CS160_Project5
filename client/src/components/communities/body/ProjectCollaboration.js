import ProjectCollabIcon from "../images/Project-Collab.png";
import { Post } from "./Post.js";
import { BodyHeader } from "../../toolbox/header/BodyHeader";
import { useEffect, useState } from "react";
import { getFeedPost } from "../../../utils.js";
import { CreatePost } from "./CreatePost";

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
    <>
      <BodyHeader titleArr={titleArr} />
      <CreatePost
        setPosts={setPosts}
        setCreated={setCreated}
        created={created}
        forum={"ProjectCollaboration"}
      ></CreatePost>
      <button onClick={prevClick}>Previous</button>
      <button onClick={nextClick}>Next</button>
      <button onClick={latestClick}>latest</button>
      <button onClick={topClick}>top</button>
      <br></br>
      <br></br>
      <span>{startingIndex}</span>
      {posts.map((post, index) => {
        if (index >= startingIndex && index < startingIndex + 5) {
          return <Post post={post}></Post>;
        }
      })}
    </>
  );
}
