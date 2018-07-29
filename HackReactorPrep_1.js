/*
Function will be used to determine if the solution passess the test cases written.

Input(s):
  expectedOutcome: A boolean input that is a result of asserting equality of function output and expected
  description: A string description on what the assertEqual function is attempting to test
*/

function assertEquals(expectedOutcome, description) {
  if (!expectedOutcome) {
    console.log(description)
  }
  else {
    console.log('passed test')
  }
}

function printSeperator(exerciseName) {
  console.log('**********' + exerciseName + "**********");
}

/*
Write a function called "isOldEnoughToDrink".
Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States.
Notes:
* The legal drinking age in the United States is 21.
var output = isOldEnoughToDrink(22);
console.log(output); // --> true
*/

function isOldEnoughToDrink(age) {
  // your code here
  /* START SOLUTION */

  if (age >= 21) {
    return true;
  }
  return false;

  /* END SOLUTION */
}

printSeperator('isOldEnoughToDrink');
assertEquals(isOldEnoughToDrink(21) === true, 'it determines if of drinking age');
assertEquals(isOldEnoughToDrink(30) === true, 'it determines if of drinking age');
assertEquals(isOldEnoughToDrink(10) === false, 'it determines if of drinking age');
assertEquals(isOldEnoughToDrink(-5) === false, 'it determines if of drinking age');
printSeperator('isOldEnoughToDrink');

/*
Write a function called "isOldEnoughToDrive".
Given a number, in this case an age, 'isOldEnoughToDrive' returns whether a person of this given age is old enough to legally drive in the United States.
Notes:
* The legal driving age in the United States is 16.
var output = isOldEnoughToDrive(22);
console.log(output); // --> true
*/

function isOldEnoughToDrive(age) {
  // your code here

  if (age >= 16) {
    return true;
  }
  return false;
}

printSeperator('isOldEnoughToDrive');
assertEquals(isOldEnoughToDrive(16) === true, 'it determines if of driving age');
assertEquals(isOldEnoughToDrive(20) === true, 'it determines if of driving age');
assertEquals(isOldEnoughToDrive(10) === false, 'it determines if of driving age');
assertEquals(isOldEnoughToDrive(-5) === false, 'it determines if of driving age');
printSeperator('isOldEnoughToDrive');

/*
Write a function called "isOldEnoughToVote".
Given a number, in this case an age, 'isOldEnoughToVote' returns whether a person of this given age is old enough to legally vote in the United States.
Notes:
* The legal voting age in the United States is 18.
var output = isOldEnoughToVote(22);
console.log(output); // --> true
*/

function isOldEnoughToVote(age) {
  // your code here
  if (age >= 18) {
    return true;
  }
  return false;
}

printSeperator('isOldEnoughToVote');
assertEquals(isOldEnoughToVote(18) === true, 'it determines if of voting age');
assertEquals(isOldEnoughToVote(19) === true, 'it determines if of voting age');
assertEquals(isOldEnoughToVote(10) === false, 'it determines if of voting age');
assertEquals(isOldEnoughToVote(-5) === false, 'it determines if of voting age');
printSeperator('isOldEnoughToVote');

/*
Write a function called "isOldEnoughToDrinkAndDrive".
Given a number, in this case an age, "isOldEnoughToDrinkAndDrive" returns whether a person of this given age is old enough to legally drink and drive in the United States.
Notes:
* The legal drinking age in the United States is 21.
* It is always illegal to drink and drive in the United States.
var output = isOldEnoughToDrinkAndDrive(22);
console.log(output); // --> false
*/

function isOldEnoughToDrinkAndDrive(age) {

  return false;

}

printSeperator('isOldEnoughToDrinkAndDrive');
assertEquals(isOldEnoughToDrinkAndDrive(18) === false, 'it determines if of drinking and driving age');
assertEquals(isOldEnoughToDrinkAndDrive(22) === false, 'it determines if of drinking and driving age');
assertEquals(isOldEnoughToDrinkAndDrive(10) === false, 'it determines if of drinking and driving age');
assertEquals(isOldEnoughToDrinkAndDrive(-5) === false, 'it determines if of drinking and driving age');
printSeperator('isOldEnoughToDrinkandDrive');

/*
Write a function called "getProperty".
Given an object and a key, "getProperty" returns the value of the property at the given key. 
Notes:
* If there is no property at the given key, it should return undefined.
var obj = {
  key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); // --> 'value'
*/

