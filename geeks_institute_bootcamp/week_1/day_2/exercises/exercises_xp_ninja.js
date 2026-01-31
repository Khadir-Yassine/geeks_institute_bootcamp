// ===== Exercise 1
const randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("Limit:", randomNumber);

for (let i = 0; i <= randomNumber; i += 2) {
  console.log(i);
}
// ===== Exercise 2
function capitalize(str) {
  let evenUpper = "";
  let oddUpper = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      evenUpper += str[i].toUpperCase();
      oddUpper += str[i].toLowerCase();
    } else {
      evenUpper += str[i].toLowerCase();
      oddUpper += str[i].toUpperCase();
    }
  }

  return [evenUpper, oddUpper];
}

console.log(capitalize("abcdef"));
// ===== Exercise 3
// ===== Exercise 4
function biggestNumberInArray(arrayNumber) {
  if (arrayNumber.length === 0) {
    return 0;
  }

  let max = -Infinity;

  for (let i = 0; i < arrayNumber.length; i++) {
    if (typeof arrayNumber[i] === 'number') {
      if (arrayNumber[i] > max) {
        max = arrayNumber[i];
      }
    }
  }

  return max === -Infinity ? 0 : max;
}

console.log(biggestNumberInArray([-1, 0, 3, 100, 99, 2, 99])); 
console.log(biggestNumberInArray(['a', 3, 4, 2]));             
console.log(biggestNumberInArray([]));                        
// ===== Exercise 5
function getUniqueElements(arr) {
  return [...new Set(arr)];
}

const list = [1, 2, 3, 3, 3, 3, 4, 5];
const newList = getUniqueElements(list);

console.log(newList); 
// ===== Exercise 6
function createCalendar(year, month) {
  const mon = month - 1;
  const d = new Date(year, mon);

  let table = '<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>';
  let day = d.getDay();
  if (day === 0) day = 7;

  for (let i = 1; i < day; i++) {
    table += '<td></td>';
  }
  while (d.getMonth() === mon) {
    table += '<td>' + d.getDate() + '</td>';
    if (d.getDay() % 7 === 0) {
      table += '</tr><tr>';
    }

    d.setDate(d.getDate() + 1);
  }

  if (d.getDay() !== 1) {
    for (let i = d.getDay(); i <= 7 && i !== 0; i++) {
      table += '<td></td>';
    }
  }

  table += '</tr></table>';
  document.body.innerHTML = table;
}
createCalendar(2012, 9);