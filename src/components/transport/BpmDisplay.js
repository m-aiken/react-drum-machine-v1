import React from 'react';

function BpmDisplay(props) {
  const { bpmValue, changeBpm } = props;
  const style = {
    background: '#ffc600',
    color: 'black'
  };
  return (
    <React.Fragment>
      bpm: {bpmValue}
      <button name="up" onClick={changeBpm} style={style}>
        bpm up
      </button>
      <button name="down" onClick={changeBpm} style={style}>
        bpm doWn
      </button>
    </React.Fragment>
  );
}

export default BpmDisplay;
