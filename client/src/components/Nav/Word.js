import React from "react";

import "./word.css";
const Word = ({ word, phonetics, meanings }) => {
  return (
    <div className="nav__word">
      <div className="word__header">
        <h1 className="word__title">{word}</h1>
        {/* <audio controls src={phonetics[1].audio} /> */}
        <span>{phonetics[0].text} </span>
        {/* <span>{phonetics[1].text} </span> */}
        <audio className="word__sound" controls src={phonetics[0].audio} />
      </div>
      <div className="word__content">
        {meanings.map((mean, index) => (
          <div key={index}>
            <small>({mean.partOfSpeech})</small>

            <div>
              {mean.definitions.map((def, index) => (
                <div key={index}>
                  <p>{def.definition}</p>
                  {def.example && <p>example: {def.example}</p>}
                  {def.synonyms && (
                    <ul className="word__synonyms">
                      <li>synonyms:</li>
                      {def.synonyms?.map((syn, index) => (
                        <li key={index}>{syn}, </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Word;
