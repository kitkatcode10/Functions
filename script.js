// 1. // (completed above) Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

// 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  
  // 2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
  
  function maxOfThree(x, y, z) {
    if (x >= x && y >= z) {
      return x;
    } else if (y >= x && y >= z) {
      return y;
    } else {
      return z;
  }
  };
  console.log(maxOfThree(5,12,99));
  
  //review and test the operator precedence, which affects the order in which x y and z are listed in each if / else if function - I think that's why there is an order to where the x y and z are placed 
  
  
  // 3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.
  
  function isCharAVowel(character) {
   character.includes
   return 'aeiouy'.includes(character);
  }
  
  console.log(isCharAVowel('e'));
  
  // a lot of google results shower a .lower / .toLowerCase - does this mattter? and it's confusing to me that the .includes(character) is written this way, when we just delcared character.includes
  
  
  // 4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.
  
  function sumArray(a,b,c) {
    return a + b + c;
  };
  
  console.log(sumArray(2,4,5));
  
  // 5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.
  
  function multipleArray(a,b,c) {
    return a * b * c;
  };
  
  console.log(multipleArray(2,4,5));
  
  // 6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
  
  const numArgs = function(args) {
    return args.length;
  }; 
  console.log(numArgs('katherine'));
   
  
  // 7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".
  
  function reverseString(backwards) {
    return backwards.split("").reverse("").join("");
  };
  console.log(reverseString("cheese"));
  
  // definitely googled this one, it makes to have to split each letter up since strings don't have a reverse method but arrays do, then reverse it, then join it together, wondering why reverse doesn't need to have "" inside () in the code I researched 
  
  // 8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
  
  const longestStringInArray = function(array) { //set it up with instructions, but then I'm not sure why we would use a let. I want to just run a for each  loop through each string in the argument and using the .length return the word that has the longest string. 
  
    let longestWord = 0
    array.forEach(function(word) {
      if(word.length > longestWord) longestWord = word.length; // This whole section was very confusing...
        longestWord = word;
    });
    
  return longestWord;
  };
  console.log(longestStringInArray(['happy', 'chunky', 'bagels', 'adventure']));
   
  
  // 9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
  
  function stringsLongerThan(array, num) {
    return array.filter(function(s) {
      return (s.length > num);
    }); 
  };
  
  console.log(stringsLongerThan(['say','hello','in','the', 'morning'], 3));
  
  //this one was from help from the answer key, it makes sense to me though to use a .filter to go through the array, - a bit confused on the function(s) and the s. tag. 
  
  