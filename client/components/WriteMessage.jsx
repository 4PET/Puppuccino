/**
 * ************************************
 *
 * @module  WriteMessage.js
 * @author  4PET
 * @date    first day of 2020
 * @description component to send message 
 *
 * ************************************
 */

import React , {useState} from 'react';
import axios from 'axios';


const WriteMessage = ({sender, receiver, fetchMessage}) => {
  const [newMessage, updateMessage] = useState("");
  const postMessage = () => {
    axios.post('/chat/postMessage',{ newMessage, sender, receiver })
    .then(() => {
      fetchMessage();
      updateMessage("")}
    )
    .catch(err => console.log(err));
  }
  
  return (
    <div id='chatroom-form'>
      <input name='msgBody' id='msg-body' placeholder='type your message' type='text' onChange={(e) => updateMessage(e.target.value)} value={newMessage}/>
      <button id='button' name='button' onClick={postMessage}>send</button>
    </div>
  )
}

export default WriteMessage;