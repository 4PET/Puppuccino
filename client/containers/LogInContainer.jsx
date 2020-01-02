import React, { Fragment } from "react";
import axios from "axios";
import Signup from "../components/Signup.jsx";
import Login from '../components/Login.jsx';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      userId: '',
      onSignUpPage: false,
    };
    this.updateInfo = this.updateInfo.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.toggleSignup = this.toggleSignup.bind(this);
  }

  updateInfo(property, value) {
    let updateObj = {};
    updateObj[property] = value;
    this.setState(updateObj);
  }

  handleSignin(e) {
    console.log('clicked', { username: this.state.username, password: this.state.password });
    e.preventDefault();
    axios.post('/user/verify', { username: this.state.username, password: this.state.password })
      .then(response => {
        if (response.data[0] && response.data[1]) {
          this.props.toMatch(response.data[0]._id);
        }
        else if (response.data[0]) {
          this.props.toMyAccount();
        }
        else {
          alert('password wrong!');
        }
      })
  }

  handleSignup(e) {
    console.log("sign up button")
    e.preventDefault();
    axios.post('/user/createNewUser', { username: this.state.username, password: this.state.password })
      .then(() => {
        this.props.toMatch(response.data._id);
        this.setState({
          onSignUpPage: false,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  toggleSignup() {
    this.setState(prevState => ({
      onSignUpPage: !prevState.onSignUpPage
    }));
  }

  render() {
    let displayed;
    if (!this.state.onSignUpPage) {
      displayed = (<Login
        updateInfo={this.updateInfo}
        handleLogin={this.handleSignin}
        handleToggleSignup={this.toggleSignup}
      />)
    }
    else {
      displayed = (<Signup
        updateInfo={this.updateInfo}
        handleSignup={this.handleSignup}
        handleToggleSignup={this.toggleSignup}
      />)
    }
    return (
      <div>
        {displayed}
      </div>
    )
  }
}

export default LoginContainer;

