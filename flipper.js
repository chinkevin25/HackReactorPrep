/*
You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return:
H W  
e o  
l r  
l l  
o d
* s
['H W', 'e o']
*/

// Input is a Two strings of varying length
// Output: Transposed Strings with * as padding for different lengths. Tuples ['H W']

// Determine which string is longer 
// Pad the shorter string with 
// split the string into character array
// build tuple

function transposeTwoStrings(str1, str2) {
  // split str

  var char1 = str1.split('');
  var char2 = str2.split('');
  var result =[];

  if ( char1.length > char2.length) {
    for (var i = 0; i < (char1.length - char2.length); i++) {
      char2.push('*');
    } 
  } else {
    for (var i = 0; i< (char2.length - char1.length); i++) {
      char1.push('*');
    }
  }

  for (var i = 0; i < char1.length; i++) {
    result[i] = char1[i] + ' ' + char2[i];
    //result.push(char1[i] + ' ' + char2[i])
  }

result.forEach(function(ele){
  console.log(ele)
})
}

transposeTwoStrings('abc', 'cdef');




