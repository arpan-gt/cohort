function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date : ", currentDate);

  //various components of date
  console.log("Date : ", currentDate.getDate());
  console.log("Month : ", currentDate.getMonth() + 1);
  console.log("Year : ", currentDate.getFullYear());

  console.log("Time in milliseconds since 1970 : ", currentDate.getTime());
}

dateMethods();

/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
  const start = new Date();
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  const end = new Date();
  const timeTaken = (end - start) / 1000;
  console.log(`sum : ${sum}`);
  console.log(`timeTaken : ${timeTaken}`);
}

calculateTime(1000000);

function currentTimePrint() {
  const currentTime = new Date();
  console.log(currentTime.toLocaleString());
}

setInterval(currentTimePrint, 1000);
