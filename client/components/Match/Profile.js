import React from 'react';

const Profile = ({ dogList, currentPhoto }) => {
  console.log(dogList, currentPhoto);
  if (!dogList || dogList.length === 0) {
    return null;
  }
  return (
    <div>
      <img id='inputimage' alt='' src={dogList[currentPhoto].photo} width="100%" height="500px"/>
    </div>
  )
}

export default Profile;

