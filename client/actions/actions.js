/**
 * ************************************
 *
 * @module  actions.js
 * @author  4PET
 * @date    12/31/2019
 * @description define action types
 *
 * ************************************
 */

import * as types from '../constants/actionTypes.js'

//chatting actions
export const sendText = (text,sender,receiver) => ({
  type: types.SEND_TEXT,
  text,
  sender,
  receiver
})

//profile actions 
export const updateProfile = (args) => ({
  type: types.UPDATE_PROFILE,
  
})

//match actions 
export const likeDog = (args) => ({
  type:LIKE_DOG,
})