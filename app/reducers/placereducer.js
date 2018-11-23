import { ADD_PLACE } from '../actions/types';

const initialState = { 
  placeName: '',
  places: ['Chennai', 'Mumbai', 'Delhi']
};

const placeReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          value: action.payload
        })
      };
    default:
      return state;
  }
}

export default placeReducer;