// code that picks a random number between 1 and 100:
// Global variables:
const secret = Math.floor(Math.random() * 99) + 1;
document.querySelector('#secret').innerHTML = secret;

let count = 0; 


function check() {
    count = count +1;
    document.querySelector ('#num-guesses').innerHTML = 'Number of guesses:' + count; 
    // your code here.
    // console.log("your code here!");
    // step 1: get the number that they enter from the DOM. Store that in a variable. 
    let guess = document.querySelector ('#guess').value;
    // console.log(guess); checks to see if it worked in console, using inspect. 
    // step 2: convert the guess (in strong form) to a number.
    guess = Number(guess);
    // step 3: Check if they won. Number is euqal to secret number. 
    //   * if guess === secret -> You win!
    //   * if guess < secret -> Too low!
    //   * if guess > secret -> Too high!
    if (guess === secret) {
        console.log ('You Win!');
        document.querySelector ('#message').textContent = 'You Win!';
        document.querySelector ('#celebrate').className = '';
    } else if (guess < secret) {
        console.log ('Too low!');
        document.querySelector ('#message').textContent = 'Too low!';
        document.querySelector ('#celebrate').className = 'hide';
    } else {
        console.log ('Too high!');
        document.querySelector ('#message').textContent = 'Too high!';
        document.querySelector ('#celebrate').className = 'hide';
    }

}