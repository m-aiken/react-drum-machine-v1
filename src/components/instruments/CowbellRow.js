import React, { Component } from 'react';
import { Consumer } from '../../context';

import InstrumentTitle from '../sequencer/InstrumentTitle';
import SixteenSteps from '../sequencer/SixteenSteps';
import { noteRange } from '../controls/NoteRange';
import PitchSlider from '../controls/PitchSlider';
import VolumeSlider from '../controls/VolumeSlider';
import ReverbSlider from '../controls/ReverbSlider';
import { cowbellReverb, cowbellGain } from '../ToneComponents';

class CowbellRow extends Component {
  constructor() {
    super();
    this.state = {
      cowbellSteps: [
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
      cowbellSteps: this.state.cowbellSteps.map((item, stateIdx) => {
        if (stateIdx === stepIdx) {
          item.checked = !item.checked;
        }
        return item;
      })
    });
    dispatch({
      type: 'UPDATE_COWBELL_STEPS',
      payload: this.state.cowbellSteps
    });
  };

  changePitch = (dispatch, event) => {
    const { value } = event.target;
    this.setState({ pitchSliderValue: value }, () => {
      this.setState({ samplerNote: noteRange[value - 1] });
    });
    dispatch({
      type: 'UPDATE_COWBELL_NOTE',
      payload: this.state.samplerNote
    });
  };

  changeReverb = event => {
    const { value } = event.target;
    this.setState({ reverb: value }, () => {
      cowbellReverb.gain.value = this.state.reverb / 100;
    });
  };

  changeVolume = event => {
    const { value } = event.target;
    this.setState({ volume: value }, () => {
      cowbellGain.gain.value = this.state.volume / 100;
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="sequencer-row">
              <InstrumentTitle name="CoWbell" />
              <SixteenSteps
                steps={this.state.cowbellSteps}
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

export default CowbellRow;
