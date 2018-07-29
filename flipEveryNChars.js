/*
Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

Note that this is intentionally very similar to the previous problem.

Please focus on getting a working solution with the tools you know well.

Practice the interactive/collaborative interview style that's described in the documentation.

Example:
var input = 'a short example'; 
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

Breaking this example down piece by piece:
'a sho' -> 'ohs a'
'rt ex' -> 'xe tr'
'ample' -> 'elpma'

-> 'ohs axe trelpma'

*/

// Split input up into n size chucks
// reverse the chunks
// re-join the chunks
// display


function flipEveryNChars(input,n) {
  // Separate input into characters
  var charArr = input.split('');
  var result =[];
  // Slice the input into segments
  for (var i = 0; i < charArr.length; i += n) {
    result.push(charArr.slice(i, i+n).reverse().join(''));
  }
  return (result.join(''));
  
}

console.log(flipEveryNChars('a short example',5));
