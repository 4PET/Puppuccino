/**
 * ************************************
 *
 * @module  chatContainer.js
 * @author  4PET
 * @date    first day of 2020
 * @description container for chat blocks
 *
 * ************************************
 */

import React from 'react';
import ChatBox from '../components/ChatBox.jsx'
import MessageContainer from './MessageContainer.jsx'
import Navigation from '../components/Navigation/Navigation'
import axios from 'axios'

class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageWith: -1,
      chatList: [],
      allChats: {}
    };

    this.fetchChats = this.fetchChats.bind(this);
  }

  componentDidMount(){
    this.fetchChats();
    setInterval(()=> this.fetchChats(), 10000);
  }

  fetchChats(){
    axios.get('/chat', {
      params:{ userId: this.props.userId }
    })
    .then(res => {
      const cache = new Set();
      let chatList = [];
      let allChats = {};
      for(let i = res.data.length - 1; i >= 0; i--){
        let opponentId = res.data[i].sender_id == this.props.userId ? res.data[i].receiver_id : res.data[i].sender_id;
        let opponentName = res.data[i].sender_id == this.props.userId ? res.data[i].receivername : res.data[i].sendername;
        if(!cache.has(opponentId)){
          cache.add(opponentId);
          chatList.push({
            dogId: opponentId,
            dogName: opponentName,
            lastChat: res.data[i].content,
            timeStamp: res.data[i].timeStamp,
          });
          allChats[opponentId] = [];
        }
        allChats[opponentId].push(res.data[i]);
      }
      this.setState({ chatList, allChats })
    })
    .catch(err => console.log(err));
  }

  render() {
    const display = [];
    if(this.state.messageWith > 0){
      display.push(<MessageContainer 
        key = {0}
        userId = {this.props.userId}
        opponentId = {this.state.messageWith}
        messages = {this.state.allChats[this.state.messageWith]}
        goBackFunction = {() =>{
          this.setState({messageWith: -1});
        }}
        fetchChats = {this.fetchChats}
      />)
    }
    else {
      for(let i = 0; i < this.state.chatList.length; i++){
        display.push(<ChatBox 
          key = {i}
          dogName={this.state.chatList[i].dogName} 
          lastChat = {this.state.chatList[i].lastChat} 
          timeStamp = {this.state.chatList[i].timeStamp}
          clickEvent = {() => {
            this.setState({messageWith : this.state.chatList[i].dogId});
          }}
        />)
      }
    }
    return (
      <div>
        <Navigation signOut={this.props.signOut} handleClickMyAccount={this.props.toMyAccount} toChat ={this.props.toChat} toMatch={this.props.toMatch}/>
        {this.state.chatList.length === 0 ? <div>no match yet!</div> : display}
      </div>
    )
  }
}

export default ChatContainer;