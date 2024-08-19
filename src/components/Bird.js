import React from 'react';

const Bird = ({ position }) => (
  <div style={{ position: 'absolute', top: position.y, left: position.x }}>
    <img src="/path/to/bird.png" alt="bird" />
  </div>
);

export default Bird;
