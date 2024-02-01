const address = 'dulabala';
const part = address.slice(1, 4); // from 1 index before 4 index.
// console.log(part);

const sentence = 'I am a hard working person';
// console.log(sentence.split());

//console.log(sentence.split(''));  // empty string

// console.log(sentence.split(' '));  // white space

// console.log(sentence.split('a')); // remove only a letter.

// console.log(sentence.split('a'));

const friendsStr = 'Rahim,Karim,dahim,fahim,sahim';
const friend = friendsStr.split(',');
console.log(friend);

const realFriend = ['Shohag', 'Josna', 'marica', 'alif'];
 //console.log(realFriend.join()); // by default , one by one 
 console.log(realFriend.join('|')); // join with ||
 console.log(realFriend.join('?')); // join with ??
 console.log(realFriend.join('+-')); // join with +-