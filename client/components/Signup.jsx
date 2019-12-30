import React from "react";

const Signup = props => {
  return (
    <div id="signupContainer" className="container">
      <form id="signupForm">
        <h2>Sign Up</h2>
        <input
          type="text"
          name="username"
          autoComplete="username"
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          autoComplete="password"
          placeholder="Password"
        />
        <button onClick={}>Sign Up</button>
        <div className="toggleSignup" onClick={}>
          Log In
        </div>
      </form>
    </div>
  );
};

export default Signup;