// ===== PART 1 =====
function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "string") {
        reject("Error: all items must be strings");
        return;
      }
    }

    let upper = [];
    for (let i = 0; i < arr.length; i++) {
      upper.push(arr[i].toUpperCase());
    }

    resolve(upper);
  });
}

function sortWords(arr) {
  return new Promise((resolve, reject) => {
    if (arr.length <= 4) {
      reject("Error: array length must be bigger than 4");
      return;
    }

    arr.sort();
    resolve(arr);
  });
}

// Tests:
makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));


// ===== PART 2 (MORSE) =====
const morse = `{
  "0": "-----","1": ".----","2": "..---","3": "...--","4": "....-",
  "5": ".....","6": "-....","7": "--...","8": "---..","9": "----.",
  "a": ".-","b": "-...","c": "-.-.","d": "-..","e": ".","f": "..-.",
  "g": "--.","h": "....","i": "..","j": ".---","k": "-.-","l": ".-..",
  "m": "--","n": "-.","o": "---","p": ".--.","q": "--.-","r": ".-.",
  "s": "...","t": "-","u": "..-","v": "...-","w": ".--","x": "-..-",
  "y": "-.--","z": "--..",".": ".-.-.-",",": "--..--","?": "..--..",
  "!": "-.-.--","-": "-....-","/": "-..-.","@": ".--.-.","(": "-.--.",
  ")": "-.--.-"
}`;

function toJs() {
  return new Promise((resolve, reject) => {
    let obj = JSON.parse(morse);

    if (Object.keys(obj).length === 0) {
      reject("Error: morse object is empty");
      return;
    }

    resolve(obj);
  });
}

function toMorse(morseObj) {
  return new Promise((resolve, reject) => {
    let text = prompt("Write a word or sentence:");
    text = text.toLowerCase();

    let arr = [];
    for (let i = 0; i < text.length; i++) {
      let ch = text[i];

      if (ch === " ") {
        arr.push(" "); 
      } else if (morseObj[ch] === undefined) {
        reject('Error: character "' + ch + '" not found');
        return;
      } else {
        arr.push(morseObj[ch]);
      }
    }

    resolve(arr);
  });
}

function joinWords(morseArr) {
  let pre = document.getElementById("result");
  if (pre === null) {
    pre = document.createElement("pre");
    pre.id = "result";
    document.body.appendChild(pre);
  }

  pre.textContent = morseArr.join("\n");
}

toJs()
  .then((obj) => toMorse(obj))
  .then((arr) => joinWords(arr))
  .catch((err) => console.log(err));