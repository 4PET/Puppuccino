import React from 'react';

const Login = ({ updateInfo, handleLogin, handleToggleSignup }) => {
  return (
    <div id="loginContainer" className="container">
      <form id="loginForm">
        <h2>Log In</h2>
        <input
          className="loginInput"
          type="text"
          name="username"
          autoComplete="username"
          placeholder="Username"
          onChange={e => updateInfo(e.target.name, e.target.value)}
        />
        <input
          className="loginInput"
          type="password"
          name="password"
          autoComplete="password"
          placeholder="Password"
          onChange={e => updateInfo(e.target.name, e.target.value)}
        />
        <button className="loginButtons" onClick={handleLogin}>Log In</button>
        <div className="toggleSignup" onClick={handleToggleSignup}>
          <button className="loginButtons" id="secondaryBtn">Click to Sign Up</button>
        </div>
      </form>
    </div >
  );
}

export default Login;