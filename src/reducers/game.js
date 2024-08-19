const initialState = {
  score: 0,
  isRunning: false,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        isRunning: true,
      };
    case 'STOP_GAME':
      return {
        ...state,
        isRunning: false,
      };
    default:
      return state;
  }
};

export default gameReducer;
