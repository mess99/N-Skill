import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./story.css";
const Story = ({ loadTheStory, getTheStory }) => {
  const [res, setRes] = useState([]);
  const [correction, setCorrection] = useState(false);

  const location = useLocation();
  const storyId = location.state?.props;
  useEffect(() => {
    loadTheStory(storyId);
  }, []);
  //   console.log(getTheStory);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCorrection(true);
    window.scroll(0, 0);
  };
  return (
    <div className="story">
      <h1 className="story__title">{getTheStory?.title} </h1>
      <img
        className="story__image"
        src={getTheStory?.image}
        alt={getTheStory?.title}
      />
      <p className="story__content">{getTheStory?.content}</p>
      <div className="story__questions">
        <form onSubmit={handleSubmit}>
          {getTheStory?.Storyquestions.map((question) => (
            <div key={question.id} className="story__question">
              <p>{question.contentQuestion}</p>
              {question.StoryResponses.map((responses) => {
                if (correction) {
                  const styleTrue = responses.is_true
                    ? { color: "green" }
                    : { color: "red" };
                  return (
                    <div key={responses.id} className="responses">
                      <input
                        onChange={(e) => setRes([...res, e.target.value])}
                        value={responses.content}
                        type="radio"
                        id={responses.id}
                      />
                      <label style={styleTrue} htmlFor={responses.id}>
                        {responses.content}
                      </label>
                    </div>
                  );
                } else {
                  return (
                    <div key={responses.id} className="responses">
                      <input
                        onChange={(e) => setRes([...res, e.target.value])}
                        value={responses.content}
                        type="radio"
                        id={responses.id}
                      />
                      <label htmlFor={responses.id} className="response">
                        {responses.content}
                      </label>
                    </div>
                  );
                }
              })}
            </div>
          ))}
          <button className="story__submit" type="submit">
            valider
          </button>
        </form>
      </div>
    </div>
  );
};

export default Story;
