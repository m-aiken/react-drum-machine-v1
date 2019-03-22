import React from 'react';

function StopButton(props) {
  return (
    <React.Fragment>
      <button onClick={props.stopSequencer}>stop!</button>
    </React.Fragment>
  );
}

export default StopButton;
