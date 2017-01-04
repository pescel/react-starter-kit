import React from 'react';

const ClearBtn = ({ clearDisabled, clearGuess }) => {

  return (
    <button
    className="clear-btn"
    disabled={clearDisabled}
    onClick={() => clearGuess()}
    >Clear</button>
  );
};

export default ClearBtn;
