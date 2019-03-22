import React, { Component } from 'react';
import { Provider } from './context';

import AllInstruments from './components/AllInstruments';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="container">
          <AllInstruments />
        </div>
      </Provider>
    );
  }
}

export default App;
