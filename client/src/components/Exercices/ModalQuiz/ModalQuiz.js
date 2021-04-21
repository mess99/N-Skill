import React, { useEffect, useState } from "react";
import "./modalquiz.css";
import { useHistory, useLocation } from "react-router-dom";

function Modalquiz({
  loadQuestions,
  loadResponses,
  getQuestion,
  getPropositions,
}) {
  const history = useHistory();
  const location = useLocation();
  const quizId = location.state?.props;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [correction, setCorrection] = useState(false);

  let wait = false;
  wait = getQuestion.length !== 0 ? true : false;
  useEffect(() => {
    loadQuestions(quizId);
  }, []);

  useEffect(() => {
    loadResponses(getQuestion[currentQuestion]?.id);
  }, [currentQuestion, wait]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < getQuestion.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const showCorrection = () => {
    setCurrentQuestion(0);
    setCorrection(true);
  };

  const nextCOrrection = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < getQuestion.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  const closeModal = () => {
    history.push("/exercices");
  };

  const imageOrNot =
    getQuestion[currentQuestion]?.image === null ? false : true;

  return (
    <div className="modalquiz">
      <div className="modalquiz__content">
        <span onClick={closeModal} className="close">
          x
        </span>
        {showScore && !correction ? (
          <>
            <div className="score-section">
              You scored {score} out of {getQuestion.length}
            </div>
            <p onClick={showCorrection} className="correction">
              Show answers
            </p>
          </>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{getQuestion.length}
              </div>
              <div className="question-text">
                {getQuestion[currentQuestion]?.contentQuestion}
              </div>
              {imageOrNot && (
                <img
                  className="question-image"
                  src={getQuestion[currentQuestion]?.image}
                  alt="questionimage"
                />
              )}
            </div>
            {!correction ? (
              <div className="answer-section">
                {getPropositions.map((answerOption) => (
                  <button
                    key={answerOption.id}
                    className="Modalbutton"
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.is_true)
                    }
                  >
                    {answerOption.content}
                  </button>
                ))}
              </div>
            ) : (
              <div className="answer-section">
                {getPropositions.map((answerOption) => {
                  const style =
                    answerOption.is_true == true
                      ? "Modalbutton correct"
                      : "Modalbutton";
                  return (
                    <button disabled key={answerOption.id} className={style}>
                      {answerOption.content}
                    </button>
                  );
                })}
                <button
                  className="Modalbutton next"
                  onClick={() => nextCOrrection()}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Modalquiz;
