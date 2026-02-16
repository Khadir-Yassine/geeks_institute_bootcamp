//EXCERCICE 1
[1, 2, 3].map(num => {
    if (typeof num === 'number') return num * 2;
    return;
});
//.map() multiplies each number in [1, 2, 3] by 2.
//All elements are numbers, so each becomes doubled.

//EXCERCICE 2
[[0, 1], [2, 3]].reduce(
    (acc, cur) => {
        return acc.concat(cur);
    },
    [1, 2],
);
//`reduce()` starts with `[1, 2]` and concatenates each sub-array.
//Output: [1, 2, 0, 1, 2, 3]

//EXCERCICE 3
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})
//In .map((num, i) => {...}), the second parameter i is the index of the element in the array.
//So i takes the values: 0, 1, 2, 3, 4, 5

//EXCERCICE 4
// ===== 1) 
const array = [[1], [2], [3], [[[4]]], [[[5]]]];
let result1 = [];

for (let i = 0; i < array.length; i++) {
    let item = array[i];

    if (Array.isArray(item[0])) {
        result1.push(item[0][0]);
    } else {
        result1.push(item[0]);
    }
}
console.log(result1);

// ===== 2)
const greeting = [
    ["Hello", "young", "grasshopper!"],
    ["you", "are"],
    ["learning", "fast!"]
];

let sentences = [];

for (let i = 0; i < greeting.length; i++) {
    let words = greeting[i];
    let sentence = words.join(" ");
    sentences.push(sentence);
}
console.log(sentences);

// ===== 3)
let fullString = "";

for (let i = 0; i < sentences.length; i++) {
    fullString += sentences[i] + " ";
}

fullString = fullString.trim();
console.log(fullString);

// ===== 4) 
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
let number = trapped;

while (Array.isArray(number)) {
    number = number[0];
}
let result4 = [number];
console.log(result4);

