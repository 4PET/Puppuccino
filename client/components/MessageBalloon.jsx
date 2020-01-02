/**
 * ************************************
 *
 * @module  MessageBalloon.js
 * @author  4PET
 * @date    first day of 2020
 * @description individual message balloon
 *
 * ************************************
 */

import React from 'react';

const MessageBalloon = ({ isMine, content }) => {
  let display;
  if(isMine){
    display = (<div className = 'speech-bubble-sent sent'>{content}</div>)
  }
  else{
    display = (<div className = 'speech-bubble-received'>{content}</div>)
  }
  return (
    <React.Fragment>
      {display}
    </React.Fragment>
  )
}

export default MessageBalloon;