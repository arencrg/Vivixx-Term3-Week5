//npm install prompt
var prompt = require('prompt');

console.log('How many dice do you want to throw?:');

//this will start the prompt
  prompt.start();

//this asks for user input
  prompt.get(['throws'], function (err, result) {
  console.log('The dice will be thrown ' + result.throws + ' times');

//we can't close the prompt yet cause we need to get the user input to be used in the while loop

var throws = result.throws;

  while (throws > 0) {
      console.log(Math.floor(Math.random()*6+1));
      throws--;
  }
//now we can close the prompt
});
