// ===== Exercise 1
const genresSelect = document.getElementById('genres');

console.log('Selected value:', genresSelect.value);

const newOption = document.createElement('option');
newOption.value = 'classic';
newOption.textContent = 'Classic';
newOption.selected = true;

genresSelect.appendChild(newOption);

console.log('New selected value:', genresSelect.value);
// ===== Exercise 2
const colorSelect = document.getElementById('colorSelect');
const button = document.querySelector('input[type="button"]');

function removecolor() {
    const selectedIndex = colorSelect.selectedIndex;
    colorSelect.remove(selectedIndex);
}

button.addEventListener('click', removecolor);
// ===== Exercise 3
let shoppingList = [];

const root = document.getElementById('root');

const form = document.createElement('form');

const input = document.createElement('input');
input.type = 'text';
input.id = 'itemInput';
input.placeholder = 'Enter item to buy';

const addButton = document.createElement('button');
addButton.type = 'button';
addButton.textContent = 'AddItem';

form.appendChild(input);
form.appendChild(addButton);

const clearButton = document.createElement('button');
clearButton.type = 'button';
clearButton.textContent = 'ClearAll';

const listContainer = document.createElement('div');
listContainer.id = 'listContainer';

root.appendChild(form);
root.appendChild(clearButton);
root.appendChild(listContainer);

function addItem() {
    const itemValue = input.value;
    
    if (itemValue.trim() !== '') {
        shoppingList.push(itemValue);
        
        const itemElement = document.createElement('p');
        itemElement.textContent = itemValue;
        listContainer.appendChild(itemElement);
        
        input.value = '';
        
        console.log('Shopping List:', shoppingList);
    }
}

function clearAll() {
    shoppingList = [];
    listContainer.innerHTML = '';
    console.log('Shopping List cleared:', shoppingList);
}

addButton.addEventListener('click', addItem);
clearButton.addEventListener('click', clearAll);
