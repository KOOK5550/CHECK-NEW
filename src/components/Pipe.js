import React from 'react';

const Pipe = ({ position }) => (
  <div style={{ position: 'absolute', top: position.y, left: position.x }}>
    <img src="/path/to/pipe-top.png" alt="pipe-top" />
    <img src="/path/to/pipe-bottom.png" alt="pipe-bottom" />
  </div>
);

export default Pipe;
