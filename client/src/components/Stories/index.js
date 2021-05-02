import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { filterStoryByTheme } from "../../utils";
import "./stories.css";

const Stories = ({ loadStories, getStories }) => {
  useEffect(loadStories, []);

  const shortStories = filterStoryByTheme(getStories.stories, "short");
  const fantasyStories = filterStoryByTheme(getStories.stories, "fantasy");
  const fableStories = filterStoryByTheme(getStories.stories, "fable");

  return (
    <div className="stories">
      <div className="stories__container">
        <h2 className="container__title">Short</h2>
        <div className="container__contain">
          <ul className="container__lists">
            {shortStories?.map((stories) => {
              const styleStory = {
                backgroundImage: `url("${stories.image}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
                flex: "0 0 auto",
                borderRadius: "12px",
              };
              return (
                <Link
                  key={stories.id}
                  to={{
                    pathname: "/stories/" + stories.id,
                    state: {
                      props: stories.id,
                    },
                  }}
                >
                  <li style={styleStory}></li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="stories__container">
        <h2 className="container__title">Fantasy</h2>
        <div className="container__contain">
          <ul className="container__lists">
            {fantasyStories?.map((stories) => {
              const styleStory = {
                backgroundImage: `url("${stories.image}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
                flex: "0 0 auto",
                borderRadius: "12px",
              };
              return (
                <Link
                  key={stories.id}
                  to={{
                    pathname: "/stories/" + stories.id,
                    state: {
                      props: stories.id,
                    },
                  }}
                >
                  <li style={styleStory}></li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="stories__container">
        <h2 className="container__title">Fable</h2>
        <div className="container__contain">
          <ul className="container__lists">
            {fableStories?.map((stories) => {
              const styleStory = {
                backgroundImage: `url("${stories.image}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
                flex: "0 0 auto",
                borderRadius: "12px",
              };
              return (
                <Link
                  key={stories.id}
                  to={{
                    pathname: "/stories/" + stories.id,
                    state: {
                      props: stories.id,
                    },
                  }}
                >
                  <li style={styleStory}></li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stories;
