import React from 'react';

const Navigation = ({ handleClickMyAccount, signOut , toChat}) => {
  return (
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
      <button onClick={() => handleClickMyAccount()} className="">My Account</button>
      <button onClick={() => toChat()}>Chat</button>
      <button onClick={() => signOut('signout')} className="">Sign Out</button>
    </nav>
  );
}

export default Navigation;