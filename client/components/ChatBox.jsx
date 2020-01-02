/**
 * ************************************
 *
 * @module  chatBox.js
 * @author  4PET
 * @date    first day of 2020
 * @description single message box
 *
 * ************************************
 */

import React from 'react';

const ChatBox = ({ dogName, lastChat, timeStamp, clickEvent }) => {
  return (
    <div id="chatBox" className="chatBox" onClick={clickEvent}>
      <h2>Chat</h2>
      <div className="currentChat">
        <h3>Chatting with: {dogName}</h3>
        <p>{lastChat}</p>
        <p>{timeStamp}</p>
      </div>
    </div >
  );
}

export default ChatBox;