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
      confirmPassword: '',
      userId: '',
      onSignUpPage: false,
    };
  }

  updateInfo = (property, value) => {
    let updateObj = {};
    updateObj[property] = value;
    this.setState(updateObj);
  }

  handleSignin = (e) => {
    console.log('clicked', { username: this.state.username, password: this.state.password });
    e.preventDefault();
    axios.post('/user/verify', { username: this.state.username, password: this.state.password })
      .then(response => {
        console.log('this is sing in response', response);
        if (response.data[0] && response.data[1]) {
          this.props.toMatch(response.data[0]._id, response.data[1]._id);
        }
        else if (response.data[0]) {
          this.props.toMyAccount(response.data[0]._id);
        }
        else {
          alert('password wrong!');
        }
      })
  }

  handleSignup = (e) => {
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) { alert("Confirm passwords match.") } else {

      axios.post('/user/createNewUser', { username: this.state.username, password: this.state.password })
        .then((response) => {
          this.props.toMyAccount(response.data._id);
          this.setState({
            onSignUpPage: false,
          });
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }

  toggleSignup = () => {
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

