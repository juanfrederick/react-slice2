import React, { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material/";

const QuestionItem = ({ question, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="question-item">
      <div className="header-container" onClick={() => setOpen(!open)}>
        <h2>{question}</h2>
        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
      </div>
      <div className={`content-container ${open ? "show" : "hidden"}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default QuestionItem;
