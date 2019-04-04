import React, { Component } from 'react';
import { Provider } from './context';

import Playback from './components/Playback';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="container">
          <Playback />
        </div>
      </Provider>
    );
  }
}

export default App;
