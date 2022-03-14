const numberOfVowels = function(data) {
  let count = 0;
  let vowel = ["a","e","i","o","u"];
  for (let letter of data){
    if (vowel.indexOf(letter) >= 0){
      count ++;
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));