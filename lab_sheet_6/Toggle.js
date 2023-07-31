import React, { useState } from 'react';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      <p>{isOn ? 'ON' : 'OFF'}</p>
    </div>
  );
};

export default Toggle;
