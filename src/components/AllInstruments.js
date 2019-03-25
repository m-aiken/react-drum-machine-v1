import React, { Component } from 'react';
import { Context } from '../context';
import Tone from 'tone';

import Transport from './transport/Transport';
import TimeBar from './sequencer/TimeBar';
import Sequencer from './sequencer/Sequencer';

const kickPlayer = new Tone.Player().toMaster();
const boomPlayer = new Tone.Player().toMaster();
const snarePlayer = new Tone.Player().toMaster();
const rimPlayer = new Tone.Player().toMaster();
const clhatPlayer = new Tone.Player().toMaster();
const ophatPlayer = new Tone.Player().toMaster();
const cowbellPlayer = new Tone.Player().toMaster();
const clavePlayer = new Tone.Player().toMaster();
const maracaPlayer = new Tone.Player().toMaster();
const congaPlayer = new Tone.Player().toMaster();

class AllInstruments extends Component {
  constructor() {
    super();
    this.state = {
      index: 15,
      bpm: 120
    };
  }

  componentDidMount() {
    this.sounds = new Tone.Buffers(
      {
        kick: 'sounds/kick.wav',
        boom: 'sounds/boom.wav',
        snare: 'sounds/snare.wav',
        rim: 'sounds/rim.wav',
        clhat: 'sounds/clhat.wav',
        ophat: 'sounds/ophat.wav',
        cowbell: 'sounds/cowbell.wav',
        clave: 'sounds/clave.wav',
        maraca: 'sounds/maraca.wav',
        conga: 'sounds/conga.wav'
      },
      () => {
        console.log('Sounds loaded successfully');
        this.initializeSequencer();
      }
    );
  }

  initializeSequencer = () => {
    Tone.Transport.scheduleRepeat(() => {
      Tone.Transport.bpm.value = this.state.bpm;
      this.setState(prevState => ({ index: (prevState.index + 1) % 16 }));
      this.samplePlayback(this.context.kickSteps, kickPlayer, 'kick');
      this.samplePlayback(this.context.boomSteps, boomPlayer, 'boom');
      this.samplePlayback(this.context.snareSteps, snarePlayer, 'snare');
      this.samplePlayback(this.context.rimSteps, rimPlayer, 'rim');
      this.samplePlayback(this.context.clhatSteps, clhatPlayer, 'clhat');
      this.samplePlayback(this.context.ophatSteps, ophatPlayer, 'ophat');
      this.samplePlayback(this.context.cowbellSteps, cowbellPlayer, 'cowbell');
      this.samplePlayback(this.context.claveSteps, clavePlayer, 'clave');
      this.samplePlayback(this.context.maracaSteps, maracaPlayer, 'maraca');
      this.samplePlayback(this.context.congaSteps, congaPlayer, 'conga');
    }, '16n');
  };

  samplePlayback = (stateSteps, samplePlayer, sound) => {
    stateSteps.map(item => {
      if (item.step === this.state.index + 1 && item.checked === true) {
        samplePlayer.buffer = this.sounds.get(sound);
        samplePlayer.start();
      }
      return item;
    });
  };

  changeBpm = event => {
    const { name } = event.target;
    name === 'up'
      ? this.setState(prevState => ({ bpm: prevState.bpm + 1 }))
      : this.setState(prevState => ({ bpm: prevState.bpm - 1 }));
  };

  render() {
    return (
      <div>
        <Transport
          startSequencer={() => Tone.Transport.start()}
          stopSequencer={() => Tone.Transport.stop()}
          bpmValue={this.state.bpm}
          changeBpm={this.changeBpm}
        />
        <div>
          <table className="table table-striped table-dark table-bordered table-sm">
            <thead>
              <tr>
                <th scope="col" />
                <TimeBar index={this.state.index} />
              </tr>
            </thead>
            <Sequencer />
          </table>
        </div>
      </div>
    );
  }
}

AllInstruments.contextType = Context;

export default AllInstruments;
