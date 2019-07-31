import React, { Component } from 'react';
import { Provider } from './context';
import Tone from 'tone';

import StartModal from './components/StartModal';
import Playback from './components/Playback';
import { checkBuffers } from './components/ToneComponents';

import './App.css';
import './css/headerTransport.css';
import './css/sequencer.css';

let audioCtx;

class App extends Component {
  constructor() {
    super();
    this.state = {
      soundsLoaded: false,
      modal: true
    };
  }

  // Create audio context
  // Check that all 10 audio buffers have loaded, promise resolved when true
  componentDidMount() {
    audioCtx = new Tone.Context();
    checkBuffers().then(() => {
      this.setState({ soundsLoaded: true });
    });
  }

  // Resume audio context on user interaction as per WebAudioAPI requirements
  closeModal = () => {
    audioCtx.resume();
    this.setState({ modal: false });
  };

  render() {
    return (
      <Provider>
        <div className="project-container">
          <StartModal
            soundsLoaded={this.state.soundsLoaded}
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
