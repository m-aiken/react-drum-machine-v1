import React from 'react';
import PropTypes from 'prop-types';

function StartStopButton(props) {
  return (
    <React.Fragment>
      <button onClick={props.toggleSequencer} className="start-stop-button">
        stArt / stop
      </button>
    </React.Fragment>
  );
}

StartStopButton.propTypes = {
  toggleSequencer: PropTypes.func.isRequired
};

export default StartStopButton;
