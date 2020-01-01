/**
 * ************************************
 *
 * @module  matchReducer.js
 * @author  4PET
 * @date    12/31/2019
 * @description Place to create reducer function for the states used in match feature
 *
 * ************************************
 */
import * as types from '../actions/actionTypes.js'

//initialState
const initialState = {
  dogList: [],
}

const matchReducer = (state = initialState, action) => {
  switch (action.types) {
    case types.LIKE_DOG:
      break;
    default:
      return state;
  }
}

export default matchReducer;