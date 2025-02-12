
'use client';

import { useState } from 'react';

// import { Metadata}  from "next"


const Quiz = () => {
  const questions = [
    {
      text: 'How can you handle multiple dynamic parameters in Next.js routes?',
      options: [
        'A. You can [...param] syntax in nature',
        'B. Define a middleware to parse parameters',
        'C. Use getServerSideProps function to extract parameters',
        'D. A and C (CORRECT)'
      ],
      correct: 3
    },
    {
      text: 'Priority prop in next/image components after image loading?',
      options: [
        'A. It disables lazy loading for the image (CORRECT)',
        'B. It defers loading of the image',
        'C. It loads the image only on user interaction',
        'D. It automatically compresses the image'
      ],
      correct: 0
    },
    // Add more questions here
  ];

  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));

  const handleSelect = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  return (
  <>  
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
      <div className="max-w-2xl w-full bg-white p-8 rounded-2xl shadow-xl text-gray-900">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-4">Python and Agentic AI  Section A</h1>
        <p className="text-lg text-gray-700 text-center">Begins Tuesday, Feb 18 at 7:00 PM</p>
        <div className="mt-6 space-y-4">
          <p className="text-gray-800 text-lg">Next Tuesday at 7:00 PM, classes for Section A will commence. Only the top-performing students will be admitted to this section.</p>
          <p className="text-gray-800 text-lg">If you are selected, you ll receive an email shortly as we are currently finalizing the results. Once you get the email, please log in to the portal to print your new student ID card.</p>
          <p className="text-gray-800 text-lg">Announcements for Sections B, C, D, etc., will follow as additional results are released.</p>
          <p className="text-gray-800 text-lg font-semibold">Additionally, Sir Zia will be joining the Section A class.</p>
        </div>
        <div className="mt-6 text-center">
          <p className="text-indigo-700 font-bold">Stay tuned!</p>
          <p className="text-gray-600">Best regards,</p>
          <p className="text-gray-900 font-semibold">Daniyal Nagori</p>
        </div>
      </div>
    </div>
  
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-4">
      <div className="max-w-2xl w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Next.js MCQs</h1>
        {questions.map((q, index) => (
          <div key={index} className="mb-6">
            <p className="text-lg font-semibold mb-2">{q.text}</p>
            <ul className="space-y-2">
              {q.options.map((option, optionIndex) => (
                <li
                  key={optionIndex}
                  className={`p-3 rounded-md cursor-pointer transition-all ${
                    selectedAnswers[index] === optionIndex
                      ? optionIndex === q.correct
                        ? 'bg-green-500'
                        : 'bg-red-500'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                  onClick={() => handleSelect(index, optionIndex)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </>

  );
};

export default Quiz;
