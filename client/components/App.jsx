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
  helloFunction(){
    HIHIHI;
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

