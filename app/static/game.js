$(document).ready(function () {

  $("#form").submit(function (event) {
    event.preventDefault()

    let playerScore = 0;
    let compScore = 0;

    let playerOption = $("#playerOption option:selected").text();
    console.log(playerOption)

    let choiceStack = ['paper', 'rock', 'scissors'];
    let playerChoiceIndex = choiceStack.indexOf(playerOption);

    //define computer's choice
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = choiceStack[randomNum];

    // create 2D array for possible outcomes
    const results = [
      ['t', 'c', 'u'],
      ['u', 't', 'c'],
      ['c', 'u', 't'],
    ];


    let playerResult = results[randomNum][playerChoiceIndex];


    

    if (playerResult === 'u') {
      alert("You win");
      playerScore ++;
      $("#player").text(playerScore);

    } else if (playerResult === 't') {
      alert("it's a tie");

    } else {
      alert("Computer wins");
      compScore ++;
      $("#comp").text(compScore);

    }
    return false;
  });
});