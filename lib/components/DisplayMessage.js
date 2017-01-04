import React from 'react';
import Application from './Application';

const DisplayMessage = (userGuess, randomNumber) => {
  console.log(userGuess, randomNumber);
  if (parseInt(userGuess) === randomNumber) {
    return 'YAYAYAYAYAYAYAYAYYY! Click the reset button to play again!'
  } else if (userGuess > randomNumber && userGuess <= 100) {
    return 'Oh hell no, your guess is too high!';
  } else if (userGuess < randomNumber && userGuess >= 1) {
    return 'Nope. Your guess is too low..TRY AGAIN LOSER!';
  } else if(userGuess === '') {
    return '';
  } else if (userGuess < 1 || userGuess > 100) {
    return 'YOU\'RE OUTTA RANGE, BRO!';
  } else if (!Number.isInteger(userGuess)) {
    return 'You have to guess a number! Don\'t be stupid.'
  }
}


export default DisplayMessage;
