// ===== Exercise 1
function displayNumbersDivisible() {
    let sum = 0;

    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0) {
            console.log(i);
            sum += i;
        }
    }

    console.log("Sum : " + sum);
}
displayNumbersDivisible();
// ===== Exercise 2
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
};

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
};
const shoppingList = ["banana", "orange", "apple"];
function myBill() {
    let total = 0;
    for (const item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            total += prices[item];
            stock[item]--;
        } else {
            console.log(`${item} is out of stock!`);
        }
    }
    return total;
}
const finalBill = myBill();
console.log(`Total Bill: ${finalBill}`);
console.log("Updated Stock:", stock);
// ===== Exercise 3
function changeEnough(itemPrice, amountOfChange) {
    const quarterValue = 0.25;
    const dimeValue = 0.10;
    const nickelValue = 0.05;
    const pennyValue = 0.01;
    let totalChange = (amountOfChange[0] * quarterValue) +
                      (amountOfChange[1] * dimeValue) +
                      (amountOfChange[2] * nickelValue) +
                      (amountOfChange[3] * pennyValue);
    if (totalChange >= itemPrice) {
        return true;
    } else {
        return false;
    }
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));   
console.log(changeEnough(14.11, [2, 100, 0, 0]));  
console.log(changeEnough(0.75, [0, 0, 20, 5]));   
// ===== Exercise 4
function hotelCost(nights) {
    return nights * 140;
}
function planeRideCost(destination) {
    if (destination === "London") return 183;
    if (destination === "Paris") return 220;
    return 300;
}
function rentalCarCost(days) {
    let cost = days * 40;
    if (days > 10) {
        cost *= 0.95;
    }
    return cost;
}
function totalVacationCost() {
    let nights, destination, days;
    do {
        nights = prompt("How many nights would you like to stay in the hotel?");
    } while (nights === "" || isNaN(nights) || nights === null);
    nights = Number(nights);
    do {
        destination = prompt("What is your destination?");
    } while (destination === "" || !isNaN(destination) || destination === null);
    destination = destination.charAt(0).toUpperCase() + destination.slice(1).toLowerCase();
    do {
        days = prompt("How many days would you like to rent the car?");
    } while (days === "" || isNaN(days) || days === null);
    days = Number(days);
    const hCost = hotelCost(nights);
    const pCost = planeRideCost(destination);
    const rCost = rentalCarCost(days);
    const total = hCost + pCost + rCost;
    console.log(`The car cost: $${rCost.toFixed(2)}, the hotel cost: $${hCost}, the plane tickets cost: $${pCost}.`);
    console.log(`Total vacation cost: $${total.toFixed(2)}`);   
    return total;
}
totalVacationCost();
// ===== Exercise 5
const containerDiv = document.getElementById('container');
console.log(containerDiv);
const lists = document.querySelectorAll('.list');
lists[0].children[1].textContent = "Richard";
const secondUl = lists[1];
secondUl.removeChild(secondUl.children[1]);
const myName = "yassine";
for (let list of lists) {
    list.children[0].textContent = myName;
}
lists.forEach(ul => ul.classList.add('student_list'));
lists[0].classList.add('university', 'attendance');
containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "10px";
const allLi = document.querySelectorAll('li');
allLi.forEach(li => {
    if (li.textContent === "Dan") {
        li.style.display = "none";
    }
});
allLi.forEach(li => {
    if (li.textContent === "Richard") {
        li.style.border = "2px solid black";
    }
});
document.body.style.fontSize = "18px";
if (containerDiv.style.backgroundColor === "lightblue") {
    const user1 = lists[0].children[0].textContent;
    const user2 = lists[0].children[1].textContent; 
    alert(`Hello ${user1} and ${user2}`);
}
// ===== Exercise 6
const navDiv = document.getElementById('navBar');
navDiv.setAttribute('id', 'socialNetworkNavigation');
const newListItem = document.createElement('li');
const logoutText = document.createTextNode('Logout');
newListItem.appendChild(logoutText);
const navList = navDiv.firstElementChild;
navList.appendChild(newListItem);
const firstLi = navList.firstElementChild;
const lastLi = navList.lastElementChild;
console.log("First link text:", firstLi.textContent); 
console.log("Last link text:", lastLi.textContent);
// ===== Exercise 7
const allBooks = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
        alreadyRead: true
    },
    {
        title: "Foundation",
        author: "Isaac Asimov",
        image: "https://m.media-amazon.com/images/I/71v9T7hY81L._AC_UF1000,1000_QL80_.jpg",
        alreadyRead: false
    }
];

const bookSection = document.querySelector('.listBooks');

allBooks.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book-card');

    const bookDetails = document.createElement('p');
    bookDetails.textContent = `${book.title} written by ${book.author}`;

    if (book.alreadyRead) {
        bookDetails.style.color = "red";
    }

    const bookImg = document.createElement('img');
    bookImg.setAttribute('src', book.image);
    bookImg.style.width = "100px";
    
    bookDiv.appendChild(bookDetails);
    bookDiv.appendChild(bookImg);

    bookSection.appendChild(bookDiv);
});