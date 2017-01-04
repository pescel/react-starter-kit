import React, { Component } from 'react';
import DisplayMessage from './DisplayMessage';
import ResetBtn from './ResetBtn';
import ClearBtn from './ClearBtn';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      randomNumber: null,
      min: 1,
      max: 100,
      userNumber: '',
      userGuess: '',
      resetDisabled: false,
      clearDisabled: false,
    };
  }

  componentDidMount() {
    this.randomNumberGenerator();
  }

  randomNumberGenerator() {
    this.setState({ randomNumber: Math.floor((Math.random()
      * this.state.max - this.state.min) + this.state.min) });
    }

    clearGuess() {
      this.setState({ userNumber: '' });
      this.setState({ clearDisabled: true });
    }

    resetGame() {
      this.setState({ userGuess: '' });
      this.setState({ message: '' });
      this.setState({ resetDisabled: true });
      this.clearGuess();
      this.randomNumberGenerator();
    }

    render() {
      return (
        <div id="application">
        <h1>Number Guesser</h1>
        <p>Your last guess was...</p>
        <h2 className="displayNumber">{this.state.userGuess}</h2>
        <p className="message">{DisplayMessage(this.state.userGuess, this.state.randomNumber)}</p>
        <input
        className="guess-input"
        value={ this.state.userNumber }
        onChange={ (e) =>
          this.setState({ userNumber: e.target.value, clearDisabled: false, resetDisabled: false }) }
          />
          <button className="guess-btn" onClick={() => this.setState({ userGuess: this.state.userNumber })}>Guess</button>
          <ClearBtn clearDisabled={this.state.clearDisabled} clearGuess={this.clearGuess.bind(this)} />
          <ResetBtn
          resetDisabled={this.state.resetDisabled}
          resetGame={this.resetGame.bind(this)}
          />
          </div>
        );
      }
    }
