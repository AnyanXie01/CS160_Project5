import "./CreatePost.css";
import updloadImageIcon from "./images/image.png";
import { createPost } from "../../../utils.js";
import { useEffect, useState } from "react";

export const CreatePost = (props) => {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const pictureArray = [
    "Profile.png",
    "proj4_1.png",
    "proj4_2.png",
    "proj4_3.png",
    "sc2.png",
    "place-holder.png",
  ];
  const fixPicturePath = (path) => {
    if (path === "") {
      return "";
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
    return { height: `${value.split("\n").length * 24}px` };
  };
  const handleClick = async () => {
    const title = titleValue;
    const description = contentValue;
    const picture = document.getElementById("file-input").value;
    if (picture !== "" && !pictureArray.includes(fixPicturePath(picture))) {
      alert(
        "Upload picture feature is in progress. Please choose the picture from src/picture folder."
      );
      return;
    }
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
      setTitleValue("");
      setContentValue("");
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
        placeholder="Title"
        value={titleValue}
        onChange={handleTitleChange}
        style={{
          ...calculateTextareaHeight(titleValue),
          fontSize: "20px",
          fontWeight: 700,
          padding: 5,
          background: "var(--background-secondary, #FAFAFA",
        }}
      />

      <textarea
        id="postText"
        name="postText"
        type="text"
        className="auto-expanding-textarea"
        placeholder="Post content"
        value={contentValue}
        onChange={handleContentChange}
        style={{
          ...calculateTextareaHeight(contentValue),
          background: "var(--background-secondary, #FAFAFA",
          padding: 5,
        }}
      />

      <div class="image-upload">
        <label for="file-input">
          <img
            src={updloadImageIcon}
            alt="upload image"
            style={{ width: "56px", height: "56px", cursor: "pointer" }}
          />
        </label>
        <input
          type="file"
          id="file-input"
          name="postPicture"
          accept="image/*"
        />
        <button
          type="submit"
          className="submit-button"
          aria-label="Submit button"
          onClick={handleClick}
        >
          Post
        </button>
      </div>
    </div>
  );
};
