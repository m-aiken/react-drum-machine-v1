import React, { Component } from 'react';
import VolumeSlider from './VolumeSlider';
import { masterGain } from '../ToneComponents';

class MasterGain extends Component {
  constructor() {
    super();
    this.state = {
      volume: '100'
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
      <div className="master-vol-container">
        <p>master volume</p>
        <div className="master-vol-slider-container">
          <VolumeSlider
            value={this.state.volume}
            changeVolume={this.changeVolume}
          />
        </div>
      </div>
    );
  }
}

export default MasterGain;
