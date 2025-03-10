import React from "react";
import Card from "./Card.css";
// TODO (step1): import Card.css

/**
 * Story is a component that renders creator and content of a story
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} content of the story
 */
const SingleStory = (props) => {
  return (
    <div className="Card-story">
      <span className=".u">{props.creator_name}</span>
      <p className=".Card-storyContent">{props.content}</p>
      {/* TODO (step1): use JSX and props to render story creator and content */}
    </div>
  );
};

export default SingleStory;
