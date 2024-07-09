import React from "react";
import QuestionItem from "../Element/QuestionItem";

const Questions = () => {
  return (
    <div className="faq-container">
      <h1 className="faq-header">Frequently Asked Questions</h1>
      <QuestionItem
        question="How does the 14 day free trial work?"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illo
      soluta ipsam repellendus dicta corrupti nobis assumenda sint non enim rem
      architecto saepe, natus vel quidem voluptas fugit repellat consequuntur."
      />
      <QuestionItem
        question="Can I change plans anytime?"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illo
      soluta ipsam repellendus dicta corrupti nobis assumenda sint non enim rem
      architecto saepe, natus vel quidem voluptas fugit repellat consequuntur."
      />
      <QuestionItem
        question="How do I pause my Bonsai subscription?"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illo
      soluta ipsam repellendus dicta corrupti nobis assumenda sint non enim rem
      architecto saepe, natus vel quidem voluptas fugit repellat consequuntur."
      />
      <QuestionItem
        question="What is your refund policy?"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illo
      soluta ipsam repellendus dicta corrupti nobis assumenda sint non enim rem
      architecto saepe, natus vel quidem voluptas fugit repellat consequuntur."
      />
    </div>
  );
};

export default Questions;
