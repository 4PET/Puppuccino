import React from 'react';

const Navigation = ({ handleClickMyAccount, signOut }) => {
  return (
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
      <button onClick={() => handleClickMyAccount()} className="">My Account</button>
      <button>Chat</button>
      <button onClick={() => signOut('signout')} className="">Sign Out</button>
    </nav>
  );
}

export default Navigation;