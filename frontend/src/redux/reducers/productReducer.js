const initialState = {
    data: [],
  };

  export function getProducts(state = initialState, action) {
    switch (action.type) {
      case 'GET_PRODUCTS':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  }