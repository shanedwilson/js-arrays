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