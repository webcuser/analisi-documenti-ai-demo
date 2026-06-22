import React, { useState } from 'react';
import './DocumentUpload.css';

const DocumentUpload = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const validFormats = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'image/jpeg', 'image/png'];
    const unsupportedFiles = files.filter(file => !validFormats.includes(file.type));

    if (unsupportedFiles.length > 0) {
      setErrorMessage('Unsupported file format. Please upload PDF, Word, Excel, or image files.');
      return;
    }

    setErrorMessage('');
    // Here you would handle the supported file upload e.g., to an API or server.
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="document-upload" onDrop={handleDrop} onDragOver={handleDragOver}>
      <h2>Upload Documents</h2>
      <p>Drag and drop your files here or click to browse.</p>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default DocumentUpload;