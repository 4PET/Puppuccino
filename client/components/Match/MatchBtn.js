import React from 'react';

const MatchBtn = ({ handleMatch }) => {
  return (
    <button className="matchBtns" onClick={handleMatch}>
      Match
    </button>
  )
}

export default MatchBtn;