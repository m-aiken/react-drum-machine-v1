import React, { Component } from 'react';
import { Context, Consumer } from '../context';

import StartButton from './StartButton';
import StopButton from './StopButton';
import BpmDisplay from './BpmDisplay';
import TimeBar from './TimeBar';

import KickRow from './instruments/KickRow';
import BoomRow from './instruments/BoomRow';
import SnareRow from './instruments/SnareRow';
import RimRow from './instruments/RimRow';
import ClHatRow from './instruments/ClHatRow';
import OpHatRow from './instruments/OpHatRow';
import CowbellRow from './instruments/CowbellRow';
import ClaveRow from './instruments/ClaveRow';
import MaracaRow from './instruments/MaracaRow';
import CongaRow from './instruments/CongaRow';

class AllInstruments extends Component {
  constructor() {
    super();
    this.state = {
      index: 15,
      bpm: 120,
      time: 125
    };
    this.kick = new Audio('sounds/kick.wav');
    this.boom = new Audio('sounds/boom.wav');
    this.snare = new Audio('sounds/snare.wav');
    this.rim = new Audio('sounds/rim.wav');
    this.clhat = new Audio('sounds/clhat.wav');
    this.ophat = new Audio('sounds/ophat.wav');
    this.cowbell = new Audio('sounds/cowbell.wav');
    this.clave = new Audio('sounds/clave.wav');
    this.maraca = new Audio('sounds/maraca.wav');
    this.conga = new Audio('sounds/conga.wav');
  }

  changeBpm = event => {
    const { name } = event.target;
    switch (name) {
      case 'up':
        this.setState(
          prevState => ({ bpm: prevState.bpm + 1 }),
          () => {
            this.setState({ time: 60000 / this.state.bpm / 4 });
          }
        );
        break;
      case 'down':
        this.setState(
          prevState => ({ bpm: prevState.bpm - 1 }),
          () => {
            this.setState({ time: 60000 / this.state.bpm / 4 });
          }
        );
        break;
    }
  };

  startSequencer = event => {
    clearTimeout(this.indexTimeoutID);
    this.indexTimeoutID = setTimeout(() => {
      this.setState(prevState => ({ index: (prevState.index + 1) % 16 }));
      this.kickPlayback();
      this.boomPlayback();
      this.snarePlayback();
      this.rimPlayback();
      this.clhatPlayback();
      this.ophatPlayback();
      this.cowbellPlayback();
      this.clavePlayback();
      this.maracaPlayback();
      this.congaPlayback();
      this.startSequencer();
    }, this.state.time);
  };

  stopSequencer = event => {
    clearTimeout(this.indexTimeoutID);
    this.setState({ index: 15 });
  };

  kickPlayback = () => {
    this.context.kickSteps.map(item => {
      if (item.step === this.state.index + 1 && item.checked === true) {
        this.kick.currentTime = 0;
        this.kick.play();
      }
      return item;
    });
  };

  boomPlayback = () => {
    this.context.boomSteps.map(item => {
      if (item.step === this.state.index + 1 && item.checked === true) {
        this.boom.currentTime = 0;
        this.boom.play();
      }
      return item;
    });
  };

  snarePlayback = () => {
    this.context.snareSteps.map(item => {
      if (item.step === this.state.index + 1 && item.checked === true) {
        this.snare.currentTime = 0;
        this.snare.play();
      }
      return item;
    });
  };

  rimPlayback = () => {
    this.context.rimSteps.map(item => {
      if (item.step === this.state.index + 1 && item.checked === true) {
        this.rim.currentTime = 0;
        this.rim.play();
      }
      return item;
    });
  };

  clhatPlayback = () => {
    this.context.clhatSteps.map(item => {
      if (item.step === this.state.index + 1 && item.checked === true) {
        this.clhat.currentTime = 0;
        this.clhat.play();
      }
      return item;
    });
  };

  ophatPlayback = () => {
    this.context.ophatSteps.map(item => {
      if (item.step === this.state.index + 1 && item.checked === true) {
        this.ophat.currentTime = 0;
        this.ophat.play();
      }
      return item;
    });
  };

  cowbellPlayback = () => {
    this.context.cowbellSteps.map(item => {
      if (item.step === this.state.index + 1 && item.checked === true) {
        this.cowbell.currentTime = 0;
        this.cowbell.play();
      }
      return item;
    });
  };

  clavePlayback = () => {
    this.context.claveSteps.map(item => {
      if (item.step === this.state.index + 1 && item.checked === true) {
        this.clave.currentTime = 0;
        this.clave.play();
      }
      return item;
    });
  };

  maracaPlayback = () => {
    this.context.maracaSteps.map(item => {
      if (item.step === this.state.index + 1 && item.checked === true) {
        this.maraca.currentTime = 0;
        this.maraca.play();
      }
      return item;
    });
  };

  congaPlayback = () => {
    this.context.congaSteps.map(item => {
      if (item.step === this.state.index + 1 && item.checked === true) {
        this.conga.currentTime = 0;
        this.conga.play();
      }
      return item;
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div>
              <div className="jumbotron jumbotro-fluid mt-4 mb-0 py-4 bg-dark text-light">
                <div className="container">
                  <h1 className="display-5 text-center">dRUMmACHINe</h1>
                  <div className="transport">
                    <StartButton startSequencer={this.startSequencer} />
                    <StopButton stopSequencer={this.stopSequencer} />
                    <BpmDisplay
                      bpmValue={this.state.bpm}
                      changeBpm={this.changeBpm}
                    />
                  </div>
                </div>
              </div>
              <div>
                <table className="table table-striped table-dark table-bordered table-sm">
                  <thead>
                    <tr>
                      <th scope="col" />
                      <TimeBar index={this.state.index} />
                    </tr>
                  </thead>
                  <tbody>
                    <KickRow />
                    <BoomRow />
                    <SnareRow />
                    <RimRow />
                    <ClHatRow />
                    <OpHatRow />
                    <CowbellRow />
                    <ClaveRow />
                    <MaracaRow />
                    <CongaRow />
                  </tbody>
                </table>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

AllInstruments.contextType = Context;

export default AllInstruments;
