import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import "./word.css";

import styled from "styled-components";

const Div = styled.div`
background: ${({ theme }) => theme.backgroundNav};
}`;
const Word = ({ word, phonetics, meanings, error, handleWord }) => {
  return (
    <Div className="nav__word ">
      <div className="word__close__div">
        <CancelIcon onClick={handleWord} className="word__close" />
      </div>
      {error ? (
        <p className="word__error">{error}</p>
      ) : (
        <>
          <div className="word__header">
            <h1 className="word__title">{word}</h1>
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
    </Div>
  );
};

export default Word;
