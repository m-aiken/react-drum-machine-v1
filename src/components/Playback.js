import React, { Component } from 'react';
import { Context } from '../context';
import Tone from 'tone';

import Header from './Header';
import Transport from './transport/Transport';
import Sequencer from './sequencer/Sequencer';

import {
  kick,
  boom,
  snare,
  rim,
  clhat,
  ophat,
  cowbell,
  clave,
  maraca,
  conga
} from '../components/ToneComponents';

class Playback extends Component {
  constructor() {
    super();
    this.state = {
      index: 15,
      bpm: 120
    };
  }

  componentDidMount() {
    this.initializeSequencer();
  }

  initializeSequencer = () => {
    Tone.Transport.scheduleRepeat(() => {
      const ctx = this.context;
      Tone.Transport.bpm.value = this.state.bpm;
      this.setState(prevState => ({ index: (prevState.index + 1) % 16 }));

      // Playback using sampler
      this.samplerPlayback(ctx.kickSteps, kick, ctx.kickNote);
      this.samplerPlayback(ctx.boomSteps, boom, ctx.boomNote);
      this.samplerPlayback(ctx.snareSteps, snare, ctx.snareNote);
      this.samplerPlayback(ctx.rimSteps, rim, ctx.rimNote);
      this.samplerPlayback(ctx.clhatSteps, clhat, ctx.clhatNote);
      this.samplerPlayback(ctx.ophatSteps, ophat, ctx.ophatNote);
      this.samplerPlayback(ctx.cowbellSteps, cowbell, ctx.cowbellNote);
      this.samplerPlayback(ctx.claveSteps, clave, ctx.claveNote);
      this.samplerPlayback(ctx.maracaSteps, maraca, ctx.maracaNote);
      this.samplerPlayback(ctx.congaSteps, conga, ctx.congaNote);
    }, '16n');
  };

  // New version with Tone.Sampler
  samplerPlayback = (stateSteps, sampler, note) => {
    stateSteps.map((item, idx) => {
      if (idx === this.state.index && item.checked === true) {
        sampler.triggerAttack(note);
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
        <div className="jumbotron jumbotro-fluid mb-0 py-4 bg-dark text-light">
          <div>
            <Header />
            <Transport
              toggleSequencer={() => Tone.Transport.toggle()}
              bpmValue={this.state.bpm}
              changeBpm={this.changeBpm}
            />
          </div>
        </div>
        <Sequencer index={this.state.index} />
      </div>
    );
  }
}

Playback.contextType = Context;

export default Playback;
