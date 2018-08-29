const cats = ['fluffy', 'spike', 'killer'];
console.log('1st cat:', cats[0]);

const favoriteAnimal = 'cow,bear,dog,cat';
const favoriteAnimalArray = favoriteAnimal.split(','); //['cow', 'bear', 'dog', 'cat']
console.log('favoriteAnimalArray', favoriteAnimalArray);

const numArray = [1, 2, 3, 4, 5];
const newNum = numArray.join('cow');
console.log('newNum:', newNum);

//mini challenge
const palChecker = (word) => {
    //console log 'yes' if it's a palindrome
    let revWord = word.split('').reverse().join('');
    if (word === revWord) {
        console.log(word + ' IS a palindrome!');
    } else {
        //console log 'no' if it's not a palindrome
        console.log(word + ' is NOT a palindrome.');
    }

};

palChecker('mom'); //yes
palChecker('monkeybutt'); //no
palChecker('racecar'); //yes
palChecker('asshole');

let animals = ['snakes', 'rats', 'cats', 'children'];

const lastItem = animals.pop(); //children
const firstItem = animals.shift();//snakes
animals.push('bat');
animals.unshift('baby hippo');
console.log('animals: ', animals);

// For Loops:
// 1. What is your starting value? (normally 0)
// 2. What is your stopping value? (usually .length)
// 3. How are you incrementing? (usually +1)

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
