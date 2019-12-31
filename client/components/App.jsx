import React from "react";
import axios from "axios";
import Login from './Login.jsx';
import Signup from "./Signup.jsx";
import Signout from "./Signout.jsx";
import AccountPage from "./AccountPage.jsx"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',

      isLoggedIn: false,
      onSignUpPage: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleSignout = this.handleSignout.bind(this)
    this.handleToggleSignup = this.handleToggleSignup.bind(this);

  }

  updateInfo(property, value) {
    let updateObj = {};
    updateObj[property] = value;
    this.setState(updateObj);
  }

  handleLogin(e) {
    e.preventDefault();
    axios.post('/user/login', { username: this.state.username, password: this.state.password })
      .then(response => {
        this.setState({ isLoggedIn: true });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  handleSignup(e) {
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
      username: '',
      password: '',
      isLoggedIn: false,
      onSignUpPage: false,
    })
  }

  handleToggleSignup() {
    this.setState(prevState => ({
      onSignUpPage: !prevState.onSignUpPage
    }));
  }

  render() {

    let displayed;

    // SELF NOTE TO TALYA -- CHANGED this.state.isLoggedIn to !this.state.isLoggedIn for building
    if (!this.state.isLoggedIn) {
      displayed = (<AccountPage />)
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

    return (
      <div>
        {displayed}
      </div>
    )
  }
}

export default App;

