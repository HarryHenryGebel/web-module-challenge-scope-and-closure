// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element
 * in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and
 *  `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?

   counter1() uses a closure and returns a function to access the
   counter, counter2() uses a global variable and increments the
   counter directly. counter1() can produce any number of counters
   that can fit in the computer's memory, counter2() can only manage a
   single counter.

 * 2. Which of the two uses a closure? How can you tell?

   counter1() . The variable is inside brackets.

 * 3. In what scenario would the counter1 code be preferable? In what
 * scenario would counter2 be better?

   There is no situation where counter2() would be preferable.

 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning()

   Write a function called `inning` that generates a random number of
   points that a team scored in an inning. This should be a whole
   number between 0 and 2. */

function inning(){
  return Math.floor(Math.random() * 3);
}

/* Task 3: finalScore()

   Write a higher order function called `finalScore` that accepts the
   callback function `inning` (from above) and a number of innings and
   and returns the final score of the game in the form of an object.

   For example,

   finalScore(inning, 9) might return:
   {
   "Home": 11,
   "Away": 5,
   }

*/

function finalScore(inningFunction, innings){
  let homeScore = 0;
  let awayScore = 0;

  for(_ = 0; _ < innings; _++) {
    homeScore += inningFunction();
    awayScore += inningFunction();
  }

  return {home: homeScore,
          away: awayScore};
}

/* Task 4:

   Create a function called `scoreboard` that accepts the following
   parameters:

   (1) Callback function `inning` that you wrote above
   (2) A number of innings

   and returns the score at each pont in the game, like so:

   1st inning: 0 - 2
   2nd inning: 1 - 3
   3rd inning: 1 - 3
   4th inning: 2 - 4
   5th inning: 4 - 6
   6th inning: 4 - 6
   7th inning: 4 - 6
   8th inning: 5 - 8
   9th inning: 6 - 10

   Final Score: 6 - 10 */

/* Convert a cardinal number or a string representing a cardinal number to an
   ordinal number. */
function toOrdinal(cardinal) {
  const lastDigit = cardinal % 10, // figure out last digit
        lastTwoDigits = cardinal % 100; // figure out last two digits

  // figure out if number is in the teens
  const teensp = (Math.floor(lastTwoDigits / 10) === 1);

  /* The rules of making ordinal numbers:
   * Teens always end in "th"
   * Otherwise, 1 ends in "st"
   * 2 ends in "nd"
   * 3 ends in "rd"
   * everything else ends in "th" */
  if (teensp) // teens always end in "th"
    return cardinal + "th";
  else if (lastDigit === 1) // Otherwise, 1 ends in "st"
    return cardinal + "st";
  else if (lastDigit === 2) // 2 ends in "nd"
    return cardinal + "nd";
  else if (lastDigit === 3) // 3 ends in "rd"
    return cardinal + "rd";
  else
    return cardinal + "th"; // everything else ends in "th"
}

function scoreboard(inningFunction, innings) {
  let homeScore = 0;
  let awayScore = 0;

  for(inning = 0; inning < innings; inning++) {
    homeScore += inningFunction();
    awayScore += inningFunction();
    console.log(
      `${toOrdinal(inning + 1)} inning: ${homeScore} - ${awayScore}`);
  }

  console.log(`Final Score: ${homeScore} - ${awayScore}`);
}
