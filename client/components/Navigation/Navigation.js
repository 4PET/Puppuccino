import React from 'react';

const Navigation = ({ userId, dogId, toMatch, handleClickMyAccount, toChat, signOut }) => {


  return (
    <nav style={{display: 'flex', justifyContent: 'space-between'}}>
        <button onClick={() => toMatch(userId, dogId)}>Discover New Matches</button>
        <button onClick={() => toChat(userId)}>Chat</button>      
        <button onClick={() => handleClickMyAccount(userId)} className="">My Account</button>
        <button onClick={() => signOut()} className="">Sign Out</button>      
    </nav>
  );
}

export default Navigation;

