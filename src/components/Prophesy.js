import React, { useState } from 'react';

const prophecies = [
  "A great fortune will come your way.",
  "You will meet someone important today.",
  "Good things are coming your way.",
  "An opportunity will arise soon.",
  "Your hard work will pay off.",
  "A journey will bring you happiness."
];

export default function Prophesy() {
  const [currentProphecy, setCurrentProphecy] = useState('');

  const getRandomProphecy = () => {
    const randomIndex = Math.floor(Math.random() * prophecies.length);
    setCurrentProphecy(prophecies[randomIndex]);
  };

  return (
    <div className='Prophesy'>
      <h1>Prophecy App</h1>
      <button onClick={getRandomProphecy}>Get Prophecy</button>
      {currentProphecy && <p>{currentProphecy}</p>}
    </div>
  );
}
