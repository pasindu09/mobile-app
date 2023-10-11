import React, { useState, useEffect } from 'react';

const WPMCalculator = () => {
  const wordsList = [
    'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do',
    'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua'
  ];

  const [text, setText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [time, setTime] = useState(10);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setEndTime(Date.now());
    }
  }, [time]);

  const handleStart = () => {
    setText('');
    setCurrentWordIndex(0);
    setStartTime(Date.now());
    setEndTime(null);
    setTime(10);
  };

  const handleTyping = e => {
    if (!startTime) setStartTime(Date.now());
    setText(e.target.value);

    const typedWords = e.target.value.split(' ');
    if (typedWords.length >= wordsList.length) {
      setEndTime(Date.now());
    }
  };

  const calculateWPM = () => {
    const words = text.trim().split(/\s+/).length;
    const minutes = 10 - time / 60;
    return Math.round(words);
  };

  return (
    <div className="text-center mt-12">
      <h1 className="text-4xl font-bold mb-4">Words Per Minute Calculator</h1>
      <div className="mb-4">
        <button onClick={handleStart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Start
        </button>
      </div>
      <div className="mb-4">
        <div className="mb-2">
          <b>Words to Type:</b> {wordsList.slice(currentWordIndex).join(' ')}
        </div>
        <textarea
          rows="5"
          cols="30"
          value={text}
          onChange={handleTyping}
          className="border border-gray-300 p-2"
          disabled={!startTime || endTime}
          placeholder="Start typing..."
        />
      </div>
      {startTime && <div className="text-3xl font-bold mb-4">{time}s</div>}
      {endTime && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Your Words per the game:</h2>
          <div className="text-4xl font-bold">{calculateWPM()}</div>
        </div>
      )}
    </div>
  );
};

export default WPMCalculator;
