import React, { Component } from 'react';
import { Consumer } from '../../context';

import SixteenSteps from '../SixteenSteps';

class KickRow extends Component {
  constructor() {
    super();
    this.state = {
      kickSteps: [
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
      ]
    };
  }

  updateChecked = (dispatch, step) => {
    this.setState({
      kickSteps: this.state.kickSteps.map(item => {
        if (item.step === step) {
          item.checked = !item.checked;
        }
        return item;
      })
    });
    dispatch({
      type: 'UPDATE_KICK_STEPS',
      payload: this.state.kickSteps
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <tr>
              <th scope="row">Kick</th>
              <td>
                <SixteenSteps
                  steps={this.state.kickSteps}
                  updateChecked={this.updateChecked.bind(this, dispatch)}
                />
              </td>
            </tr>
          );
        }}
      </Consumer>
    );
  }
}

export default KickRow;
