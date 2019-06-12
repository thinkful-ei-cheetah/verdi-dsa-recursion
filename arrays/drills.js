'use strict';
// 5. URLify a string
// A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

// Input: tauhida parveen
// Output: tauhida%20parveen
// Input: www.thinkful.com /tauh ida parv een
// Output: www.thinkful.com%20/tauh%20ida%20parv%20een

// function urlify(string) {
//   return string.split(' ').join('%20')
// }

// // O(n)

// console.log(urlify('tauhida parveen'))
// console.log(urlify('www.thinkful.com /tauh ida parv een'))

// Question 6
// Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

function myFilter(arr, filter) {
  const results = [];
  for (let i=0; i<arr.length; i++) {
    let num = arr[i];
    if (filter(num)) {
      results.push(num);
    }
  }
  return results;
}
// const testOne = [1,2,4,9,99];
// const results = myFilter(testOne, (num) => num < 5 );
// console.log(results);


