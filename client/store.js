/**
 * ************************************
 *
 * @module  store.js
 * @author  4PET
 * @date    12/31/2019
 * @description store for redux
 *
 * ************************************
 */

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/reducers.js';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(
  reducers,
  composeWithDevTools()
);

export default store;