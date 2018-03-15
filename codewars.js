// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// Note that the Java version expects a return value of null for an empty string or null.

// String.prototype.toJadenCase = function () { 
//     return this.split(" ").map(function(word){
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ");
//   }

// __________________________________________________________________




// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)



// function findOutlier(integers){
//     evensArray = []
//     oddsArray= []
    
//     for(var i = 0; i < integers.length; i++){
//       if(integers[i] % 2){
//         evensArray.push(integers[i])
//       }
//       else oddsArray.push(integers[i])
//     }
//     if(evensArray.length > oddsArray.length){
//       return oddsArray[0]
//     }
//     else return evensArray[0]
//   }

// ___________________________________________________________________________

// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true


// function validParentheses(str){
  
//     if (!str || typeof str !== "string") {
//        return false;
//     }
//     var strArr = str.split("")
//     var open = 0, close =0;
//     for (var i = 0 ; i < strArr.length; i++){
//     if (strArr[i] === "("){
//     open++
//     }
//     if (strArr[i] === ")"){
//     close++
//     }
    
//     if (close > open){
//     return false;
//      }
//     }
//     if (open !== close){
//       return false
//     }
//    else return true
    
//   }