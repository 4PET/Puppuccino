import React from 'react';

const BackToMainBtn = props => {
    return (
        <button id="backButton" type="button" onClick={props.handleBackToMain}>Main</button>
    );
};

export default BackToMainBtn;