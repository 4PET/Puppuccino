/**
 * ************************************
 *
 * @module  reducer.js
 * @author  4PET
 * @date    12/31/2019
 * @description Combines all the reducers in one place
 *
 * ************************************
 */

import { combineReducers } from 'redux';
import chatReducer from './chatReducer.js'
import profileReducer from './profileReducer.js'
import matchReducer from './matchReducer.js'

//combine reducers 
const reducers = combineReducers({
  chat: chatReducer,
  match: matchReducer,
  profile: profileReducer
})

export default reducers;