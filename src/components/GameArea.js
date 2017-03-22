import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardSection, Button } from './common';
import Winner from './Winner';

class GameArea extends Component {
  state = { playerChoice: null, computerChoice: null };

  onButtonPress(e) {
    this.setState({
      playerChoice: e,
      computerChoice: this.randomChoice()
    });
  }

  startOver() {
    this.setState({
      computerChoice: '',
      playerChoice: ''
    });
  }

  randomChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const rand = Math.floor(Math.random() * (choices.length - 0)) + 0;
    return choices[rand];
  }

  winsGame() {
    const { playerChoice, computerChoice } = this.state;
    const computerWins = `Computer wins
                          ${computerChoice} vs ${playerChoice}`;
    const playerWins = `Player wins
                          ${playerChoice} vs ${computerChoice}`;

    if (playerChoice === computerChoice) {
    return `It is a Tie
    ${playerChoice} vs ${computerChoice}`;
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
      return computerWins;
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
      return playerWins;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
      return playerWins;
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
      return computerWins;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
      return playerWins;
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
      return computerWins;
    }
  }

  renderGameOrWinner() {
    const { playerChoice, computerChoice } = this.state;

    if (!playerChoice && !computerChoice) {
      return (
        <Card>
          <CardSection>
            <Button
              onPress={this.onButtonPress.bind(this, 'rock')}
            >
              Rock
            </Button>
          </CardSection>

          <CardSection>
            <Button
              onPress={this.onButtonPress.bind(this, 'paper')}
            >
              Paper
            </Button>
          </CardSection>

          <CardSection>
            <Button
              onPress={this.onButtonPress.bind(this, 'scissors')}
            >
              Scissors
            </Button>
          </CardSection>
        </Card>
      );
    }
    return (
      <View>
        <Winner>
          {this.winsGame()}
        </Winner>
        <Button onPress={this.startOver.bind(this)}>
          Play Again
        </Button>
      </View>

    );
  }

  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderGameOrWinner()}
      </View>
    );
  }
}

export default GameArea;
