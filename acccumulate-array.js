function accumulateArray(arr){
    let sum = 0;
    return arr.map(num => (sum += num));
}

const numbers = [1,2,3,4,5];
const result = accumulateArray(numbers);

console.log(numbers)
console.log(result)