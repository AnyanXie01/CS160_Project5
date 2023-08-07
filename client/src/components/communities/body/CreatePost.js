import updloadImageIcon from "./images/image.png";
import "./CreatePost.css";
import { useState } from "react";

export function CreatePost(){
    const [titleValue, setTitleValue] = useState('');
    const [contentValue, setContentValue] = useState('');

    const handleTitleChange = (event) => {
        setTitleValue(event.target.value);
    };
    
    const handleContentChange = (event) => {
        setContentValue(event.target.value);
    };
  
    const calculateTextareaHeight = (value) => {
        return { height: `${value.split('\n').length * 20}px` };
    };
    
    return (
            <form className="post-form">
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
                        <img src={updloadImageIcon} alt="upload image" style={{width:"56px", height:"56px"}}/>
                    </label>
                    <input type="file" id="file-input" name="postPicture" accept="image/*"/>
                    <button type="submit" className="submit-button">Post</button>
                </div>
            </form>)
}