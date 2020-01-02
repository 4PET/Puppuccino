import React from "react";
import MyAccount from "./MyAccount.jsx";
import MatchContainer from './MatchContainer.jsx';
import LoginContainer from "./LogInContainer.jsx";
import ChatContainer from "./ChatContainer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageToRender: "login",
      userId: 0,
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
    let displayed;
    if (this.state.pageToRender === "login") {
      displayed = (<LoginContainer toMatch={this.toMatch} toMyAccount={this.toMyAccount} />);
    }
    else if (this.state.pageToRender === "match") {
      displayed = (
        <MatchContainer userId={this.state.userId} signOut={this.signOut} toMyAccount={this.toMyAccount} toChat={this.toChat} />
      );
    }
    else if (this.state.pageToRender === "myAccount") {
      displayed = (<MyAccount userId={this.state.userId} signOut={this.signOut} toMatch={this.toMatch} toMyAccount={this.toMyAccount} toChat={this.toChat} />);
    }
    else if (this.state.pageToRender === "chat") {
      displayed = (<ChatContainer userId={this.state.userId} toMyAccount={this.toMyAccount} toMatch={this.toMatch} signOut={this.signOut} />);
    }
    return (
      <React.Fragment>
        <div id="titleBanner">
          <h1>Puppuccino</h1>
          {/* <img src="https://cdn.dribbble.com/users/713358/screenshots/5546308/dribbble-_____.png" height='80px' /> */}
          <img src="https://cdn.dribbble.com/users/3390157/screenshots/6315498/1_2x.png" height='80px' />
        </div>
        {displayed}
      </React.Fragment>
    )
  }
}

export default App;

