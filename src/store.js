import { createStore, combineReducers } from 'redux';
import birdReducer from './reducers/bird';
import gameReducer from './reducers/game';
import pipeReducer from './reducers/pipe';

const rootReducer = combineReducers({
  bird: birdReducer,
  game: gameReducer,
  pipe: pipeReducer,
});

const store = createStore(rootReducer);

export default store;
