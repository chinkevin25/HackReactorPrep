/*

Problem description (see instructions for how to de-obfuscate).

Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

Example:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]

// if sum does not exist return [null, null]

// number is > target skip

input array of numbers and a sum
ouput is order pair
*/

// function findPairForSum(arr, sum) {

//   var firstPair;

//   for (var i = 0; i < arr.length; i++) {
//     // increment the first addition
//     firstPair = arr[i];
//     for (var j = 0; j < arr.length; j++) {
//       // check for sum
//       if (i === j) {
//         continue
//       } else {
//         if (firstPair + arr[j] === sum) {
//           return [firstPair, arr[j]]
//         }
//       }

//     }
//   }
//   return [null, null];

// }

function findPairForSum(arr, sum) {

    for (var i = 0; i < arr.length; i++) {
      // increment the first addition
      if(arr.includes(sum - arr[i])){
        return [arr[i], sum-arr[i]];
      }
    }
    return [null, null];
  
  }
  
  console.log(findPairForSum([1,2,3,4,5],7));
  console.log(findPairForSum([1,2,3],3));
  console.log(findPairForSum([1,2,3],7));
  