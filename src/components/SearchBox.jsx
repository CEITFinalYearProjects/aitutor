import React, { useState, useEffect } from 'react';
import sendsvg from '../assets/send.svg';
import { FaMicrophone } from 'react-icons/fa';

const SearchBox = () => {


  const [prompt, setPrompt] = useState('');

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
    console.log(e.target.value);
  };


  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);

  return (
    <footer className="sticky bottom-0">
      <div className="flex flex-row w-full justify-stretch">
        <div className="flex justify-center content-center">
          <button
            className={`w-14 h-14 rounded-full bg-red-500 hover:bg-red-600 text-white ${
              isRecording ? 'animate-bounce' : ''
            } ml-2 flex justify-center content-center p-5`}
          >
            <FaMicrophone />
          </button>
        </div>
        <div className="flex flex-row w-full bg-secondary-dark-bg rounded-lg m-2">
          <div className="w-full">
            <textarea
              className="w-full lg:w-full justify-stretch border-none bg-secondary-dark-bg text-white dark:text-gray-200 dark:bg-input-gray rounded-2xl p-3 mt-1"
              type="text"
              rows="1"
              placeholder="Do you have any question?"
              value={prompt}
              onChange={handlePromptChange}
            />
          </div>
          <div className="flex content-center justify-center">
            <button type="submit" className="w-14 h-14 p-3 text-white">
              <img src={sendsvg} alt="send" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SearchBox;
