import React from 'react';
import { connect } from "react-redux"
import * as actions from "../actions/actions.js"

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  updateInfo: (name, value) => dispatch(actions.updateInfo(name, value)),
  handleLogin: (e) => dispatch(actions.handleLogin(e))
})


const Login = (props) => {
  return (
    <div id="loginContainer" className="container">
      <div id="loginForm">
        <h2>Log In</h2>
        <input
          type="text"
          name="username"
          autoComplete="username"
          placeholder="Username"
          onChange={e => props.updateInfo(e.target.name, e.target.value)}
        />
        <input
          type="password"
          name="password"
          autoComplete="password"
          placeholder="Password"
          onChange={e => props.updateInfo(e.target.name, e.target.value)}
        />
        <button onClick={props.handleLogin}>Log In</button>
        {/* <div className="toggleSignup" onClick={props.handleToggleSignup}>
          Click to Sign Up
        </div> */}
      </div>
    </div >
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)