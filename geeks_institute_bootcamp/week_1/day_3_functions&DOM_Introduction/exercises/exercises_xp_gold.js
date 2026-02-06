// ===== Exercise 1
function isBlank(str) {
    return (!str || str.trim().length === 0);
}

console.log(isBlank(''));      
console.log(isBlank('abc'));  
console.log(isBlank('  '));   
// ===== Exercise 2
function abbrevName(name) {
    const nameParts = name.trim().split(" ");
    
    if (nameParts.length < 2) {
        return nameParts[0];
    }
    return `${nameParts[0]} ${nameParts[1].charAt(0).toUpperCase()}.`;
}
console.log(abbrevName("Robin Singh"));
console.log(abbrevName("Jane Doe"));  
// ===== Exercise 3
function swapCase(str) {
  return str
    .split('')
    .map(char => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      }
      return char.toUpperCase();
    })
    .join('');
}
const result = swapCase('The Quick Brown Fox');
console.log(result);
// ===== Exercise 4
function isOmnipresent(matrix, val) {
  return matrix.every(subArray => subArray.includes(val));
}
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));
console.log(isOmnipresent([[3, 4], [8, 3, 2], [3], [9, 3]], 3)); 
// ===== Exercise 5
let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[i].style.backgroundColor = 'red';
}