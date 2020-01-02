import React from 'react';

const Login = ({updateInfo, handleLogin,handleToggleSignup }) => {
  return (
    <div id="loginContainer" className="container">
      <form id="loginForm">
        <h2>Log In</h2>
        <input
          type="text"
          name="username"
          autoComplete="username"
          placeholder="Username"
          onChange={e => updateInfo(e.target.name, e.target.value)}
        />
        <input
          type="password"
          name="password"
          autoComplete="password"
          placeholder="Password"
          onChange={e => updateInfo(e.target.name, e.target.value)}
        />
        <button onClick={handleLogin}>Log In</button>
        <div className="toggleSignup" onClick={handleToggleSignup}>
          Click to Sign Up
        </div>
      </form>
    </div >
  );
}

export default Login;