import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    forum: {
      type: Number,
      required: true,
    },
    description: String,
    picturePath: String,
    likes: {
      type: Map,
      of: Boolean,
    },
    comments: {
      type: Array,
      default: [],
    },
    members: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Project = mongoose("Project", ProjectSchema);
export default Project;
