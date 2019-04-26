import React from 'react';
import PropTypes from 'prop-types';

import SingleStep from './SingleStep';

function SixteenSteps(props) {
  return props.steps.map((step, stepIdx) => (
    <div
      className={step.checked === false ? 'seq-box' : 'seq-box-active'}
      key={stepIdx}
    >
      <SingleStep index={stepIdx} updateChecked={props.updateChecked} />
    </div>
  ));
}

SixteenSteps.propTypes = {
  steps: PropTypes.array.isRequired,
  updateChecked: PropTypes.func.isRequired
};

export default SixteenSteps;
