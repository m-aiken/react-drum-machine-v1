import React, { Component } from 'react';
import { Provider } from './context';
import Tone from 'tone';

import StartModal from './components/StartModal';
import Playback from './components/Playback';

import './App.css';
import './css/headerTransport.css';
import './css/sequencer.css';

let audioCtx;

class App extends Component {
  constructor() {
    super();
    this.state = {
      modal: true
    };
  }

  componentDidMount() {
    audioCtx = new Tone.Context();
  }

  closeModal = () => {
    audioCtx.resume();
    this.setState({ modal: false });
  };

  render() {
    return (
      <Provider>
        <div className="project-container">
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
