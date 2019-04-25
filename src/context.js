import React, { Component } from 'react';

export const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_KICK_STEPS':
      return {
        ...state,
        kickSteps: action.payload
      };
    case 'UPDATE_BOOM_STEPS':
      return {
        ...state,
        boomSteps: action.payload
      };
    case 'UPDATE_SNARE_STEPS':
      return {
        ...state,
        snareSteps: action.payload
      };
    case 'UPDATE_RIM_STEPS':
      return {
        ...state,
        rimSteps: action.payload
      };
    case 'UPDATE_CLHAT_STEPS':
      return {
        ...state,
        clhatSteps: action.payload
      };
    case 'UPDATE_OPHAT_STEPS':
      return {
        ...state,
        ophatSteps: action.payload
      };
    case 'UPDATE_COWBELL_STEPS':
      return {
        ...state,
        cowbellSteps: action.payload
      };
    case 'UPDATE_CLAVE_STEPS':
      return {
        ...state,
        claveSteps: action.payload
      };
    case 'UPDATE_MARACA_STEPS':
      return {
        ...state,
        maracaSteps: action.payload
      };
    case 'UPDATE_CONGA_STEPS':
      return {
        ...state,
        congaSteps: action.payload
      };
    case 'UPDATE_KICK_NOTE':
      return {
        ...state,
        kickNote: action.payload
      };
    case 'UPDATE_BOOM_NOTE':
      return {
        ...state,
        boomNote: action.payload
      };
    case 'UPDATE_SNARE_NOTE':
      return {
        ...state,
        snareNote: action.payload
      };
    case 'UPDATE_RIM_NOTE':
      return {
        ...state,
        rimNote: action.payload
      };
    case 'UPDATE_CLHAT_NOTE':
      return {
        ...state,
        clhatNote: action.payload
      };
    case 'UPDATE_OPHAT_NOTE':
      return {
        ...state,
        ophatNote: action.payload
      };
    case 'UPDATE_COWBELL_NOTE':
      return {
        ...state,
        cowbellNote: action.payload
      };
    case 'UPDATE_CLAVE_NOTE':
      return {
        ...state,
        claveNote: action.payload
      };
    case 'UPDATE_MARACA_NOTE':
      return {
        ...state,
        maracaNote: action.payload
      };
    case 'UPDATE_CONGA_NOTE':
      return {
        ...state,
        congaNote: action.payload
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  constructor() {
    super();
    this.state = {
      kickSteps: [
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
      kickNote: 'C3',
      boomSteps: [
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
      boomNote: 'C3',
      snareSteps: [
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
      snareNote: 'C3',
      rimSteps: [
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
      rimNote: 'C3',
      clhatSteps: [
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
      clhatNote: 'C3',
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
      ophatNote: 'C3',
      cowbellSteps: [
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
      cowbellNote: 'C3',
      claveSteps: [
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
      claveNote: 'C3',
      maracaSteps: [
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
      maracaNote: 'C3',
      congaSteps: [
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
      congaNote: 'C3',
      dispatch: action => this.setState(state => reducer(state, action))
    };
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
