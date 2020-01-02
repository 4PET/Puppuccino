import React from "react";

const Signup = props => {
  return (
    <div id="signupContainer" className="container">
      <form id="signupForm">
        <h2>Sign Up</h2>
        <input
          className="loginInput"
          type="text"
          name="username"
          placeholder="Username"
          onChange={e => props.updateInfo(e.target.name, e.target.value)}
        />
        <input
          className="loginInput"
          type="password"
          name="password"
          placeholder="Password"
          onChange={e => props.updateInfo(e.target.name, e.target.value)}
        />
        <button className="loginButtons" onClick={
          props.handleSignup
        }>Sign Up</button>
        <div className="toggleSignup" onClick={props.handleToggleSignup}>
          <button className="loginButtons" id="secondaryBtn">Have an Account? Click to Log In</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;