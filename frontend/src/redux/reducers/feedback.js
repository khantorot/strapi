const initialState = {
    data: [],
  };

  export function getFeedbacks(state = initialState, action) {
    switch (action.type) {
      case 'GET_FEEDBACKS':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  }