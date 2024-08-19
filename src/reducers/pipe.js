const initialState = {
  pipes: [],
};

const pipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIPE':
      return {
        ...state,
        pipes: [...state.pipes, action.payload],
      };
    case 'REMOVE_PIPE':
      return {
        ...state,
        pipes: state.pipes.filter((pipe) => pipe.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default pipeReducer;
