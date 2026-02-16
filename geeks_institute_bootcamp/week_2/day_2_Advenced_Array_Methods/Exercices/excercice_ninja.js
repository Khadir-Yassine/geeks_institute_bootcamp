const data = [
    {
        name: 'Butters',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Cuty',
        age: 5,
        type: 'rabbit'
    },
    {
        name: 'Lizzy',
        age: 6,
        type: 'dog'
    },
    {
        name: 'Red',
        age: 1,
        type: 'cat'
    },
    {
        name: 'Joey',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Rex',
        age: 10,
        type: 'dog'
    },
];


// ===== Solution 1 : Using a loop =====
let totalHumanYearsLoop = 0;

for (let i = 0; i < data.length; i++) {
    if (data[i].type === "dog") {
        totalHumanYearsLoop += data[i].age * 7;
    }
}

console.log("Loop result:", totalHumanYearsLoop);


// ===== Solution 2 : Using reduce() =====
let totalHumanYearsReduce = data.reduce(function (total, animal) {
    if (animal.type === "dog") {
        total = total + animal.age * 7;
    }
    return total;
}, 0);

console.log("Reduce result:", totalHumanYearsReduce);
