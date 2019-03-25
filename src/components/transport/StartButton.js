import React from 'react';

function StartButton(props) {
  return (
    <React.Fragment>
      <button onClick={props.startSequencer}>stArt!</button>
    </React.Fragment>
  );
}

export default StartButton;
