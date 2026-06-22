import React, { useState } from 'react';
import ChatSupport from './chatSupport/ChatSupport';

const App = () => {
  const [documentContent, setDocumentContent] = useState('');

  const handleDocumentUpload = (content) => {
    setDocumentContent(content);
  };

  return (
    <div className="app">
      <h1>Document Analysis AI</h1>
      {/* Assuming there's a component for document upload */}
      <DocumentUpload onUpload={handleDocumentUpload} />
      {documentContent && <ChatSupport documentContent={documentContent} />}
    </div>
  );
};

export default App;