// Prophesy.js

import React, { useState } from 'react';
import prophesy from '../services/prophesy';

const Prophesy = () => {
  const [currentProphecy, setCurrentProphecy] = useState('');

  const getRandomProphecy = async () => {
    try {
      const prophecy = await prophesy.GetProphesy();
      setCurrentProphecy(prophecy);
    } catch (error) {
      console.error('Error fetching prophecy:', error);
    }
  };

  return (
    <div className='Prophesy'>
      <h1>Prophecy App</h1>
      <button onClick={getRandomProphecy}>Get Prophecy</button>
      {currentProphecy.prophesy && <p>{currentProphecy.prophesy}</p>}
    </div>
  );
};

export default Prophesy;
