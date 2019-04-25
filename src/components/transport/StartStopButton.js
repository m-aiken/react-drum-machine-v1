import React from 'react';
import PropTypes from 'prop-types';

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

StartStopButton.propTypes = {
  toggleSequencer: PropTypes.func.isRequired
};

export default StartStopButton;
