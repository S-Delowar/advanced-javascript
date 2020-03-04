const numbers = [2,3,4,5,6,7,8];
const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);

// }
//console.log(numbers, output);

// function square (element){
//     return element * element;
// }



// const result =  numbers.map(function(element, index, array){
//          return element * element;
//         });

// const result = numbers.map(x => x *x);
// console.log(result);                


//array.filter practice: return all element that passes 
const biggerThanFive = numbers.filter( x => x > 5);
console.log(biggerThanFive);

//array.find return first of the elements that pass
const biggerThanFiveFind = numbers.find( x => x > 5);
console.log(biggerThanFiveFind);

//array.findIndex returns the index of first elements that meet our condition
const biggerThanFiveFindIndex = numbers.findIndex( x => x > 5);
console.log(biggerThanFiveFindIndex);



// for each, reduce  dekhe nibo, find


