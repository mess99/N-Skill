import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { filterStoryByTheme } from "../../utils";
import "./stories.css";

// import test from "../../assets/images/test.png";
// import testt from "../../assets/images/exercices/exercice-banniere.jpg";
const Stories = ({ loadStories, getStories }) => {
  useEffect(loadStories, []);

  // console.log(getStories);
  const shortStories = filterStoryByTheme(getStories.stories, "short");
  const tvStories = filterStoryByTheme(getStories.stories, "tv");

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
        <h2 className="container__title">Tv</h2>
        <div className="container__contain">
          <ul className="container__lists">
            {tvStories?.map((stories) => {
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

      {/* <div className="stories__container">
        <h2 className="container__title">Fiction</h2>
        <div className="container__contain">
          <ul className="container__lists">
            <li style={styleStory}></li>
            <li style={styleStory}></li>
            <li style={styleStory}></li>
            <li style={styleStory}></li>
            <li style={styleStory}></li>
            <li style={styleStory}></li>
            <li style={styleStory}></li>
          </ul>
        </div>
      </div> */}
      {/* <h2>Stories</h2>
      <p>
        The Cat and the mouse Once upon time. There lived a Cat and a mouse. one
        day the cat was sleeping, and the mouse started playing on the cat and
        annoying it. The cat woke up so mad and he caught up the mouse and was
        going to kill the mouse, but the mouse asked for forgiveness. The cat
        let him go. After some days the cat caught in a net. The mouse cut the
        net with his teeth.The cat was free and he thanked the mouse. Moral: Do
        Good Have Good.
      </p> */}
    </div>
  );
};

export default Stories;
