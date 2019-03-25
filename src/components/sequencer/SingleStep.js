import React, { Component } from 'react';

class SingleStep extends Component {
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
