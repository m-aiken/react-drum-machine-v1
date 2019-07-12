import React, { Component } from 'react';
import { Consumer } from '../../context';

import InstrumentTitle from '../sequencer/InstrumentTitle';
import SixteenSteps from '../sequencer/SixteenSteps';
import { noteRange } from '../controls/NoteRange';
import PitchSlider from '../controls/PitchSlider';
import ReverbSlider from '../controls/ReverbSlider';
import VolumeSlider from '../controls/VolumeSlider';
import { boomReverb, boomGain } from '../ToneComponents';

class BoomRow extends Component {
  constructor() {
    super();
    this.state = {
      boomSteps: [
        { checked: false },
        { checked: false },
        { checked: false },
        { checked: false },
        { checked: false },
        { checked: false },
        { checked: false },
        { checked: false },
        { checked: false },
        { checked: false },
        { checked: false },
        { checked: false },
        { checked: false },
        { checked: false },
        { checked: false },
        { checked: false }
      ],
      pitchSliderValue: '9',
      samplerNote: 'C3',
      reverb: '0',
      volume: '100'
    };
  }

  updateChecked = (dispatch, stepIdx) => {
    this.setState({
      boomSteps: this.state.boomSteps.map((item, stateIdx) => {
        if (stateIdx === stepIdx) {
          item.checked = !item.checked;
        }
        return item;
      })
    });
    dispatch({
      type: 'UPDATE_BOOM_STEPS',
      payload: this.state.boomSteps
    });
  };

  changePitch = (dispatch, event) => {
    const { value } = event.target;
    this.setState({ pitchSliderValue: value }, () => {
      this.setState({ samplerNote: noteRange[value - 1] });
    });
    dispatch({
      type: 'UPDATE_BOOM_NOTE',
      payload: this.state.samplerNote
    });
  };

  changeReverb = event => {
    const { value } = event.target;
    this.setState({ reverb: value }, () => {
      boomReverb.gain.value = this.state.reverb / 100;
    });
  };

  changeVolume = event => {
    const { value } = event.target;
    this.setState({ volume: value }, () => {
      boomGain.gain.value = this.state.volume / 100;
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="sequencer-row">
              <InstrumentTitle name="BooM" />
              <SixteenSteps
                steps={this.state.boomSteps}
                updateChecked={this.updateChecked.bind(this, dispatch)}
              />
              <PitchSlider
                value={this.state.pitchSliderValue}
                changePitch={this.changePitch.bind(this, dispatch)}
                note={this.state.note}
              />
              <ReverbSlider
                value={this.state.reverb}
                changeReverb={this.changeReverb}
              />
              <VolumeSlider
                value={this.state.volume}
                changeVolume={this.changeVolume}
              />
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default BoomRow;
