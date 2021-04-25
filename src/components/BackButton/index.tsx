import React from 'react';

const BackButton = () => (
  <button className="btn primary" onClick={() => window.history.back()}>
    Return
  </button>
);

export default BackButton;
