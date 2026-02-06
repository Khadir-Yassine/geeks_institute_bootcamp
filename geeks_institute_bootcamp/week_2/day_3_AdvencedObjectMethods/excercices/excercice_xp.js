// ===== Exercise 1 : Location
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
//I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
// ===== Exercise 2: Display Student Info
function displayStudentInfo(objUser) {
    const {firstName, lastName} = objUser;
    return `Your full name is ${firstName} ${lastName}`;
}
console.log(displayStudentInfo({firstName: 'Elie', lastName: 'Schoppik'}));
//Your full name is Elie Schoppik
// ===== Exercise 3: User & Id
const users = { user1: 18273, user2: 92833, user3: 90315 }
const {user1, user2, user3} = users;
const usersArray = [user1, user2, user3];
const usersArrayUpdated = usersArray.map(id => id * 2);
console.log(usersArrayUpdated);
//[36546, 185666, 180630]
// ===== Exercise 4: Person class
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
//Person is a class.
//new Person('John') creates an instance (object) of the class.
//In JavaScript, instances of classes are objects.
//Output : object
// ===== Exercise 5: Dog class
//Using the Dog class below:
class Dog {
  constructor(name) {
    this.name = name;
  }
};
//Analyze the options below. Which constructor will successfully extend the Dog class?
  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

// ===== Exercise 6: Challenges
//  True / False
//console.log([2] === [2]); // false
//console.log({} === {});   // false


//  Objects and references
const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;

console.log(object2.number); // 4
console.log(object3.number); // 4
console.log(object4.number); // 5


//  Animal class
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

// Mammal class
class Mammal extends Animal {
  sound(animalSound) {
    return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

// farmerCow object
const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo"));



