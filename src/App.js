import React, { Component } from 'react';
import { Provider } from './context';
import Tone from 'tone';

import StartModal from './components/StartModal';
import Playback from './components/Playback';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      modal: true
    };
  }

  closeModal = () => {
    Tone.context.resume();
    this.setState({ modal: false });
  };

  render() {
    return (
      <Provider>
        <div className="container">
          <StartModal
            modalStatus={this.state.modal}
            closeModal={this.closeModal}
          />
          <Playback />
        </div>
      </Provider>
    );
  }
}

export default App;
