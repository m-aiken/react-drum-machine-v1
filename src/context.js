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
      ],
      kickNote: 'C3',
      boomSteps: [
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
      ],
      boomNote: 'C3',
      snareSteps: [
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
      ],
      snareNote: 'C3',
      rimSteps: [
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
      ],
      rimNote: 'C3',
      clhatSteps: [
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
      ],
      clhatNote: 'C3',
      ophatSteps: [
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
      ],
      ophatNote: 'C3',
      cowbellSteps: [
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
      ],
      cowbellNote: 'C3',
      claveSteps: [
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
      ],
      claveNote: 'C3',
      maracaSteps: [
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
      ],
      maracaNote: 'C3',
      congaSteps: [
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
