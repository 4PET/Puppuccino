import React from 'react';

const Login = (props) => {
  return (
    <div id="loginContainer" className="container">
      <form id="loginForm">
        <h2>Log In</h2>
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
        <button onClick={}>Log In</button>
        Sign Up
      </form>
    </div >
  );
}

export default Login;