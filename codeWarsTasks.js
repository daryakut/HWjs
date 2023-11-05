// You Can't Code Under Pressure #1
// You need to double the integer and return it.
function doubleInteger(i) {
  return i * 2;
}
console.log(doubleInteger(5));

// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
function otherAngle(a, b) {
  return 180 - a - b;
}
console.log(otherAngle(43, 78));

// Given a non-negative integer, 3 for example, return a string with a murmur:
//  "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
const countSheep = function (num) {
  let i = 1;
  let result = "";
  if (num === 0) {
    return result;
  }
  while (i <= num) {
    result += `${i} sheep...`;
    i++;
  }
  return result;
};
console.log(countSheep(3));

// The function should return true if you are employed and not on vacation
// (because these are the circumstances under which you need to set an alarm). It should return false otherwise.
function setAlarm(employed, vacation) {
  return employed && !vacation;
}
console.log(setAlarm(true, false));

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus
// (the first item) and the number of people that get off the bus (the second item) at a bus stop.
// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array).

const busStops = [
  [10, 0],
  [3, 5],
  [5, 8],
];
const number = function (busStops) {
  let result = 0;
  for (const element of busStops) {
    result += element[0] - element[1];
  }
  return result;
};
console.log(number(busStops));

//second option

const number2 = (arr) =>
  arr.reduce((acc, current) => acc + current[0] - current[1], 0);
console.log(number2(busStops));

// All of the animals are having a feast! Each animal is bringing one dish.
//  There is just one rule: the dish must start and end with the same letters as the animal's name.
//  For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false
//  to indicate whether the beast is allowed to bring the dish to the feast.

function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}
console.log(feast("great blue heron", "garlic naan"));
console.log(feast("brown bear", "bear claw"));

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = (l, w) => (l === w ? l * w : (l + w) * 2);
console.log(areaOrPerimeter(3, 3));
console.log(areaOrPerimeter(6, 10));

// Complete the function to return his total number of goals in all three leagues.
const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) =>
  laLigaGoals + copaDelReyGoals + championsLeagueGoals;
console.log(goals(43, 10, 5));

// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.
// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

function squareOrSquareRoot(array) {
  return array.map((el) => {
    const sqrt = Math.sqrt(el);
    return Number.isInteger(sqrt) ? sqrt : el ** 2;
  });
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
const abbrevName = (name) => {
  let arr = name.split(" ");
  let str = "";
  str += arr[0][0].toUpperCase() + "." + arr[1][0].toUpperCase();
  return str;
};
console.log(abbrevName("patrick feeney"));

//second option
const abbr = (str) =>
  str
    .split(" ")
    .map((el) => el[0].toUpperCase())
    .join(".");
console.log(abbr("patrick feeney"));

//Write a function that merges two sorted arrays into a single one. The arrays only contain integers.
// Also, the final outcome must be sorted and not have any duplicate.

function mergeArrays(a, b) {
  let array = [...a, ...b].sort((x, y) => x - y);
  let withoutDuplicates = [];
  for (let index = 0; index < array.length; index++) {
    if (array.indexOf(array[index]) === index) {
      withoutDuplicates.push(array[index]);
    }
  }
  console.log(withoutDuplicates);
  return withoutDuplicates;
}
mergeArrays([2, 4, 8], [2, 4, 6]);

//function mergeArrays(a, b) {
//   return [...new Set(a.concat(b))].sort((a,b)=>a-b);
// }

//  to get the sum of two arrays...
const arrayPlusArray = (arr1, arr2) =>
  [...arr1, ...arr2].reduce((acc, current) => acc + current);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers
// . 0 is neither positive nor negative.
//If the input is an empty array or is null, return an empty array.

let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
const countPositivesSumNegatives = (input) => {
  if (input === null || input.length === 0) {
    return [];
  }
  let positive = [];
  let negative = 0;
  for (const num of input) {
    if (num > 0) positive.push(num);
    if (num < 0) negative += num;
  }
  let result = [positive.length, negative];
  return result;
};
console.log(countPositivesSumNegatives(testData));


// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
  return arr
    .filter((current) => current > 0)
    .reduce((sum, current) => sum + current, 0);
}
console.log(positiveSum([-1, 2, 3, 4, -5]));