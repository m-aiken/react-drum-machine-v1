import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SingleStep extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    updateChecked: PropTypes.func.isRequired
  };

  render() {
    const { index, updateChecked } = this.props;
    return (
      <input
        type="checkbox"
        className="single-step"
        onChange={updateChecked.bind(this, index)}
      />
    );
  }
}

export default SingleStep;
