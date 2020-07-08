/*                Problem Solving Patterns               */

/*            Intro to Problem Solving Patterns          */

// How do you improve?

// 1. Devise a plan for solving problems
// 2. Master common problem solving patterns

// Some Patterns:
// + Frequency Counter
// + Multiple Pointers
// + Sliding Window
// + Divide and Conquer
// + Dynamic Programming
// + Greedy Algorithms
// + Backtracking
// ... Many more!

/*               Frequency Counter Pattern                */

//  This pattern uses objects or sets to collect values/
// frequencies of values
//  This can often avoid the need for nested loops or
// O(N^2) operations with arrays/strings

(() => {
  //  An Example
  // Write a function called same(), which accepts
  //  two arrays.
  // The function should return true if every value
  //  in the array has it's corresponding value
  //  squared in the second array.
  // The frequency of values must be the same.
  // same([1,2,3], [4,1,9]) // true
  // same([1,2,3], [1,9]) // false
  // same([1,2,1], [4,4,1]) // false (not same frequency)
  // // A Naive Solution
  // // Time Complexity - N^2
  // function same(arr1, arr2) {
  //   if (arr1.length !== arr2.length) {
  //     return false;
  //   }
  //   for (let i = 0; i < arr1.length; i++) {
  //     let correctIndex = arr2.indexOf(arr1[i] ** 2);
  //     if (correctIndex === -1) {
  //       return false;
  //     }
  //     arr2.splice(correctIndex, 1);
  //   }
  //   return true;
  // }
  // console.log(same([1, 2, 3], [4, 1, 9])); // true
  // console.log(same([1, 2, 3], [1, 9])); // false
  // console.log(same([1, 2, 1], [4, 4, 1])); // false (not same frequency)
  // REFACTORED
  // Time Complexity - O(n)
  // two loops are much better than nested loops
  // function same(arr1, arr2) {
  //   if (arr1.length !== arr2.length) {
  //     return false;
  //   }
  //   let frequencyCounter1 = {};
  //   let frequencyCounter2 = {};
  //   for (let val of arr1) {
  //     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  //   }
  //   for (let val of arr2) {
  //     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  //   }
  //   for (let key in frequencyCounter1) {
  //     if (!(key ** 2 in frequencyCounter2)) {
  //       return false;
  //     }
  //     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }
  // console.log(same([1, 2, 3], [4, 1, 9])); // true
  // console.log(same([1, 2, 3], [1, 9])); // false
  // console.log(same([1, 2, 1], [4, 4, 1])); // false (not same frequency)
})();

/*          Frequency Counter Anagram Challenge          */

// Anagrams
// Given two strings, write a function to determine
//  if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by
//  rearranging the letters of another, such as cinema,
//  formed from iceman.

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram('rat', 'car') // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

/* ~~~~~~~~~~~~~ Anagram Challenge Solution ~~~~~~~~~~~~~ */

(() => {
  // function validAnagram(first, second) {
  //   if (first.length !== second.length) {
  //     return false;
  //   }
  //   const lookup = {};
  //   for (let i = 0; i < first.length; i++) {
  //     let letter = first[i];
  //     // if letter exists, increment, otherwise set to 1
  //     lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  //   }
  //   for (let i = 0; i < second.length; i++) {
  //     let letter = second[i];
  //     // can't find letter or letter is zero then
  //     // it's not an anagram
  //     if (!lookup[letter]) {
  //       return false;
  //     } else {
  //       lookup[letter] -= 1;
  //     }
  //   }
  //   return true;
  // }
  // console.log(validAnagram('', '')); // true
  // console.log(validAnagram('aaz', 'zza')); // false
  // console.log(validAnagram('anagram', 'nagaram')); // true
  // console.log(validAnagram('rat', 'car')); // false
  // console.log(validAnagram('awesome', 'awesom')); // false
  // console.log(validAnagram('qwerty', 'qeywrt')); // true
  // console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
})();

/* ~~~~~~~~~~~~~ Multiple Pointers Pattern ~~~~~~~~~~~~~ */

// Creating pointers or values that correspond to an
//  index or position and move towards the beginning
//  end or middle based on a certain condition.

// Very efficient for solving problems with minimal
//  space complexity as well.

// [-4, -3, -2, -1, 0, 1, 2, 5]
// "alksjdalksjdlkasjdlks"
// ...LinkedLists...
//

// An Example

// Write a function called sumZero which accepts
//  a sorted array of integers.
// The function should find the first pair where
//  the sum is 0.
// Return an array that includes both values that
//  sum to zero or undefined if a pair does not
//  exist.

// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined

(() => {
  // // Naive Solution
  // // Time Complexity - O(N^2)
  // // Space Complexity - O(1)
  // function sumZero(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr(i) + arr[j] === 0) {
  //         return [arr[i], [arr[j]]];
  //       }
  //     }
  //   }
  // }
  // sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
  // sumZero([-2,0,1,3]) // undefined
  // sumZero([1,2,3]) // undefined
})();

(() => {
  // // Mutiple Pointers
  // // My attempt
  // function sumZero(arr) {
  //   result = [];
  //   for (let i = 0; i < arr.length / 2; i++) {
  //     let j = arr.length - 1;
  //     if (arr[i] + arr[j] === 0) {
  //       result.push(arr[i]);
  //       result.push(arr[j]);
  //       return result;
  //     } else if (arr[i] + arr[j] > 0) {
  //       j--;
  //     } else if (arr[i] + arr[j] < 0) {
  //       i++;
  //     }
  //   }
  // }
  // console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
  // console.log(sumZero([-2, 0, 1, 3])); // undefined
  // console.log(sumZero([1, 2, 3])); // undefined
})();

(() => {
  // // Multiple Pointers Solution
  // // Refactor
  // // Time Complexity - O(N)
  // // Space Complexity - O(1)
  // function sumZero(arr) {
  //   let left = 0;
  //   let right = arr.length - 1;
  //   while (left < right) {
  //     let sum = arr[left] + arr[right];
  //     if (sum === 0) {
  //       return [arr[left], arr[right]];
  //     } else if (sum > 0) {
  //       right--;
  //     } else {
  //       left++;
  //     }
  //   }
  // }
  // console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
  // console.log(sumZero([-2, 0, 1, 3])); // undefined
  // console.log(sumZero([1, 2, 3])); // undefined
})();

/*Multiple Pointers Pattern Count Unique Values Challenge*/

// Implement a function called countUniqueValues,
//  which accepts asorted array, and counts the
//  unique values in the array. There can be
//  negative numbers in the array, but it will
//  always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

(() => {
  function countUniqueValues(arr) {
    let i = 0;

    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    // arr.length = i + 1;
    // return arr;
    return i + 1;
  }
})();

(() => {
  //
})();

(() => {
  //
})();

(() => {
  //
})();

(() => {
  //
})();

(() => {
  //
})();

(() => {
  //
})();

(() => {
  //
})();

(() => {
  //
})();

(() => {
  //
})();

(() => {
  //
})();

(() => {
  //
})();

(() => {
  //
})();

(() => {
  //
})();

(() => {
  //
})();

(() => {
  //
})();

(() => {
  //
})();
