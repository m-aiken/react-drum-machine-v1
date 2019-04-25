import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SingleStep extends Component {
  static propTypes = {
    step: PropTypes.object.isRequired,
    updateChecked: PropTypes.func.isRequired
  };

  style = {
    height: '100%',
    width: '100%',
    margin: '0',
    opacity: '0'
  };

  render() {
    const { step } = this.props.step;
    return (
      <input
        type="checkbox"
        onChange={this.props.updateChecked.bind(this, step)}
        style={this.style}
      />
    );
  }
}

export default SingleStep;
