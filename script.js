function rpsGame(yourChoice) {
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = getBotChoice(getRandomNumber());
  //alert(botChoice);
  results = getWinner(humanChoice, botChoice); 
  //console.log(results);
  message = getMessage(results);
  //console.log(message);
  displayFrontEnd(message, humanChoice, botChoice);
}

function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}

function getBotChoice(number) {
  return ['rock', 'paper', 'scissors'][number];
}

function getWinner(yourChoice, computerChoice) {
  var resultsDatabase = {
    'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
    'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
    'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
  };

  var yourScore = resultsDatabase[yourChoice][computerChoice] 
  var computerScore = resultsDatabase[computerChoice][yourChoice]

  return [yourScore, computerScore];
}

function getMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return {'message': 'You lost!', 'color': 'red'};
  } else if (yourScore === 0.5) {
    return {'message': 'You tied!', 'color': 'orange'};
  } else {
    return {'message': 'You won!', 'color': 'green'}
  }
}

function displayFrontEnd(getMessage, humanChoice, botChoice) {
  //remove images when you click
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  //create divs for results
  var messageDiv = document.createElement('div');

  messageDiv.innerHTML = "<h1 style='color: " + getMessage['color'] + "; '>" + "You picked " + humanChoice  + ".  " + "Bot picked " + botChoice + ".  " + getMessage['message'] + "</h1>"; 

  document.getElementById('flex-box-rps-div').appendChild(messageDiv);
}