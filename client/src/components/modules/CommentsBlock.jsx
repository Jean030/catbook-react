import React from "react";
import SingleComment from "./SingleComment";
import { NewComment } from "./NewPostInput";

/**
 * @typedef ContentObject
 * @property {string} _id of story/comment
 * @property {string} creator_name
 * @property {string} content of the story/comment
 */

/**
 * Component that holds all the comments for a story
 *
 * Proptypes
 * @param {ContentObject[]} comments
 * @param {ContentObject} story
 */
const CommentsBlock = () => {
  return (
    <div className="Card-commentSection">
      <div className="story-comments">
        <SingleComment _id="commentid1" creator_name="person1" content="comment1" />
        <NewComment />
      </div>
    </div>
  );
};

export default CommentsBlock;
