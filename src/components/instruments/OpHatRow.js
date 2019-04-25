import React, { Component } from 'react';
import { Consumer } from '../../context';

import SixteenSteps from '../sequencer/SixteenSteps';
import { noteRange } from '../controls/NoteRange';
import PitchSlider from '../controls/PitchSlider';
import ReverbSlider from '../controls/ReverbSlider';
import VolumeSlider from '../controls/VolumeSlider';
import { ophatReverb, ophatGain } from '../ToneComponents';

class OpHatRow extends Component {
  constructor() {
    super();
    this.state = {
      ophatSteps: [
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
      reverb: 0,
      volume: 100
    };
  }

  updateChecked = (dispatch, stepIdx) => {
    this.setState({
      ophatSteps: this.state.ophatSteps.map((item, stateIdx) => {
        if (stateIdx === stepIdx) {
          item.checked = !item.checked;
        }
        return item;
      })
    });
    dispatch({
      type: 'UPDATE_OPHAT_STEPS',
      payload: this.state.ophatSteps
    });
  };

  changePitch = (dispatch, event) => {
    const { value } = event.target;
    this.setState({ sliderValue: value }, () => {
      this.setState({ samplerNote: noteRange[value - 1] });
    });
    dispatch({
      type: 'UPDATE_OPHAT_NOTE',
      payload: this.state.samplerNote
    });
  };

  changeReverb = event => {
    const { value } = event.target;
    this.setState({ reverb: value }, () => {
      ophatReverb.gain.value = this.state.reverb / 100;
    });
  };

  changeVolume = event => {
    const { value } = event.target;
    this.setState({ volume: value }, () => {
      ophatGain.gain.value = this.state.volume / 100;
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <tr>
              <th scope="row">OpeN hi-hAt</th>
              <td>
                <SixteenSteps
                  steps={this.state.ophatSteps}
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

export default OpHatRow;
