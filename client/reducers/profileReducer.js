/**
 * ************************************
 *
 * @module  profileReducer.js
 * @author  4PET
 * @date    12/31/2019
 * @description Place to create reducer function for the states used in chat feature
 *
 * ************************************
 */
import * as types from '../actions/actionTypes.js'

//initialState
const initialState = {
  name: "",
  age: 0,
}

const chatReducer = (state=initialState,action) => {
  switch(action.types){
    case types.UPDATE_PROFILE:
      break;
  }
}

export default chatReducer;