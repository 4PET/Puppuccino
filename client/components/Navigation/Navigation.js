import React from 'react';

const Navigation = ({ toMatch, handleClickMyAccount, toChat, signOut }) => {


  return (
    <nav style={{display: 'flex', justifyContent: 'space-between'}}>
        <button onClick={() => toMatch()}>Discover New Matches</button>
        <button onClick={() => toChat()}>Chat</button>      
        <button onClick={() => handleClickMyAccount()} className="">My Account</button>
        <button onClick={() => signOut()} className="">Sign Out</button>      
    </nav>
  );
}

export default Navigation;

