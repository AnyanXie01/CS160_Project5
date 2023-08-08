import "./CreatePost.css";
import updloadImageIcon from "./images/image.png";
import { createPost } from "../../../utils.js";
import { useEffect, useState } from "react";

export const CreatePost = (props) => {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const fixPicturePath = (path) => {
    if (path === "") {
      return undefined;
    }
    const parts = path.split(/[\\\/]/);
    return parts[parts.length - 1];
  };
  const handleTitleChange = (event) => {
    setTitleValue(event.target.value);
  };

  const handleContentChange = (event) => {
    setContentValue(event.target.value);
  };

  const calculateTextareaHeight = (value) => {
    return { height: `${value.split("\n").length * 30}px` };
  };
  const handleClick = async () => {
    const title = titleValue;
    const description = contentValue;
    const picture = document.getElementById("file-input").value;
    if (!localStorage.getItem("loggedIn")) {
      alert("Please log in first");
      return;
    }
    if (title === null || description === null) {
      alert("Please enter title & description.");
      return;
    }
    const data = {
      userId: localStorage.getItem("userId"),
      description: description,
      picturePath: fixPicturePath(picture),
      userPicturePath: localStorage.getItem("userPicturePath"),
      title: title,
      forum: props.forum,
    };
    try {
      const resp = await createPost(data, localStorage.getItem("userToken"));
      alert("Successfully created!");
      props.setPosts([]);
      props.setCreated(!props.created);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };
  return (
    <div className="post-form">
      <textarea
        id="postHeader"
        name="postHeader"
        type="text"
        className="auto-expanding-textarea"
        placeholder="Enter the title"
        value={titleValue}
        onChange={handleTitleChange}
        style={calculateTextareaHeight(titleValue)}
      />
      <textarea
        id="postText"
        name="postText"
        type="text"
        className="auto-expanding-textarea"
        placeholder="Create a post"
        value={contentValue}
        onChange={handleContentChange}
        style={calculateTextareaHeight(contentValue)}
      />

      <div class="image-upload">
        <label for="file-input">
          <img
            src={updloadImageIcon}
            alt="upload image"
            style={{ width: "56px", height: "56px" }}
          />
        </label>
        <input
          type="file"
          id="file-input"
          name="postPicture"
          accept="image/*"
        />
        <button type="submit" className="submit-button" onClick={handleClick}>
          Post
        </button>
      </div>
    </div>
  );
};
