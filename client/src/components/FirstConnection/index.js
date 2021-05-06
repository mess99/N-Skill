import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import "./firstconnection.css";
const FirstConnection = () => {
  const history = useHistory();

  const [currentModal, setCurrentModal] = useState(0);

  const closeModal = () => {
    history.push("/");
  };
  return (
    <div className="firstconnection">
      <div className="firstconnection__content">
        <p>Hi mess, it's your first connection,</p>
        <div className="first__btn">
          <button
            className="first__skip"
            onClick={closeModal}
            //   onClick={() => nextCOrrection()}
          >
            Skip
          </button>

          <button
            className="first__next"
            //   onClick={() => nextCOrrection()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstConnection;
