import { WELCOME_PAGE } from '../actions/types'

const initialState = { 
    name: ''
  };

  const homeReducer = (state = initialState, action) => {
    switch(action.type) {
  
      case WELCOME_PAGE:
      return {
          ...state,
          name: action.payload
      };
      
      default:
        return state;
    }
  }
  
  export default homeReducer;