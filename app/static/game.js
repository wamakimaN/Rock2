let choiceStack = ['paper', 'rock', 'scissors'];



$(document).ready(function() {


  let playerOption = $("#playerOption option:selected").text();

  let choiceStack = ['paper', 'rock', 'scissors'];
  let playerChoiceIndex = choiceStack.indexOf(playerOption);


  const results = [
['t', 'c', 'u'],
['u', 't', 'c'],
['c', 'u', 't'],
];

  let playerResult = results[randomNum][playerChoiceIndex];
 




});