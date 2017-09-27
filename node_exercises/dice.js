//npm install prompt
var prompt = require('prompt');
console.log('How many dice do you want to throw?:');
  prompt.start();
  prompt.get(['throws'], function (err, result) {
  console.log('The dice will be thrown ' + result.throws + ' times');
  while (result.throws > 0) {
      console.log('Rolling the die... ' + Math.floor(Math.random()*6+1));
      result.throws--;
  }
});
