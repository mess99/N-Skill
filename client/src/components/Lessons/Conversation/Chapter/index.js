import React from "react";
import { useParams } from "react-router";
import { getConvBySlug } from "../../../../utils/slugUrl";
import IdeaSvg from "../Svg/ideaSvg";
import "./chapter.css";
const Chapter = ({ dialogues, isLoading }) => {
  const { slug } = useParams();

  // const dialogue = getConvBySlug(dialogues, slug);

  const firstDialogue = dialogues?.firstdialogue?.split("  ");
  const secondDialogue = dialogues?.seconddialogue?.split("  ");

  const firstTips = dialogues?.firsttips?.split("  ");
  const secondTips = dialogues?.secondtips?.split("  ");

  return (
    <div className="chapter">
      <h1>
        Chapter {dialogues?.chapter}: {dialogues?.title}
      </h1>
      <p>Apprendre : à {dialogues?.intro} </p>
      <div className="chapter__first">
        <h2>Dialogue 1</h2>
        <div className="chapter__content">
          <div className="chapter__content__content">
            {firstDialogue?.map((dialogue, index) => {
              return <p key={index}>{dialogue}</p>;
            })}
          </div>
          <div className="tips tipsone">
            <IdeaSvg />
            {firstTips?.map((first, index) => (
              <p key={index} className="tips__first">
                {first}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="chapter__second">
        <h2>Dialogue 2</h2>
        <div className="chapter__content">
          <div className="chapter__content__content">
            {secondDialogue?.map((dialogue, index) => {
              return <p key={index}>{dialogue}</p>;
            })}
          </div>

          <div className="tips tipstwo">
            <IdeaSvg />
            {secondTips?.map((second, index) => (
              <p key={index} className="tips__second">
                {second}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
