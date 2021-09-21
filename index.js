function isPalindrome(word) {
  const re = /[\W_]/g;
  const replaceSpace = word.toLowerCase().replace(re, '');
  const reverseWord = replaceSpace.split('').reverse().join('')
  console.log(word)
  console.log(reverseWord)
  return reverseWord === replaceSpace
  
 }
 console.log(isPalindrome("Madam"))
/* 
  Add your pseudocode here
  first we have to reverse word.
  split('') to split each letter into its own string
  reverse() to reverse the letters
  join('') to join the letters to a single string
  return a booleen checking the reverse word with a === to the original word

  function isPalindrome(word) {
    const reverseWord = word.split('').reverse().join('')
    return reverseWord === word
  }
  console.log(isPalindrome("racecar"))
  //=>true
  console.log(isPalindrome("live not on evil"))
  //=>false 
 Above code worked on a single word but not a sentence.

  for muliple words we need to take out the spaces
  const re = /[\W_]/g;  
  const replaceSpace = word.replace(re, '');

  console.log(isPalindrome("Madam"))
  // => false
Not working on Capitals, lets use a toLowerCase()

 




*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("live not on evil"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("Madam"));
}

module.exports = isPalindrome;
