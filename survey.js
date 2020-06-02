// create a profile generator //

/*
EXAMPLE:  Devani loves listening to Ludovico Einaudi while coding,
          devouring Yak Momos for brunch, prefers Tennis over any other sport,
          and is amazing at dropping mad puns at inopportune times.
*/

// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!

// Once all questions are answered, our survey app should output a fully formed paragraph for their online profile, similar to the one shown previously. It should then exit. The user would have to rerun the app to go through the process of generating another profile.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answerArr = [];

rl.question("What's your name? Nicknames are also acceptable :) ", (name0) => {
  answerArr.push(name0);
  rl.question("What's an activity you like doing? ", (activity1) => {
    answerArr.push(activity1);
    rl.question("What do you listen to while doing that? ", (music2) => {
      answerArr.push(music2);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal3) => {
        answerArr.push(meal3);
        rl.question("What's your favourite thing to eat for that meal? ", (food4) => {
          answerArr.push(food4);
          rl.question("Which sport is your absolute favourite? ", (sport5) => {
            answerArr.push(sport5);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower6) => {
              answerArr.push(superpower6);
              console.log(`${answerArr[0]} loves listening to ${answerArr[2]} while ${answerArr[1]}, devouring ${answerArr[4]} for ${answerArr[3]}, prefers ${answerArr[5]} over any other sport, and is amazing at ${answerArr[6]}.`)
              rl.close();
            });
          });
        });
      });
    });
  });
});

