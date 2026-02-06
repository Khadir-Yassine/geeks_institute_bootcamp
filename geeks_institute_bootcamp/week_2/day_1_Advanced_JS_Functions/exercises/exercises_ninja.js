// ===== Exercise 1
function mergeWords(word) {
  return function (nextWord) {
    if (nextWord === undefined) {
      return word;
    } else {
      return mergeWords(word + ' ' + nextWord);
    }
  };
}
