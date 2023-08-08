import CareerExperienceIcon from "../images/Career-Exprience.png";
import { Post } from "./Post";
import { BodyHeader } from "../../toolbox/header/BodyHeader.js";
import { useEffect, useState } from "react";
import { getFeedPost } from "../../../utils.js";
import { CreatePost } from "./CreatePost";

export function CareerExperience() {
  let description =
    "A forum for industry professionals to share career insights and for Computer Science students to understand real-world job experiences. A platform for questions, advice, and understanding career paths in tech. Explore firsthand accounts that shape the industry.";
  let titleArr = [CareerExperienceIcon, "Career Experience", description];
  const forum = "CareerExperience";
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
          return <Post post={post}></Post>;
        }
      })}
    </div>
  );
}
