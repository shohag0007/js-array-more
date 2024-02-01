 // name print 10 times.
/*
 for (let i = 1; i <= 10; i++) {
    console.log("shohag", i);

 }*/

//  for(let i = 1; i<=50; i++){
//    console.log('Shohag Josna Marica Alif');
//  }

/*for(let i = 0; i<=50; i += 2){
   console.log('Shohag Josna Marica Alif',i);
 }*/

 /*const nums = [23,43,2,5,366,203,2];

 for(let i = 0; i <=nums.length; i++){
   console.log(nums[i]);
 }*/



 //----> only odds are added and evens are added separately.
 

const nums = [23, 43, 2, 5, 366, 203, 2];
let sumOfOdd = 0;
let sumOfEven = 0;
 for(let i = 0; i < nums.length; i++){
   const x = nums[i];
   
   if(x % 2 === 1){
      sumOfOdd += x;
   }
else {
   sumOfEven += x;
}

 }

 
 console.log(sumOfEven);
  console.log(sumOfOdd);