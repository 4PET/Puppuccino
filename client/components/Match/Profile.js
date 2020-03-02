import React from 'react';
import PassBtn from './PassBtn';
import MatchBtn from './MatchBtn';

const Profile = ({ dogList, currentPhoto, handlePass, handleMatch }) => {
  if (!dogList || dogList.length === 0) {
    return null;
  }
  return (
    <>
      <div className="matchCard">
        <img id='inputimage' alt='' src={dogList[currentPhoto].photo} width="100%" />
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
        <PassBtn handlePass={handlePass} />
        <MatchBtn handleMatch={handleMatch} />
      </div>
    </>
  )
}

export default Profile;

