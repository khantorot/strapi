const initialState = {
    data: [],
  };

  export function getProductById(state = initialState, action) {
    switch (action.type) {
      case 'GET_PRODUCTS_BY_ID':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  }