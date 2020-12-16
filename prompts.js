//Write a function, using function keyword, named greeting. When invoked, greeting should print the string 'hey there'.
function greeting () {
console.log("Hey there!");
}

//Write a function that can reverse a number.
function reverseNumber(num) {
    num = num + "";
    return num.split("").reverse().join("");
}

//Write a function that checks whether the passed string is palindrome or not?
function isPalindromic(s) {
    return s == s.split('').reverse().join('');
}

// Create a function named alphaOrder that returns a passed string with letters in alphabetical order.
function alphaOrder(text) {
return text.split(' ').sort().join(' ');
}

//Create a function named changeToLowerCase that accepts a string as a parameter and converts letters of each word of the string to lowercase.
function changeToLowerCase(str){
    return str.toLowerCase();
}

// Make a function that accepts a string as a parameter and converts the first letter of each word of the string in uppercase.
function changeToUpperCase(sentence){
    words = sentence.split(" ");
    for (let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        console.log(words[i])
    }
    }
    
// Make a function that accepts a string as a parameter and find the longest word within the string.
function findLongestWord(s){
    splitString = s.split(' ');
    longestWordLength = 0;
    for(let i = 0; i < splitString.length; i++){
      if (splitString[i].length > longestWordLength){
          longestWord = splitString[i];
      }
    }
    console.log(longestWord);
    }
    
//Create a function that takes two parameters: a and b. When called, multiply a times b. Print the answer to the console.
function multiply(a, b){
return a * b;
}

//Make an array of your choosing and write a function that returns the array.
let theArray = ['Hello', 'World']
function Showarray(array) {
    return array
}
console.log(array(elements))

//Write a function to find the repeated character in a string.
function findRepeatChar(str){
    let repeatChar= ""
    for (let i = 0; i <= str.length; i++){
      for(let j = i+1; j <= str.length; j++){
        if(str[j] == str[i]){
        console.log(str[j]);
        }
      }
    }
  }

  /** Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is _ years old in dog years!"
Call the function three times with different sets of values. */
function calculateDogAge (age) {
let dogAge = age * 7
console.log(`Your doggie is ${dogAge} years old in dog years!`)
}

calculateDogAge(2);
calculateDogAge(4);
calculateDogAge(7);
