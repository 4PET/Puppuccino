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
      userId: -1,
      dogId: -1
    };
  }

  toMatch = (userId, dogId) => {
    this.setState({
      pageToRender: "match",
      userId,
      dogId,
    });
  }

  signOut = () => {
    this.setState({
      pageToRender: "login",
      userId: -1,
      dogId: -1
    })
  }

  toMyAccount = (userId) => {
    this.setState({
      pageToRender: "myAccount",
      userId,
    });
  }

  toChat = () => {
    console.log('this is to Chat', this.state.dogId);
    this.setState({
      pageToRender: "chat",
    });
  }

  render() {
    let displayed = null;
    let navigation = null;
    if (this.state.pageToRender === "login") {
      displayed = (<LoginContainer toMatch={this.toMatch} toMyAccount={this.toMyAccount}/>);
    }

    else if(this.state.pageToRender === "match"){
      displayed = (
        <MatchContainer userId = {this.state.userId} dogId={this.state.dogId}/>
      );
    }
    else if(this.state.pageToRender === "myAccount") {
      displayed = (<MyAccount userId = {this.state.userId} dogId={this.state.dogId}/>);
    }
    else if(this.state.pageToRender === "chat"){
      displayed = (<ChatContainer userId = {this.state.userId} dogId={this.state.dogId} />);
    }

    if (this.state.pageToRender !== 'login'){
      navigation = (
        <Navigation userId = {this.state.userId} dogId={this.state.dogId} signOut={this.signOut} handleClickMyAccount={this.toMyAccount} toChat ={this.toChat} toMatch={this.toMatch} />
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

