import React, { useState } from "react";
import OpenQuestion from "./OpenQuestion";
import CloseQuestion from "./CloseQuestion";

interface Props {
  isOpen: boolean;
  title: string;
  text: string;
}

const ListQuestionsItem: React.FC<Props> = ({ isOpen, title, text }) => {
  const [questionButtonState, setQuestionButtonState] = useState(isOpen);

  function onClickButton() {
    setQuestionButtonState((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <React.Fragment>
      {questionButtonState ? (
        <OpenQuestion
          onClickButton={onClickButton}
          questionTitle={title}
          questionText={text}
        />
      ) : (
        <CloseQuestion onClickButton={onClickButton} questionTitle={title} />
      )}
    </React.Fragment>
  );
};

export default ListQuestionsItem;
