import React from 'react';

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

export default Transport;
