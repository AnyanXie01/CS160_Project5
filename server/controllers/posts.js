import Post from "../models/Post.js";
import User from "../models/User.js";
// import { CareerExperiencePost } from "../models/ForumPost.js";

/* CREATE */
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath, title, forum } = req.body;
    const user = await User.findById(userId);
    console.log(user);
    console.log(user.userPicturePath);
    const newPost = new Post({
      userId: userId,
      firstName: user.firstName,
      lastName: user.lastName,
      title: title,
      description: description,
      forum: forum,
      userPictruePath: user.userPicturePath,
      picturePath: picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();

    const post = await Post.find(); // grabbing all posts from the DB.
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getFeedPosts = async (req, res) => {
  try {
    const { top } = req.params;

    if (top === "true") {
      const post = await Post.aggregate([
        {
          $addFields: {
            numberOfLikes: { $size: { $objectToArray: "$likes" } },
          },
        },
        {
          $sort: { numberOfLikes: -1 },
        },
      ]);
      console.log("-------------");
      console.log(post);
      res.status(200).json(post);
    } else {
      const post = await Post.find().sort({ createdAt: -1 });
      console.log("-------------");
      console.log(post);
      res.status(200).json(post);
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const likePost = async (req, res) => {
  try {
    const { id } = req.params; // comes from the /:id, the relevent post
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId); // get a copy of the array. real setting at line

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true } // what is this for?
    );
    post.save();
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const makeComment = async (req, res) => {
  try {
    const { id } = req.params; // comes from the /:id, the relevent post
    const { comment } = req.body;
    const post = await Post.findById(id);
    post.comments.push(comment);
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { comments: post.comments },
      { new: true } // what is this for?
    );
    post.save();
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
