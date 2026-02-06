function isAnagram(word1, word2) {

  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();

  word1 = word1.replaceAll(" ", "");
  word2 = word2.replaceAll(" ", "");

  if (word1.length !== word2.length) {
    return false;
  }

  var arr1 = word1.split("");
  var arr2 = word2.split("");

  arr1.sort();
  arr2.sort();

  var sorted1 = arr1.join("");
  var sorted2 = arr2.join("");

  if (sorted1 === sorted2) {
    return true;
  } else {
    return false;
  }
}


// Tests
console.log(isAnagram("Astronomer", "Moon starer")); 
console.log(isAnagram("School master", "The classroom")); 
console.log(isAnagram("Hello", "World")); 
            
