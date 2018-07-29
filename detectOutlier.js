/*
Given a string of even and odd numbers, find which is the sole even number or the sole odd number.
  
The return value should be 1-indexed, not 0-indexed.

Examples :
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd

// just index 
// Assume there is always a solution

*/

function detectOutlierValue(input) {

    var numArr = input.split(' ').map(function (element) {
      return parseInt(element, 10);
    });
  
    var result = numArr.map(function (ele) {
      return ele % 2;
    })
  
  
    // [0, 0, 1, 0]
    //store first index
  
    // grab 3 ele
    var check = result.slice(0, 2);
    // sum arr
    var sum = check.reduce(function (a, v) {
      return a + v;
    })
  
    // if sum 0 = all even, look for odd
    // if sum 1 = majority even look for odd
    // if sum 2 = majority odd look for even
    // if sum 3 = all odd, look even
    if (sum <= 1) {
      return result.indexOf(1) + 1;
    }
    if (sum >= 2) {
      return result.indexOf(0) + 1;
    }
  }
  
  console.log(detectOutlierValue('2 2 2 1'));
  console.log(detectOutlierValue('2 2 1 2'));
  console.log(detectOutlierValue('3 3 2 3'));
  console.log(detectOutlierValue('3 3 3 2'));
  
  
  