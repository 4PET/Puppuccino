import React from 'react';

const PassBtn = ({ handlePass }) => {
  return (
    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={handlePass}>
      Pass
    </button>
  )
}

export default PassBtn;