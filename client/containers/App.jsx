import React, { Fragment } from "react";
import axios from "axios";
import Login from '../components/Login.jsx';
import Signup from "../components/Signup.jsx";
import Signout from "../components/Signout.jsx";
import MyAccount from "../components/MyAccount.jsx"
import BioBtn from "../components/Match/BioBtn"
import LikeBtn from "../components/Match/LikeBtn"
import PassBtn from "../components/Match/PassBtn"
import Profile from "../components/Match/Profile";
import Navigation from '../components/Navigation/Navigation'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',

      isLoggedIn: false,
      onSignUpPage: false,
      onMyAccount: false,
      isMyAccountClicked: false,

      //User Profile
      userId: '',
      userAge: '',
      userGender: '',
      userBio: '',
      userPhoto: '',
      userLocation: '',

      //Dog Pofile
      dogName: '',
      dogAge: '',
      dogGender: '',
      dogBreed: '',
      dogSize: '',
      dogTemperament: '',
      dogNeuteredSpayed: '',
      dogBio: '',
      dogList: [],
      currentPhoto: 0, 
      pass: false,
      like: false
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleSignout = this.handleSignout.bind(this)
    this.handleToggleSignup = this.handleToggleSignup.bind(this);
    this.updateInfo = this.updateInfo.bind(this)
    this.saveUserInfo = this.saveUserInfo.bind(this)
    this.saveDogInfo = this.saveDogInfo.bind(this)
    this.fetchProfile = this.fetchProfile.bind(this)
  }

  updateInfo(property, value) {
    let updateObj = {};
    updateObj[property] = value;
    this.setState(updateObj);
    console.log(this.state)
  }

  handleLogin(e) {
    e.preventDefault();
    axios.post('/user/login', { username: this.state.username, password: this.state.password })
      .then(response => {
        this.setState({
          isLoggedIn: true,
          userId: response.data[0]._id,
          userAge: response.data[0].age,
          userGender: response.data[0].gender,
          userBio: response.data[0].bio,
          userPhoto: response.data[0].photo,
          userLocation: response.data[0].location,
          // dogName: response.data[1].name,
          // dogAge: response.data[1].age,
          // dogGender: response.data[1].gender,
          // dogBreed: response.data[1].breed,
          // dogSize: response.data[1].size,
          // dogTemperament: response.data[1].temperament,
          // dogNeuteredSpayed: response.data[1].neutered_spayed,
          // dogBio: response.data[1].bio,
          // dogPhoto: response.data[1].photo,
        });
      })
      .then(this.fetchProfile)
      .catch(function (error) {
        console.error(error);
      });
  }

  handleSignup(e) {
    console.log("sign up button")
    e.preventDefault();
    axios.post('/user/createNewUser', { username: this.state.username, password: this.state.password })
      .then(() => {
        this.setState({
          isLoggedIn: true,
          onSignUpPage: false,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  handleSignout() {
    this.setState({
      // UPDATE THIS WITH ALL STATE ITEMS
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
      userLocation: '',

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
    })
  }

  handleToggleSignup() {
    this.setState(prevState => ({
      onSignUpPage: !prevState.onSignUpPage
    }));
  }

  saveUserInfo() {
    axios.post('/user/saveUserInfo', {
      username: this.state.username,
      userAge: this.state.userAge,
      userGender: this.state.userGender,
      userBio: this.state.userBio,
      userPhoto: this.state.userPhoto
    })
      .then(response => {
        console.log("User info saved.");
      })
      .catch(function (error) {
        console.error(error);
      });
    console.log(this.state)
  }

  saveDogInfo() {
    axios.post('/user/saveDogInfo', {
      dogName: this.state.dogName,
      dogAge: this.state.dogAge,
      dogGender: this.state.dogGender,
      dogBreed: this.state.dogBreed,
      dogSize: this.state.dogSize,
      dogBreed: this.state.dogBreed,
      dogTemperament: this.state.dogTemperament,
      userId: this.state.userId,
      dogNeuteredSpayed: this.state.dogNeuteredSpayed,
      dogBio: this.state.dogBio,
      dogPhoto: this.state.dogPhoto
    })
      .then(response => {
        console.log("Dog info saved.");
      })
      .catch(function (error) {
        console.error(error);
      });
    console.log(this.state)
  }

  // fetchProfile = (e) => {
  //   e.preventDefault();
  //   console.log('this is fetchProfile')
  //   console.log(userId)
  //   axios.get('/user/getOtherDogs', {
  //     params: {
  //       userId: this.state.userId
  //     }
  //   })
  //   .then(res => {
  //     console.log(res)
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  // }

  fetchProfile() {
    axios.get('/user/getOtherDogs', {
      params: {
        userId: this.state.userId
      }
    })
    .then(res => {
      this.setState(() => ({
        dogList: res.data,
        // dogPhoto: res.data[this.state.currentPhoto].photo
      }))
      console.log(res.data)
    })
    .catch(function (error) {
      console.error(error);
    });
  }

  handlePass = () => {
    this.setState(prevState => ({
      currentPhoto: prevState.currentPhoto += 1,
      dogPhoto: prevState.dogList[this.state.currentPhoto]
    }));
    console.log(this.state.currentPhoto)
  }


  handleClickMyAccount = () => {
    console.log('clicked')
    this.setState(prevState => ({
      isMyAccountClicked: !prevState.isMyAccountClicked
    }));
  }

  handleBackToMain = () => {
    console.log('clicked here')
    this.setState(prevState => ({
      isMyAccountClicked: !prevState.isMyAccountClicked
    }));  
  }

  render() {

    let displayed;

    // SELF NOTE TO TALYA -- CHANGED this.state.isLoggedIn to !this.state.isLoggedIn for building
    if (this.state.isLoggedIn && !this.state.isMyAccountClicked) {
      displayed = (
        <React.Fragment>
          <Navigation signOut={this.handleSignout} handleClickMyAccount={this.handleClickMyAccount} />
          <Profile dogList={this.state.dogList} currentPhoto={this.state.currentPhoto} />
          <div>
            <PassBtn handlePass={this.handlePass} />
            <LikeBtn likeButton={this.likeButton} />          
          </div>
          <BioBtn />
        </React.Fragment>
      )
    }

    else if (!this.state.isLoggedIn && !this.state.onSignUpPage) {
      displayed = (<Login
        updateInfo={this.updateInfo}
        handleLogin={this.handleLogin}
        handleToggleSignup={this.handleToggleSignup}
      />)
    }

    else if (!this.state.isLoggedIn && this.state.onSignUpPage) {
      displayed = (<Signup
        updateInfo={this.updateInfo}
        handleSignup={this.handleSignup}
        handleToggleSignup={this.handleToggleSignup}
      />)
    }

    else if (this.state.isLoggedIn && this.state.isMyAccountClicked) {
      displayed = (
        <MyAccount
          handleSignout={this.handleSignout}
          handleBackToMain={this.handleBackToMain}
          handleClickMyAccount={this.handleClickMyAccount}
          saveUserInfo={this.saveUserInfo}
          updateInfo={this.updateInfo}
          userAge={this.state.userAge}
          userGender={this.state.userGender}
          userBio={this.state.userBio}
          saveDogInfo={this.saveDogInfo}
          updateInfo={this.updateInfo}
          dogName={this.state.dogName}
          dogAge={this.state.dogAge}
          dogGender={this.state.dogGender}
          dogBreed={this.state.dogBreed}
          dogSize={this.state.dogSize}
          dogTemperament={this.state.dogTemperament}
          dogNeuteredSpayed={this.state.dogNeuteredSpayed}
          dogBio={this.state.dogBio}
          dogPhoto={this.state.dogPhoto}
        />
      )
    }

    return (
      <div>
        {displayed}
      </div>
    )
  }
}

export default App;

