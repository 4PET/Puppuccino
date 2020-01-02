import React from 'react';

const Profile = ({ dogList, currentPhoto }) => {
  if (!dogList || dogList.length === 0) {
    return null;
  }
  return (
    <div>
      <img id='inputimage' alt='' src={dogList[currentPhoto].photo} width="100%" height="500px"/>
      <ul>
        <li><strong>Name:</strong> {dogList[currentPhoto].name}</li>
        <li><strong>Age:</strong> {dogList[currentPhoto].age}</li>
        <li><strong>Gender:</strong> {dogList[currentPhoto].gender}</li>
        <li><strong>Breed:</strong> {dogList[currentPhoto].breed}</li>
        <li><strong>Size:</strong> {dogList[currentPhoto].size}</li>
        <li><strong>Temperament:</strong> {dogList[currentPhoto].temperament}</li>
        <li><strong>Neutered_spayed:</strong> {dogList[currentPhoto].neutered_spayed}</li>
        <li><strong>About Me:</strong> {dogList[currentPhoto].bio}</li>      
      </ul>
    </div>
  )
}

export default Profile;

