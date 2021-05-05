import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import "./word.css";
const Word = ({ word, phonetics, meanings, error, handleWord }) => {
  return (
    <div className="nav__word ">
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className="word__header">
            <div className="word__close__div">
              <CancelIcon onClick={handleWord} className="word__close" />
            </div>
            <h1 className="word__title">{word}</h1>
            {/* <audio controls src={phonetics[1].audio} /> */}
            <span>{phonetics && phonetics[0]?.text} </span>
            {/* <span>{phonetics[1].text} </span> */}
            <audio
              className="word__sound"
              controls
              src={phonetics && phonetics[0]?.audio}
            />
          </div>
          <div className="word__content">
            {meanings?.map((mean, index) => (
              <div className="div__mean" key={index}>
                <small>({mean.partOfSpeech})</small>

                {mean.definitions.map((def, index) => (
                  <div className="div__def" key={index}>
                    <p className="definition">
                      {index + 1}- {def.definition}
                    </p>
                    {def.example && (
                      <p className="example">Example: {def.example}</p>
                    )}
                    {def.synonyms && (
                      <ul className="word__synonyms">
                        <li>Synonyms: </li>
                        {def.synonyms?.map((syn, index) => (
                          <li key={index}>{syn}, </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Word;
