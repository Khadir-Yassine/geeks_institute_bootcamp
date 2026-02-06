// ====== Daily Challenge 1
const form = document.getElementById('libform');
const storySpan = document.getElementById('story');
const libButton = document.getElementById('lib-button');

let noun, adjective, person, verb, place;

const stories = [
    (n, a, p, v, pl) => `Once upon a time, ${p} found a ${a} ${n} in ${pl}. They decided to ${v} with it all day long, and it was the best day ever!`,
    
    (n, a, p, v, pl) => `${p} always dreamed of visiting ${pl}. One day, they packed their ${a} ${n} and decided to ${v} all the way there. It was an incredible adventure!`,
    
    (n, a, p, v, pl) => `In the ${a} land of ${pl}, ${p} discovered a magical ${n}. Legend says that whoever can ${v} with it will gain incredible powers!`,
    
    (n, a, p, v, pl) => `${p} was walking through ${pl} when suddenly a ${a} ${n} appeared! Without thinking, ${p} started to ${v}, and everything changed forever.`
];

let currentStoryIndex = 0;

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    noun = document.getElementById('noun').value;
    adjective = document.getElementById('adjective').value;
    person = document.getElementById('person').value;
    verb = document.getElementById('verb').value;
    place = document.getElementById('place').value;
    
    if (noun === '' || adjective === '' || person === '' || verb === '' || place === '') {
        alert('Please fill in all the fields!');
        return;
    }
    
    currentStoryIndex = Math.floor(Math.random() * stories.length);
    const generatedStory = stories[currentStoryIndex](noun, adjective, person, verb, place);
    storySpan.textContent = generatedStory;
    
    if (!document.getElementById('shuffle-button')) {
        const shuffleButton = document.createElement('button');
        shuffleButton.id = 'shuffle-button';
        shuffleButton.type = 'button';
        shuffleButton.textContent = 'Shuffle Story';
        shuffleButton.style.marginLeft = '10px';
        libButton.parentElement.appendChild(shuffleButton);
        
        shuffleButton.addEventListener('click', shuffleStory);
    }
    
    console.log('Story generated successfully');
    console.log('Values - Noun:', noun, 'Adjective:', adjective, 'Person:', person, 'Verb:', verb, 'Place:', place);
});

function shuffleStory() {
    if (noun && adjective && person && verb && place) {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * stories.length);
        } while (newIndex === currentStoryIndex && stories.length > 1);
        
        currentStoryIndex = newIndex;
        const generatedStory = stories[currentStoryIndex](noun, adjective, person, verb, place);
        storySpan.textContent = generatedStory;
        
        console.log('Story shuffled to index:', currentStoryIndex);
    }
}
// ====== Daily Challenge 2
const input = document.createElement('input');
input.type = 'text';
input.id = 'lettersOnly';
input.placeholder = 'Enter letters only';

document.body.appendChild(input);

input.addEventListener('input', function(event) {
    this.value = this.value.replace(/[^a-zA-Z]/g, '');
});
