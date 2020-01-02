import React from 'react';

const Profile = ({ dogList, currentPhoto }) => {
  if (!dogList || dogList.length === 0) {
    return null;
  }
  return (
    <div>
      <img id='inputimage' alt='' src={dogList[currentPhoto].photo} width="100%" />
      <ul>
        <li><strong>Name:</strong> {dogList[currentPhoto].name}</li>
        <li><strong>Age:</strong> {dogList[currentPhoto].age}</li>
        <li><strong>Gender:</strong> {dogList[currentPhoto].gender}</li>
        <li><strong>Breed:</strong> {dogList[currentPhoto].breed}</li>
        <li><strong>Size:</strong> {dogList[currentPhoto].size}</li>
        <li><strong>Temperament:</strong> {dogList[currentPhoto].temperament}</li>
        <li><strong>Neutered/Spayed:</strong> {dogList[currentPhoto].neutered_spayed}</li>
        <li><strong>About Me:</strong> {dogList[currentPhoto].bio}</li>
        {/* <h4>Owner Profile</h4> */}
        {/* <li><strong>Age:</strong> </li> */}
        {/* <li><strong>Gender:</strong> </li> */}
      </ul>
    </div>
  )
}

export default Profile;

