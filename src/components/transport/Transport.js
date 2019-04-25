import React from 'react';
import PropTypes from 'prop-types';

import StartStopButton from './StartStopButton';
import BpmDisplay from './BpmDisplay';

function Transport(props) {
  const { toggleSequencer, bpmValue, changeBpm } = props;
  return (
    <div className="transport">
      <StartStopButton toggleSequencer={toggleSequencer} />
      <BpmDisplay bpmValue={bpmValue} changeBpm={changeBpm} />
    </div>
  );
}

Transport.propTypes = {
  toggleSequencer: PropTypes.func.isRequired,
  bpmValue: PropTypes.number.isRequired,
  changeBpm: PropTypes.func.isRequired
};

export default Transport;
