import React from "react";
import axios from "axios";
import MyAccount from "./MyAccount.jsx"
import MatchContainer from './MatchContainer.jsx'
import LoginContainer from "./LogInContainer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.handleSignout = this.handleSignout.bind(this)
    this.saveUserInfo = this.saveUserInfo.bind(this)
    this.saveDogInfo = this.saveDogInfo.bind(this)
  }

  handleLogin(id){
    this.setState({
      userId: id,
      isLoggedIn: true,
    });
  }
  
  getUserInfo(e) {
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

    if(!this.state.isLoggedIn){
      displayed = (<LoginContainer handleLogin={this.handleLogin}/>)
    }
    else{
      // SELF NOTE TO TALYA -- CHANGED this.state.isLoggedIn to !this.state.isLoggedIn for building
      if (!this.state.isMyAccountClicked) {
        displayed = (<MatchContainer userId = {this.state.userId} handleSignout={this.handleSignout}/>);
      }
      else if (this.state.isMyAccountClicked) {
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
    }
    return (
      <div>
        {displayed}
      </div>
    )
  }
}

export default App;

