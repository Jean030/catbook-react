import React, { useState, useEffect } from "react";
import SingleStory from "../modules/SingleStory";
// TODO (step4): import NewStory
// TODO (step6): remove SingleStory import, import Card

const Feed = () => {
  // TODO (step2): define a state called "stories" to hold stories
  const [stories, setStories] = useState([]);
  // TODO (step4): implement a callback function addNewStory that adds a
  // new story to the stories state

  useEffect(() => {
    // TODO (step2): assign HARDCODED dummy values to the stories state
    // a story should be an object of the form:
    // {
    //   _id: "some random string of letters",
    //   creator_name: "creator name",
    //   content: "story content",
    // }
    const story1 = { _id: "1", creator_name: "person1", content: "story1" };
    const story2 = { _id: "2", creator_name: "person2", content: "story2" };
    const story3 = { _id: "3", creator_name: "person3", content: "story3" };
    const hardcodedStories = [story1, story2, story3];
    setStories(hardcodedStories);
  }, []);

  return (
    <div>
      <SingleStory _id="test_id" creator_name="test_creator_name" content="test_content" />
      {JSON.stringify(stories)}
    </div>
  );
  // TODO (step2): render a SingleStory with hardcoded props

  // TODO (step3): map the state to SingleStory components
  // TODO (step4): add in the NewStory component and pass down addStory as a prop
  // TODO (step6): use Card instead of SingleStory, passing down the same props
};

export default Feed;
