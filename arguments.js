// function add(n1, n2){
//     return n1 + n2;
// }
// const result = add( 2,5);
// const result2 = add(2,5,8);
// console.log(result, result2);


// function add(n1, n2){
//     console.log(...arguments);
//     console.log([...arguments]);
//     return n1 + n2;
// }
// const result2 = add(2,5,8,52,23);
// console.log(result2);

//argument: array like object


//sum of all numbers that we will pass. we can do it by create function and apply arguments

function sum(n1, n2){
    const elements = [...arguments];
    let result = 0;
    console.log(elements);

    for( let i = 0; i < elements.length; i++){
        result += elements[i]; 
    }
    return result;
}

const output = sum(2,3,4,5,10);
console.log(output);





if({}){
    console.log("I am not false")
}
else{
    console.log("I am false")
}