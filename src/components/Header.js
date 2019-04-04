import React from 'react';

import MasterGain from './controls/MasterGain';

function Header() {
  return (
    <div className="header">
      <div />
      <h1 className="display-5 text-center">dRUMmACHINe</h1>
      <MasterGain />
    </div>
  );
}

export default Header;
