import React from 'react';
import PropTypes from 'prop-types';

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
    <div className="sequencer">
      <div className="sequencer-row">
        <div />
        <TimeBar index={props.index} />
        <div className="sliderName">pitch</div>
        <div className="sliderName">reVerb</div>
        <div className="sliderName">VoluMe</div>
      </div>
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
    </div>
  );
}

Sequencer.propTypes = {
  index: PropTypes.number.isRequired
};

export default Sequencer;
