/**
 * ************************************
 *
 * @module  messageContainer.js
 * @author  4PET
 * @date    first day of 2020
 * @description container for messages
 *
 * ************************************
 */

import React from 'react';
import MessageBalloon from '../components/MessageBalloon.jsx'
import WriteMessage from '../components/WriteMessage.jsx'

const messageContainer = ({ userId, opponentId, messages, goBackFunction, fetchChats }) => {
  const messagesDisplay=[];
  for(let i = messages.length -1; i  >= 0; i --){
    if(messages[i].sender_id == userId){
      messagesDisplay.push(<MessageBalloon key = {i} isMine = {true} content = {messages[i].content}/>)
    }
    else{
      messagesDisplay.push(<MessageBalloon key = {i} isMine = {false} content = {messages[i].content}/>)
    }
  }
  return (
    <React.Fragment>
      <div onClick = {goBackFunction}>Go back</div>
      <div id = "chatroom">
        {messagesDisplay}
      </div>
      <WriteMessage sender = {userId} receiver = {opponentId} fetchMessage = {fetchChats}/>
    </React.Fragment>
  )
}

export default messageContainer;