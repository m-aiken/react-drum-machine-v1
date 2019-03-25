import React from 'react';

function BpmDisplay(props) {
  const { bpmValue, changeBpm } = props;
  return (
    <React.Fragment>
      bpm: {bpmValue}
      <button name="up" onClick={changeBpm}>
        bpm up
      </button>
      <button name="down" onClick={changeBpm}>
        bpm doWn
      </button>
    </React.Fragment>
  );
}

export default BpmDisplay;
