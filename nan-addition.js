const arr = ["22", 33, "44", 55, "price: 66"];
let sum = 0;

for(let i = 0; i< arr.length; i++){
    const currentNum = arr[i];
    const convertedNumber = parseInt(currentNum)
    if(!isNaN(convertedNumber)){
        sum = sum + convertedNumber;
    }
    //sum = sum + parseInt(currentNum);
}

console.log(sum);
