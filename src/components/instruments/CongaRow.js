import React, { Component } from 'react';
import { Consumer } from '../../context';

import SixteenSteps from '../sequencer/SixteenSteps';
import { noteRange } from '../controls/NoteRange';
import PitchSlider from '../controls/PitchSlider';
import VolumeSlider from '../controls/VolumeSlider';
import ReverbSlider from '../controls/ReverbSlider';
import { congaReverb, congaGain } from '../ToneComponents';

class CongaRow extends Component {
  constructor() {
    super();
    this.state = {
      congaSteps: [
        { step: 1, checked: false },
        { step: 2, checked: false },
        { step: 3, checked: false },
        { step: 4, checked: false },
        { step: 5, checked: false },
        { step: 6, checked: false },
        { step: 7, checked: false },
        { step: 8, checked: false },
        { step: 9, checked: false },
        { step: 10, checked: false },
        { step: 11, checked: false },
        { step: 12, checked: false },
        { step: 13, checked: false },
        { step: 14, checked: false },
        { step: 15, checked: false },
        { step: 16, checked: false }
      ],
      sliderValue: 9,
      samplerNote: 'C3',
      reverb: 0,
      volume: 100
    };
  }

  updateChecked = (dispatch, step) => {
    this.setState({
      congaSteps: this.state.congaSteps.map(item => {
        if (item.step === step) {
          item.checked = !item.checked;
        }
        return item;
      })
    });
    dispatch({
      type: 'UPDATE_CONGA_STEPS',
      payload: this.state.congaSteps
    });
  };

  changePitch = (dispatch, event) => {
    const { value } = event.target;
    this.setState({ sliderValue: value }, () => {
      this.setState({ samplerNote: noteRange[value - 1] });
    });
    dispatch({
      type: 'UPDATE_CONGA_NOTE',
      payload: this.state.samplerNote
    });
  };

  changeReverb = event => {
    const { value } = event.target;
    this.setState({ reverb: value }, () => {
      congaReverb.gain.value = this.state.reverb / 100;
    });
  };

  changeVolume = event => {
    const { value } = event.target;
    this.setState({ volume: value }, () => {
      congaGain.gain.value = this.state.volume / 100;
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <tr>
              <th scope="row">ConGA</th>
              <td>
                <SixteenSteps
                  steps={this.state.congaSteps}
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

export default CongaRow;
