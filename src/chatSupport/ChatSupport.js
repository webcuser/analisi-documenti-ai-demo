import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ChatSupport = ({ documentContent }) => {
  const [questions, setQuestions] = useState('');
  const [responses, setResponses] = useState([]);

  const handleInputChange = (e) => {
    setQuestions(e.target.value);
  };

  const handleSend = () => {
    if (questions.trim()) {
      const response = getResponse(questions);
      setResponses([...responses, { question: questions, answer: response }]);
      setQuestions('');
    }
  };

  const getResponse = (question) => {
    // Placeholder for context-aware response generation
    const lowerCaseQuestion = question.toLowerCase();
    if (documentContent.toLowerCase().includes(lowerCaseQuestion)) {
      return `The document mentions: ${lowerCaseQuestion}`;
    }
    return 'Sorry, I could not find the answer in the document.';
  };

  return (
    <div className="chat-support">
      <div className="chat-window">
        {responses.map((response, index) => (
          <div key={index} className="chat-message">
            <strong>Q:</strong> {response.question} <br />
            <strong>A:</strong> {response.answer}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={questions}
        onChange={handleInputChange}
        placeholder="Ask a question about the document..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

ChatSupport.propTypes = {
  documentContent: PropTypes.string.isRequired,
};

export default ChatSupport;