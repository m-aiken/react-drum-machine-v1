import React from 'react';

import KickRow from '../instruments/KickRow';
import BoomRow from '../instruments/BoomRow';
import SnareRow from '../instruments/SnareRow';
import RimRow from '../instruments/RimRow';
import ClHatRow from '../instruments/ClHatRow';
import OpHatRow from '../instruments/OpHatRow';
import CowbellRow from '../instruments/CowbellRow';
import ClaveRow from '../instruments/ClaveRow';
import MaracaRow from '../instruments/MaracaRow';
import CongaRow from '../instruments/CongaRow';

function Sequencer() {
  return (
    <tbody>
      <KickRow />
      <BoomRow />
      <SnareRow />
      <RimRow />
      <ClHatRow />
      <OpHatRow />
      <CowbellRow />
      <ClaveRow />
      <MaracaRow />
      <CongaRow />
    </tbody>
  );
}

export default Sequencer;
