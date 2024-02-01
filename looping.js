/*
Looping tecniques:
1. for loop
2. while loop
3. do while loop-->Ignore
4. for of --> array loop korar jonno
5. for in --> object loop korar jonno
*/

 const friends = ['Elon', 'Bill', 'Mark', 'Waren'];

// for(const friend of friends){
//    // console.log(friend);
// }

// for(let i = 0; i < 10; i++){
//     console.log(i);
//     console.log(friends[i]);
// }

 const numbers = [ 5,45,67,45,67,678,45];

// for(let i = 0; i < numbers.length; i++){
//     // console.log(numbers[i]);
// }


let i = 0;
while(i < friends.length){
    console.log(numbers[i]);
    i++;
}