import React from 'react';
import Bird from './Bird';
import Foreground from './Foreground';
import Pipe from './Pipe';
import Score from './Score';

const Game = () => (
  <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
    <Bird position={{ x: 50, y: 50 }} />
    <Foreground />
    <Pipe position={{ x: 100, y: 200 }} />
    <Score />
  </div>
);

export default Game;
