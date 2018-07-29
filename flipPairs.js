/*
Flip every pair of characters in a string.


Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!


*/

function flipPairs(str) {
    //split string
    var result = str.split('');
    var strArr =[];
    if (result.length % 2 === 1) {
      var lastChar = result[result.length-1]
      result.pop();
    }
    for (var i =0; i < result.length; i+=2) {
      if (i+1 === undefined) {
        
      }
      strArr.push(result[i+1] + result[i]);
  
    }
    strArr.push(lastChar);
  
    return strArr.join('');;
    //make new array 
    //join str array
  
  }
  console.log(flipPairs('check out how interesting this problem is, it\'s insanely interesting!'));