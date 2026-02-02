// ===== Exercise 1
// 1. Using a DOM property, retrieve the h1 and console.log it
const h1Element = document.querySelector('h1');
console.log('H1 Element:', h1Element);
console.log('H1 Text Content:', h1Element.textContent);

// 2. Using DOM methods, remove the last paragraph in the <article> tag
const article = document.querySelector('article');
const paragraphs = article.querySelectorAll('p');
const lastParagraph = paragraphs[paragraphs.length - 1];
lastParagraph.remove();
console.log('Last paragraph removed');

// 3. Add an event listener which will change the background color of the h2 to red when clicked
const h2Element = document.querySelector('h2');
h2Element.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
    this.style.color = 'white'; 
    this.style.padding = '10px';
    console.log('H2 background changed to red');
});

// 4. Add an event listener which will hide the h3 when clicked (using display:none)
const h3Element = document.querySelector('h3');
h3Element.addEventListener('click', function() {
    this.style.display = 'none';
    console.log('H3 hidden');
});

// 5. Add a button that when clicked makes all paragraphs bold
const button = document.createElement('button');
button.textContent = 'Make Paragraphs Bold';
button.id = 'boldButton';
document.body.appendChild(button);

button.addEventListener('click', function() {
    const allParagraphs = document.querySelectorAll('p');
    allParagraphs.forEach(function(paragraph) {
        paragraph.style.fontWeight = 'bold';
    });
    console.log('All paragraphs made bold');
});

// BONUS 1: When hovering on h1, set font size to random pixel size between 0 to 100
h1Element.addEventListener('mouseenter', function() {
    const randomSize = Math.floor(Math.random() * 101); 
    this.style.fontSize = randomSize + 'px';
    console.log('H1 font size changed to:', randomSize + 'px');
});

h1Element.addEventListener('mouseleave', function() {
    this.style.fontSize = '';
});

// BONUS 2: When hovering on 2nd paragraph, it should fade out
const allParagraphs = document.querySelectorAll('p');
const secondParagraph = allParagraphs[1]; // Index 1 is the second paragraph

secondParagraph.addEventListener('mouseenter', function() {
    this.style.transition = 'opacity 1s ease-in-out';
    this.style.opacity = '0';
    console.log('Second paragraph fading out');
});

secondParagraph.addEventListener('mouseleave', function() {
    this.style.opacity = '1';
});
// ===== Exercise 2
const form = document.querySelector('form');
console.log('Form element:', form);

const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
console.log('First name input (by ID):', fnameInput);
console.log('Last name input (by ID):', lnameInput);

const firstnameInput = document.querySelector('[name="firstname"]');
const lastnameInput = document.querySelector('[name="lastname"]');
console.log('First name input (by name attribute):', firstnameInput);
console.log('Last name input (by name attribute):', lastnameInput);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstNameValue = fnameInput.value;
    const lastNameValue = lnameInput.value;
    
    console.log('First name value:', firstNameValue);
    console.log('Last name value:', lastNameValue);
    
    if (firstNameValue === '' || lastNameValue === '') {
        alert('Please fill in both first name and last name!');
        return;
    }
    
    const ul = document.querySelector('.usersAnswer');
    
    const liFirstName = document.createElement('li');
    liFirstName.textContent = firstNameValue;
    
    const liLastName = document.createElement('li');
    liLastName.textContent = lastNameValue;
    
    ul.appendChild(liFirstName);
    ul.appendChild(liLastName);
    
    console.log('List items created and appended to ul');
});
// ===== Exercise 3
let allBoldItems;

function getBoldItems() {
    allBoldItems = document.querySelectorAll('strong');
}

function highlight() {
    allBoldItems.forEach(function(item) {
        item.style.color = 'blue';
    });
}

function returnItemsToDefault() {
    allBoldItems.forEach(function(item) {
        item.style.color = 'black';
    });
}

getBoldItems();

const paragraph = document.querySelector('p');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);
// ===== Exercise 4
const form = document.getElementById('MyForm');
const radiusInput = document.getElementById('radius');
const volumeInput = document.getElementById('volume');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const radius = radiusInput.value;
    
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);
    
    volumeInput.value = volume.toFixed(2);
});