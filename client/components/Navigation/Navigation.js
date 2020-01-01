import React from 'react';

const Navigation = ({ handleClickMyAccount, signOut }) => {
  return (
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
      <p onClick={() => handleClickMyAccount()} className="">My Account</p>
      <p onClick={() => signOut('signout')} className="">Sign Out</p>
    </nav>
  );
}

export default Navigation;