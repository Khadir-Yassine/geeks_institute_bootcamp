// ===== Exercise 1
// PART I
setTimeout(function() {
    alert("Hello World");
}, 2000);


// PART II
setTimeout(function() {
    const container = document.getElementById('container');
    const paragraph = document.createElement('p');
    paragraph.textContent = "Hello World";
    container.appendChild(paragraph);
}, 2000);


// PART III
const container = document.getElementById('container');
const clearButton = document.getElementById('clear');

const intervalId = setInterval(function() {
    const paragraph = document.createElement('p');
    paragraph.textContent = "Hello World";
    container.appendChild(paragraph);
    
    const paragraphCount = container.querySelectorAll('p').length;
    
    if (paragraphCount >= 5) {
        clearInterval(intervalId);
    }
}, 2000);

clearButton.addEventListener('click', function() {
    clearInterval(intervalId);
});
// ===== Exercise 2
function myMove() {
    const animate = document.getElementById('animate');
    let position = 0;
    
    const intervalId = setInterval(function() {
        if (position >= 350) {
            clearInterval(intervalId);
        } else {
            position++;
            animate.style.left = position + 'px';
        }
    }, 1);
}
