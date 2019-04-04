import React from 'react';

function StartStopButton(props) {
  const style = {
    background: '#fd2c08',
    color: 'white'
  };
  return (
    <React.Fragment>
      <button onClick={props.toggleSequencer} style={style}>
        stArt / stop
      </button>
    </React.Fragment>
  );
}

export default StartStopButton;
