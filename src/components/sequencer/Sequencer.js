import React from 'react';

import TimeBar from './TimeBar';

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

function Sequencer(props) {
  return (
    <div>
      <table
        className="table table-striped table-dark table-bordered table-sm"
        style={{ textAlign: 'center' }}
      >
        <thead>
          <tr>
            <th />
            <th>
              <TimeBar index={props.index} />
            </th>
            <th>pitch</th>
            <th>reVerb</th>
            <th>VoluMe</th>
          </tr>
        </thead>
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
      </table>
    </div>
  );
}

export default Sequencer;
