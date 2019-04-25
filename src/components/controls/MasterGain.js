import React, { Component } from 'react';
import VolumeSlider from './VolumeSlider';
import { masterGain } from '../ToneComponents';

class MasterGain extends Component {
  constructor() {
    super();
    this.state = {
      volume: 100
    };
  }

  changeVolume = event => {
    const { value } = event.target;
    this.setState({ volume: value }, () => {
      masterGain.gain.value = this.state.volume / 100;
    });
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ textAlign: 'center' }}>
          <p>master volume</p>
          <VolumeSlider
            value={this.state.volume}
            changeVolume={this.changeVolume}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default MasterGain;
