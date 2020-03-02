/**
 * ************************************
 *
 * @module  chatReducer.js
 * @author  4PET
 * @date    12/31/2019
 * @description Place to create reducer function for the states used in chat feature
 *
 * ************************************
 */
import * as types from '../actions/actionTypes.js'

//initialState
const initialState = {
  chatList: [],
}

const chatReducer = (state = initialState, action) => {
  switch (action.types) {
    case types.SEND_TEXT:
      break;
    default:
      return state;
  }
}

export default chatReducer;