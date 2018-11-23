import { ADD_PLACE } from './types';
import { WELCOME_PAGE } from './types'
export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    payload: placeName
  }
}

export function showText() {
    return {
      type: WELCOME_PAGE,
      payload: 'Sam'
    }
  }