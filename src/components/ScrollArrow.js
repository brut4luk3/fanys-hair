import React, { useState } from 'react';

export default function ScrollArrow({ onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 cursor-pointer p-4"
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
         onClick={onClick}>
      {hover ? <span className="text-2xl">Pra baixo</span> : <img src="/assets/arrow.png" alt="Scroll down arrow" />}
    </div>
  );
}