import React, { ChangeEvent, useState } from 'react';
import './ScreenshotInput.css'

const ScreenshotInput: React.FC = () => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('');
    }
  };

  return (
    <div className='screenshot-upload-container'>
      <label id='inputscreenshot'htmlFor="fileInput" className="screenshot-upload-button">
        {fileName ? fileName : 'Upload File'}
      </label>
      <input
        type="file"
        id="fileInput"
        className="hidden-input"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ScreenshotInput;
