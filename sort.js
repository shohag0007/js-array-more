 const numbers = [2,4,6,8,10,12,14];
 //const numbers_asc = numbers.sort(); // not working properly
 const numbers_asc = [...numbers].sort(function (a,b){return a-b});
 

  const numbers_dsc = [...numbers].sort(function (a,b){return b-a});
//   
 console.log(numbers_asc);
  console.log(numbers_dsc);

// const persons = ['rakib', 'nokib', 'sakib', 'akib', 'pakib', 'anis', 'Anis'];
// const sortedPersons = persons.sort();
// console.log(sortedPersons);
