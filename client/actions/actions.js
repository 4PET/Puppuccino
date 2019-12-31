/**
 * ************************************
 *
 * @module  actions.js
 * @author  4PET
 * @date    12/31/2019
 * @description make action creaters
 *
 * ************************************
 */

import * as types from './actionTypes.js'

//handle login
export const handleLogin = (e) => ({
  type: types.HANDLE_LOGIN
})


//chatting actions
export const sendText = (text, sender, receiver) => ({
  type: types.SEND_TEXT,
  text,
  sender,
  receiver
})

//profile actions
export const updateUserProfile = (args) => ({
  type: types.UPDATE_USERPROFILE,
})

//profile actions
export const updateDogProfile = (dogName, dogAge, dogGender, dogBreed, dogSize, dogTemperament, dogNeuteredSpayed, dogBio, dogPhoto) => ({
  type: types.UPDATE_DOGPROFILE,
  dogName,
  dogAge,
  dogGender,
  dogBreed,
  dogSize,
  dogTemperament,
  dogNeuteredSpayed,
  dogBio,
  dogPhoto
})

//function to update fields
export const updateInfo = (property, value) => ({
  type: types.UPDATE_INFO,
  property,
  value,
})

//function to make Axios call to dogs database
export const saveDogInfo = () => ({
  type: types.SAVE_DOG_INFO,
})

//match actions
export const likeDog = (args) => ({
  type: LIKE_DOG,
})