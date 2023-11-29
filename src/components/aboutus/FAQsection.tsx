import React from 'react';
import './FAQsection.css'
const faqData = [
    {
      question: 'Question 1',
      answer: 'Answer 1'
    },
    {
      question: 'Question 2',
      answer: 'Answer 2'
    },
    {
      question: 'Question 3',
      answer: 'Answer 3'
    },
    {
      question: 'Question 4',
      answer: 'Answer 4'
    },
    {
      question: 'Question 5',
      answer: 'Answer 5'
    }
  ];

const FAQSection: React.FC = () => {
  return (
    <div className='FAQSection'>

        <h2 className='FAQtitle'>Frequently Asked Questions</h2>
      <div className='FAQtextbox'>
        {faqData.map((faq, index) => (
          <div className='QA' key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;