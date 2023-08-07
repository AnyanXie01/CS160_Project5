// import mongoose from "mongoose";

// const postSchema = mongoose.Schema(
//   {
//     userId: {
//       type: String,
//       required: true,
//     },
//     firstName: {
//       type: String,
//       required: true,
//     },
//     lastName: {
//       type: String,
//       required: true,
//     },
//     title: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     likes: {
//       // {person1:true ...} if someone likes it, it exist, otherwise, not exist.
//       type: Map,
//       // the value is always true.
//       of: Boolean,
//     },
//     comments: {
//       type: Array,
//       default: [],
//     },
//   },
//   { timestamps: true }
// );

// export const CareerExperiencePost = mongoose.model(
//   "CareerExperiencePost",
//   postSchema,
//   "CareerExperiencePostCollection"
// );
// export const MentorshipPost = mongoose.model(
//   "MentorshipPost",
//   postSchema,
//   "MentorshipPostCollection"
// );
// export const PeerInterviewsPost = mongoose.model(
//   "PeerInterviewsPost",
//   postSchema,
//   "PeerInterviewsPostCollection"
// );
// export const ProjectCollaborationPost = mongoose.model(
//   "ProjectCollaborationPost",
//   postSchema,
//   "ProjectCollaborationPostCollection"
// );
