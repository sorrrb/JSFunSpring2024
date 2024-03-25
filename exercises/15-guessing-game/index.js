import { prompt, question, questionInt } from "readline-sync";
let maxNumber;
let minNumber = 0;

function setupGame() { // Main function to determine secret number and game setup
  console.log("::::::::::::::::::::::::::::::::::::::::\n:::: Welcome to the Guessing Game! ::::\n::::::::::::::::::::::::::::::::::::::::\n\nPress CTRL + C to stop at any time.\n\nDifficulties:\n1. Very Easy - [0, 5]\n2. Easy - [0, 10]\n3. Medium - [0, 25]\n4. Hard - [0, 50]\n5. Very Hard - [0, 100]\n");
  const USER_DIFFICULTY = setDifficulty();
  switch (USER_DIFFICULTY) {
    case 1:
      maxNumber = 6;
      break;
    case 2:
      maxNumber = 11;
      break;
    case 3:
      maxNumber = 26;
      break;
    case 4:
      maxNumber = 51;
      break;
    case 5:
      maxNumber = 101;
      break;
    default:
      console.log("ERROR");
      break;
  }

  const num = Math.floor(Math.random() * maxNumber);
  return num;
}

function setDifficulty() { // Helper function to set game difficulty
  let output = questionInt("Please enter a number 1-5 to select a difficulty:\n", { limit: [1, 2, 3, 4, 5] });
  return output;
}



function startGame(secretNumber) { // Main function to run game loop
  let isGameOver = false;
  while (!isGameOver) { // While end condition isn't met,
    let userGuess = guessNumber(); // prompt user for numerical input,
    isGameOver = (userGuess === secretNumber ? true : false); // compare input to secret number,
    if (!isGameOver && userGuess > secretNumber) { // if end condition is not met AND user guess is higher than secret number,
      let numDifference = userGuess - secretNumber; // set the difference as a variable,
      console.log("The number is lower than your guess.");
      if (numDifference < 5) console.log("Piping hot!!"); // check this variable against several conditions to determine how close the guess was.
      else if (numDifference < 10) console.log("Hotter...");
      else if (numDifference < 25) console.log("Warmer...");
      else console.log("You're pretty cold."); // Provide feedback based off conditions.
    } else if (!isGameOver && userGuess < secretNumber) { // Otherwise, if end condition is not met BUT user guess is lower than secret number,
      let numDifference = userGuess - secretNumber; // again, set the difference as a variable,
      console.log("The number is higher than your guess.");
      if (numDifference < 5) console.log("Piping hot!!"); // then check this variable against several conditions to determine how close the guess was.
      else if (numDifference < 10) console.log("Hotter...");
      else if (numDifference < 25) console.log("Warmer...");
      else console.log("You're pretty cold."); // Provide feedback based off conditions.
    }
  }

  console.log(`Congratulations! You win! The number was ${secretNumber}\n`);
}

function guessNumber() { // Helper function to handle user guessing
  let input = questionInt(`\nWhat do you think the number is? (${minNumber}-${maxNumber - 1})\n`, {
    limit: function (input) {
      return input >= minNumber && input <= (maxNumber - 1);
    },
    limitMessage: `Sorry, please enter a valid number between ${minNumber} and ${maxNumber - 1}`
  });
  return input;
}

const SECRET_NUM = setupGame(); // Function invocation to setup game and assign secret number to constant
startGame(SECRET_NUM); // Function invocation to begin game with secret number as terminal condition