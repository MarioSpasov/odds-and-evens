import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions/settings';


class App extends Component {
  startGame = () => {
    this.props.dispatch(startGame())
  }
  // https://deckofcardsapi.com/

  // Shuffle the Cards:
  // https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1

  // Draw a Card:
  // https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2

  render() {
    return (
      <div>
        <h2>♥️ ♠️ Evens or Odds ♣️ ♦️</h2>
        {
          this.props.gameStarted ? (
            <div>
              <h3>The game is on!</h3>
              <br />
              <button>Cancel Game</button>

            </div>
          ) : (
            <div>
              <h3>A new game awaits!</h3>
              <br />
              <button onClick={this.startGame}>Start Game</button>
            </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { gameStarted: state.gameStarted }
}

const componentConnector = connect(mapStateToProps);


export default componentConnector(App);