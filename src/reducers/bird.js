const initialState = {
  position: { x: 50, y: 50 },
};

const birdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_BIRD':
      return {
        ...state,
        position: action.payload,
      };
    default:
      return state;
  }
};

export default birdReducer;
