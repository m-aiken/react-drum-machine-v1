import React from 'react';
import PropTypes from 'prop-types';

function BpmDisplay(props) {
  const { bpmValue, changeBpm } = props;

  return (
    <React.Fragment>
      <div className="bpm-value">bpm: {bpmValue}</div>
      <button name="up" onClick={changeBpm} className="bpm-button">
        bpm up
      </button>
      <button name="down" onClick={changeBpm} className="bpm-button">
        bpm doWn
      </button>
    </React.Fragment>
  );
}

BpmDisplay.propTypes = {
  bpmValue: PropTypes.number.isRequired,
  changeBpm: PropTypes.func.isRequired
};

export default BpmDisplay;