function getProperty(obj, key) {
  // your code here
  return obj[key];
}

var obj = {
  name: "Kevin"
}

printSeperator('getProperty');
assertEquals(getProperty(obj, 'name') === 'Kevin', 'it returns property of object');
assertEquals(getProperty(obj, 'address') === undefined, 'it returns property of objective');
printSeperator('getProperty');

/*
Write a function called "addProperty".

Given an object, and a key, "addProperty" sets a new property on the given object with a value of true.

var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true
*/

function addProperty(obj, key) {
  // your code here
  return obj[key] = true;
}

var obj = {};

printSeperator('addProperty')
assertEquals(Object.keys(obj).length === 0, 'it checks the object is empty')
addProperty(obj, 'isTrue');
assertEquals(addProperty(obj, 'isTrue') === true);
printSeperator('addProperty')

/*
Write a function called "removeProperty".
Given an object and a key, "removeProperty" removes the given key from the given object.
var obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined
*/

function removeProperty(obj, key) {
  // your code here
  return obj[key] = undefined;
}

var obj = {
  name: 'Kevin'
}

printSeperator('removeProperty');
removeProperty(obj, 'name');
assertEquals(obj.name === undefined, 'it checks that a property was removed');
printSeperator('removeProperty');

/*
Write a function called "checkAge". 
Given a person's name and age, "checkAge" returns one of two messages:
"Go home, {insert_name_here}!", if they are younger than 21.
"Welcome, {insert_name_here}!", if they are 21 or older.
Naturally, replace "{insert_name_here}" with the given name. :)
var output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'
*/

function checkAge(name, age) {
  // your code here
  if (age >= 21) {
    return "Welcome, " + name + "!";
  } else {
    return "Go home, " + name + "!";
  }
}

printSeperator('checkAge');
assertEquals(checkAge('Adrian', 22) === 'Welcome, Adrian!');
assertEquals(checkAge('Adrian', 20) === 'Go home, Adrian!');
printSeperator('checkAge');

/*
Write a function called "getFullName".
Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space.
var output = getFullName('Joe', 'Smith');
console.log(output); // --> 'Joe Smith'
*/

function getFullName(firstName, lastName) {
  // your code here
  return firstName + " " + lastName;
}

printSeperator('getFullName');
assertEquals(getFullName('Kevin', 'Chin') === 'Kevin Chin', 'it returns full name')
printSeperator('getFullName');

/*
Write a function called "getLengthOfWord".
Given a word, "getLengthOfWord" returns the length of the given word.
var output = getLengthOfWord('some');
console.log(output); // --> 4
*/

function getLengthOfWord(word) {
  return word.length;
}

printSeperator('getLengthOfWord');
assertEquals(getLengthOfWord('Office') === 6, 'it returns the length of the word');
printSeperator('getLengthOfWord');

/*
Write a function called "getLengthOfTwoWords".
Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.
var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9
*/

function getLengthOfTwoWords(word1, word2) {
  return word1.length + word2.length;
}

printSeperator('getLengthOfTwoWords');
assertEquals(getLengthOfTwoWords('The', 'Office') === 9, 'it returns the sum of the length of two words');
printSeperator('getLengthOfTwoWords');


/*
Write a function called "isGreaterThanTen".
Given a number, "isGreaterThanTen" returns whether it is greater than 10.
var output = isGreaterThanTen(11);
console.log(output); // --> true
*/

function isGreaterThanTen(num) {
  return num > 10;
}

printSeperator('isGreaterThanTen');
assertEquals(isGreaterThanTen(10) === false, 'it returns if number is greater than 10')
assertEquals(isGreaterThanTen(11) === true, 'it returns if number is greater than 10')
assertEquals(isGreaterThanTen(-2) === false, 'it returns if number is greater than 10')
printSeperator('isGreaterThanTen');

/*
Write a function called "isLessThan30".
Given a number, "isLessThan30" returns whether the given number is less than 30.
var output = isLessThan30(9);
console.log(output); // --> true
*/

function isLessThan30(num) {
  // your code here
  return num < 30;
}

printSeperator('isLessThan30');
assertEquals(isLessThan30(30) === false, 'it returns if number is less than 30');
assertEquals(isLessThan30(31) === false, 'it returns if number is less than 30');
assertEquals(isLessThan30(25) === true, 'it returns if number is less than 30');
printSeperator('isLessThan30');