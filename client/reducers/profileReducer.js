/**
 * ************************************
 *
 * @module  profileReducer.js
 * @author  4PET
 * @date    12/31/2019
 * @description Place to create reducer function for the states used in profile feature
 *
 * ************************************
 */
import * as types from '../actions/actionTypes.js'
import axios from "axios";


//initialState
const initialState = {
  username: '',
  password: '',

  isLoggedIn: false,
  onSignUpPage: false,
  onMyAccount: false,

  //User Profile
  userId: '',
  userAge: '',
  userGender: '',
  userBio: '',
  userPhoto: '',

  //Dog Pofile
  dogName: '',
  dogAge: '',
  dogGender: '',
  dogBreed: '',
  dogSize: '',
  dogTemperament: '',
  dogNeuteredSpayed: '',
  dogBio: '',
  dogPhoto: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.HANDLE_LOGIN:
      console.log("In login")
      // e.preventDefault();
      axios.post('/user/login', {
        username: state.username,
        password: state.password
      })
      console.log("STATE --->", state)
      return {
        ...state,
        isLoggedIn: true,
        userId: response.data[0]._id,
        userAge: response.data[0].age,
        userGender: response.data[0].gender,
        userBio: response.data[0].bio,
        userPhoto: response.data[0].photo,
        dogName: response.data[1].name,
        dogAge: response.data[1].age,
        dogGender: response.data[1].gender,
        dogBreed: response.data[1].breed,
        dogSize: response.data[1].size,
        dogTemperament: response.data[1].temperament,
        dogNeuteredSpayed: response.data[1].neutered_spayed,
        dogBio: response.data[1].bio,
        dogPhoto: response.data[1].photo,
      }

    case types.UPDATE_INFO:
      let updateObj = {};
      updateObj[action.property] = action.value;
      return {
        ...state,
        ...updateObj
      }
      break;

    case types.SAVE_DOG_INFO:
      axios.post('/user/saveDogInfo', {
        dogName: state.dogName,
        dogAge: state.dogAge,
        dogGender: state.dogGender,
        dogBreed: state.dogBreed,
        dogSize: state.dogSize,
        dogBreed: state.dogBreed,
        dogTemperament: state.dogTemperament,
        userId: state.userId,
        dogNeuteredSpayed: state.dogNeuteredSpayed,
        dogBio: state.dogBio,
        dogPhoto: state.dogPhoto
      })
      return {
        ...state
      }
      break;

    case types.UPDATE_USERPROFILE:

      break;

    case types.UPDATE_DOGPROFILE:
      let dogName = action.dogName;
      let dogAge = action.dogAge;
      let dogGender = action.dogGender;
      let dogBreed = action.dogBreed;
      let dogSize = action.dogSize;
      let dogTemperament = action.dogTemperament;
      let dogNeuteredSpayed = action.dogNeuteredSpayed;
      let dogBio = action.dogBio;
      let dogPhoto = action.dogPhoto;
      return {
        ...state,
        dogName,
        dogAge,
        dogGender,
        dogBreed,
        dogSize,
        dogTemperament,
        dogNeuteredSpayed,
        dogBio,
        dogPhoto
      }
      break;

    default:
      return state;
  }
}

export default profileReducer;