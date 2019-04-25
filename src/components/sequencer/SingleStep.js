import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SingleStep extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    updateChecked: PropTypes.func.isRequired
  };

  style = {
    height: '100%',
    width: '100%',
    margin: '0',
    opacity: '0'
  };

  render() {
    const { index, updateChecked } = this.props;
    return (
      <input
        type="checkbox"
        onChange={updateChecked.bind(this, index)}
        style={this.style}
      />
    );
  }
}

export default SingleStep;
