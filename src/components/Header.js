import React from 'react';

import MasterGain from './controls/MasterGain';

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <div />
        <h1>dRUMmACHINe</h1>
        <MasterGain />
      </div>
    </div>
  );
}

export default Header;
