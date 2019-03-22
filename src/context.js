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
