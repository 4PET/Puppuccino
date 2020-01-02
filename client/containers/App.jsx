import React from "react";
import MyAccount from "./MyAccount.jsx";
import MatchContainer from './MatchContainer.jsx';
import LoginContainer from "./LogInContainer.jsx";
import ChatContainer from "./ChatContainer.jsx";
import Navigation from '../components/Navigation/Navigation'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageToRender: "login",
      userId: -1
    };
  }

  toMatch = (id = this.state.userId) => {
    this.setState({
      userId: id,
      pageToRender: "match",
    });
  }

  signOut = () => {
    this.setState({
      pageToRender: "login",
      userId: -1
    })
  }

  toMyAccount = () => {
    this.setState({
      pageToRender: "myAccount",
    });
  }

  toChat = () => {
    this.setState({
      pageToRender: "chat",
    });
  }

  render() {
    let displayed = null;
    let navigation = null;
    if (this.state.pageToRender === "login") {
      displayed = (<LoginContainer toMatch={this.toMatch} toMyAccount={this.toMyAccount} />);
    }

    else if(this.state.pageToRender === "match"){
      displayed = (
        <MatchContainer userId = {this.state.userId} signOut={this.signOut} toMyAccount={this.toMyAccount} toChat={this.toChat}/>
      );
    }
    else if(this.state.pageToRender === "myAccount") {
      displayed = (<MyAccount userId = {this.state.userId} signOut={this.signOut} toMatch={this.toMatch} toMyAccount={this.toMyAccount} toChat={this.toChat}/>);
    }
    else if(this.state.pageToRender === "chat"){
      displayed = (<ChatContainer userId = {this.state.userId} toMyAccount={this.toMyAccount} toMatch={this.toMatch} signOut={this.signOut} />);
    }

    if (this.state.pageToRender !== 'login'){
      navigation = (
        <Navigation signOut={this.signOut} handleClickMyAccount={this.toMyAccount} toChat ={this.toChat} toMatch={this.toMatch} />
      )
    }
    
    return (
      <React.Fragment>
        {navigation}
        {displayed}
      </React.Fragment>
    )
  }
}

export default App;

