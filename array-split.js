const nums = [1,2,3,4,5,6,7,8];

//if i want to make an array by taking elements of index number 2 to 4.  slice last parameter is 5. so before 5 it will give result. 
const part = nums.slice(2,5);
console.log(part);
//slice korle original array change hobe na.


//splice = removed kore dewa. index 2 theke start kore 4 ta element remove korte chaile:
const removed = nums.splice(2,4);
console.log(removed);
//splice korle orginal array theke splice element remove hoye array change hoye jay.
console.log(nums);


const nums2 = [1,2,3,4,5,6,7,8]
const removedAdd = nums2.splice(2,4, 44,33);
//that means index 2 theke 4 ta element remove kore main array te oi jaigay 44,33 add kore dewa.
console.log(removedAdd);
console.log(nums2);


//join
const nums3 = [3,4,5,6,7];
const together = nums3.join(","); //3,4,5,6,7
const together2 = nums3.join("sayed"); //3sayed4sayed5sayed6sayed7
console.log(together);
console.log(together2);