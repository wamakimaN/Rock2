$(document).ready(function () {

  $("form#").submit(function (event) {
    event.preventDefault()

    let playerOption = $("#playerOption option:selected").text();

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

    console.log(playerResult)






  })

});