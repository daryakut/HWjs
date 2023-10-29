// 1. filter odd numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNums = numbers.filter((num) => num % 2 !== 0);
console.log(oddNums);

// 2. filter strings > 5 chars
const words = ["apple", "cat", "banana", "dog", "elephant", "car", "bat"];
const longerThanFiveChars = words.filter((word) => word.length > 5);
console.log(longerThanFiveChars);

// 3. only strings
const mixedTypes = [
  123,
  "apple",
  { fruit: "apple" },
  "banana",
  true,
  "car",
  false,
];
const onlyStrings = mixedTypes.filter((element) => typeof element === "string");
console.log(onlyStrings);

// 4. only strings that begins with "a"
const words2 = ["apple", "banana", "apricot", "grape", "avocado", "kiwi"];
const beginsWithA = words2.filter((word) => word[0] === "a");
console.log(beginsWithA);

//  5. only strings that not include "e"
const words3 = ["apple", "banana", "cherry", "date", "fig", "grape", "kiwi"];
const wordsWithoutE = words3.filter((word) => !word.includes("e"));
console.log(wordsWithoutE);

// 6. filter grade > 80
const students = [
  { name: "John", grade: 85 },
  { name: "Jane", grade: 78 },
  { name: "Doe", grade: 90 },
  { name: "Smith", grade: 76 },
  { name: "Chris", grade: 81 },
];
const over80 = students.filter((student) => student.grade > 80);
console.log(over80);

// 7. filter repeating nums
const duplicates = [1, 2, 3, 2, 4, 5, 5, 6, 7, 8];
const noDuplicates = duplicates.filter(
  (element, index) => duplicates.indexOf(element) === index
);
console.log(noDuplicates);

//better solution
const duplicates2 = [1, 2, 3, 2, 4, 5, 5, 6, 7, 8];
let objNums={};
let filtred=[];
for (const num of duplicates2) {
  if(!objNums[num]){
    filtred.push(num);
    objNums[num]=true;
  }
}
console.log(filtred);

// 2.1 add exclamation mark
const words4 = ["hello", "world", "javascript"];
let exclamation = words4.map(word=>word+"!");
console.log(exclamation);


// 2.2  add numeration 1. Apple etc.
const words1 = ["apple", "banana", "cherry"];
let count=1;
let numeration = words1.map(word=>`${count++}. `+ word);
console.log(numeration);

// 2.3 make all nums positive
const numbers3 = [1, -2, 3, -4, 5];
let positiveNums = numbers3.map(num=>Math.abs(num));
console.log(positiveNums);

// 2.4 make it all strings
const numbers4 = [5, 10, 15, 20];
let stringNums = numbers4.map(num=>num.toString());
console.log(stringNums);

// 2.5 multiply each element by his Index
const numbers5 = [1, 2, 3, 4, 5];
let multiplyByIndex = numbers5.map((num, index)=>num*index);
console.log(multiplyByIndex);

// 2.6  add 10 to a number if its index is a multiple of 3
const numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let add10ifIndexDividableBy3 = numbers6.map((num, index)=>index%3===0?num+10:num);
console.log(add10ifIndexDividableBy3);