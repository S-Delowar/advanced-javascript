const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 22, name: 'Mannaaa'},
    {id: 31, name: 'Popi'},
    {id: 43, name: 'DeepJol'}
];
//console.log(students);


// const result = [];
// for(let i = 0; i < students.length; i++){
//     const element = students[i].name;
//     result.push(element)
// }
// console.log(result);




// const names = students.map(function(element){
//     return element.name;
// })
// console.log(names);


// const names = students.map(stdnt => stdnt.name);
// const id = students.map(stdnt => stdnt.id);
// console.log(names, id);

const biggerThirty = students.filter(stdnt => stdnt.id >30);
console.log(biggerThirty);

const findTest = students.find(x => x.id > 30);
console.log(findTest);

