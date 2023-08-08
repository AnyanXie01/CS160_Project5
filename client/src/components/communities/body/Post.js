import "./Post.css";
import { useEffect, useState } from "react";
import heartIcon from "./images/heart.png";
import commentIcon from "./images/comment.png";
import { likePost, makeComment } from "../../../utils.js";
export const Post = (props) => {
  const [post, setPost] = useState(props.post);
  const [userName, setUserName] = useState(
    `${localStorage.getItem("userPicturePath")}: `
  );
  const [likeNumber, setLikeNumber] = useState(Object.keys(post.likes).length);
  const [comments, setComments] = useState(post.comments);
  const [hideComment, setHideComments] = useState(true);
  const [imageUrl, setImageUrl] = useState(
    post.picturePath !== undefined
      ? require("../../../pictures/" + post.picturePath)
      : null
  );
  const [userImageUrl, setuserImageUrl] = useState(
    props.post.userPicturePath !== undefined
      ? require("../../../pictures/" + props.post.userPicturePath)
      : null
  );
  const handleLikes = async () => {
    //(postId, userId, userToken)
    try {
      const resp = await likePost(
        post._id,
        localStorage.getItem("userId"),
        localStorage.getItem("userToken")
      );
      setPost(resp);
      setLikeNumber(Object.keys(resp.likes).length);
      alert("Successfully like / dislike!");
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };
  const handleMakeComment = async () => {
    const subComment = document.getElementById("comment_input").value;
    try {
      setComments([]);
      const resp = await makeComment(
        post._id,
        `${userName}${subComment}`,
        localStorage.getItem("userToken")
      );
      setPost(resp);
      setComments(resp.comments);
      document.getElementById("comment_input").value = "";
      alert("Successfully make comment!");
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };
  const handleHideComment = () => {
    setHideComments(!hideComment);
  };

  const [contentValue, setContentValue] = useState("");
  const handleContentChange = (event) => {
    setContentValue(event.target.value);
  };
  const calculateTextareaHeight = (value) => {
    return { height: `${value.split("\n").length * 20}px` };
  };

  const getUserPicturePathFromComment = (cmt) => {
    return cmt.split(":")[0];
  };
  const getUserCommentFromComment = (cmt) => {
    return cmt.split(":")[1];
  };
  useEffect(() => {}, [comments]);

  return (
    <>
      <div className="post-container">
        <div className="user-container">
          <img src={userImageUrl} style={{ width: "40px", height: "40px" }} />
          <div>{userName}</div>
        </div>

        <div className="header">{post.title}</div>
        {imageUrl && <img src={imageUrl} style={{ width: "60%" }} />}
        <p>{post.description}</p>
        <div className="heart-comment-container">
          <button>
            <img
              src={heartIcon}
              style={{ width: "20px", height: "20px" }}
              onClick={handleLikes}
            />
            {likeNumber}
          </button>
          <button onClick={handleHideComment}>
            <img src={commentIcon} style={{ width: "20px", height: "20px" }} />
            {comments.length}
          </button>
        </div>
        {hideComment ? null : (
          <div className="comment-container">
            <div className="add-comment-container">
              <textarea
                id="comment_input"
                name="comment"
                type="text"
                className="auto-expanding-textarea"
                placeholder="Add a comment"
                value={contentValue}
                onChange={handleContentChange}
                style={calculateTextareaHeight(contentValue)}
              />
              <button onClick={handleMakeComment} className="submit-button">
                {" "}
                submit{" "}
              </button>
            </div>

            {comments.map((cmt) => {
              return <div className="comment-Block">{cmt}</div>;
            })}
          </div>
        )}
      </div>
    </>
  );
};
