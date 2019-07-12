import React from 'react';
import PropTypes from 'prop-types';

import SingleStep from './SingleStep';

function SixteenSteps(props) {
  return (
    <div className="sixteen-steps">
      {props.steps.map((step, stepIdx) => (
        <div
          className="seq-box"
          key={stepIdx}
          style={step.checked ? { background: '#fd2c08' } : { background: '' }}
        >
          <SingleStep index={stepIdx} updateChecked={props.updateChecked} />
        </div>
      ))}
    </div>
  );
}

SixteenSteps.propTypes = {
  steps: PropTypes.array.isRequired,
  updateChecked: PropTypes.func.isRequired
};

export default SixteenSteps;
