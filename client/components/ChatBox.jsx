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
    <div id="chatBox" className="chatBox" onClick = {clickEvent}>
      <h2>{dogName}</h2>
      <p>{lastChat}</p>
      <p>{timeStamp}</p>
    </div >
  );
}

export default ChatBox;