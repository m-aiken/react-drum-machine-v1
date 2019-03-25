import React from 'react';

import StartButton from './StartButton';
import StopButton from './StopButton';
import BpmDisplay from './BpmDisplay';

function Transport(props) {
  const { startSequencer, stopSequencer, bpmValue, changeBpm } = props;
  return (
    <div className="jumbotron jumbotro-fluid mt-4 mb-0 py-4 bg-dark text-light">
      <div className="container">
        <h1 className="display-5 text-center">dRUMmACHINe</h1>
        <div className="transport">
          <StartButton startSequencer={startSequencer} />
          <StopButton stopSequencer={stopSequencer} />
          <BpmDisplay bpmValue={bpmValue} changeBpm={changeBpm} />
        </div>
      </div>
    </div>
  );
}

export default Transport;
