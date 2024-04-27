import React, { useState } from "react";
import styles from "./Compo.module.css";
import downbar from '../Images/dropdownarrow.png'

const Faq = () => {
  const [faqState, setFaqState] = useState([
    { showAnswer: false, rotate: false },
    { showAnswer: false, rotate: false },
    { showAnswer: false, rotate: false }
  ]);

  const faqData = [
    {
      question: "Can education flashcards be used for all age groups?",
      answer: "Flashcards can be a useful learning tool for a wide range of age groups, from young children to adults."
    },
    {
      question: "How education flashcards works?",
      answer: "Flashcards can be a useful learning tool for a wide range of age groups, from young children to adults."
    },
    {
      question: "Can education flashcards be used for test preparation?",
      answer: "Flashcards can be a useful learning tool for a wide range of age groups, from young children to adults."
    }
  ];

  const toggleAnswer = (index) => {
    setFaqState(prevState => {
      const newFaqState = [...prevState];
      newFaqState[index] = {
        showAnswer: !newFaqState[index].showAnswer,
        rotate: !newFaqState[index].rotate
      };
      return newFaqState;
    });
  };

  return (
    <>
      <div className="ml-5 my-6 md:w-5/6 md:ml-28">
        <div className="font-bold mb-4 text-xl md:text-3xl bg-gradient-to-t from-blue-600 to-blue-900 text-transparent bg-clip-text">FAQ</div>

        <ul className={` w-1/1 grid  mr-2 `}>
          {faqData.map((faq, index) => (
            <div key={index} className={`${styles.faq} w border border-blue-800 rounded-lg p-2 sm:w-4/5 md:w-3/5 mb-4 cursor-pointer`} onClick={() => toggleAnswer(index)}>
              <div className={`${styles.qus} flex justify-between font-semibold pr-2 font-sans`}>
                <div className=''>{faq.question}</div>
                <div className={`${faqState[index].rotate ? 'rotate-180' : ''} font-normal w-6`}>
                    <img src={downbar}></img>
                </div>
              </div>
              <div className={`${styles.ans} pt-2`} style={{ display: faqState[index].showAnswer ? 'block' : 'none' }}>
                {faq.answer}
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Faq;
