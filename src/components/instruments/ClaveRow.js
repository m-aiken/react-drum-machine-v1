import React, { Component } from 'react';
import { Consumer } from '../../context';

import SixteenSteps from '../sequencer/SixteenSteps';
import { noteRange } from '../controls/NoteRange';
import PitchSlider from '../controls/PitchSlider';
import VolumeSlider from '../controls/VolumeSlider';
import ReverbSlider from '../controls/ReverbSlider';
import { claveReverb, claveGain } from '../ToneComponents';

class ClaveRow extends Component {
  constructor() {
    super();
    this.state = {
      claveSteps: [
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
      sliderValue: 9,
      samplerNote: 'C3',
      reverb: '0',
      volume: '100'
    };
  }

  updateChecked = (dispatch, stepIdx) => {
    this.setState({
      claveSteps: this.state.claveSteps.map((item, stateIdx) => {
        if (stateIdx === stepIdx) {
          item.checked = !item.checked;
        }
        return item;
      })
    });
    dispatch({
      type: 'UPDATE_CLAVE_STEPS',
      payload: this.state.claveSteps
    });
  };

  changePitch = (dispatch, event) => {
    const { value } = event.target;
    this.setState({ sliderValue: value }, () => {
      this.setState({ samplerNote: noteRange[value - 1] });
    });
    dispatch({
      type: 'UPDATE_CLAVE_NOTE',
      payload: this.state.samplerNote
    });
  };

  changeReverb = event => {
    const { value } = event.target;
    this.setState({ reverb: value }, () => {
      claveReverb.gain.value = this.state.reverb / 100;
    });
  };

  changeVolume = event => {
    const { value } = event.target;
    this.setState({ volume: value }, () => {
      claveGain.gain.value = this.state.volume / 100;
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <tr>
              <th scope="row">ClAve</th>
              <td>
                <SixteenSteps
                  steps={this.state.claveSteps}
                  updateChecked={this.updateChecked.bind(this, dispatch)}
                />
              </td>
              <td>
                <PitchSlider
                  sliderValue={this.state.sliderValue}
                  changePitch={this.changePitch.bind(this, dispatch)}
                  note={this.state.note}
                />
              </td>
              <td>
                <ReverbSlider
                  value={this.state.reverb}
                  changeReverb={this.changeReverb}
                />
              </td>
              <td>
                <VolumeSlider
                  value={this.state.volume}
                  changeVolume={this.changeVolume}
                />
              </td>
            </tr>
          );
        }}
      </Consumer>
    );
  }
}

export default ClaveRow;
