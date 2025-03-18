// TODO (step0) import mongoose
import mongoose from "mongoose";

// TODO (step0) define your Comment schema
const CommentSchema = new mongoose.Schema({
  creator_name: String,
  parent: String,
  content: String,
});

// TODO (step0) create and export the model for the Comment schema
module.exports = mongoose.model("Comment", CommentSchema);
