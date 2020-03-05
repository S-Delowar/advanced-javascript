const nums = [1,-2,-3,-4,5,-6,7,-8,9];
for(let i = 0; i < nums.length; i++){
    if(nums[i] > 5){
        break;
    }
    console.log(nums[i]);
}
//code doesn't work after 'break'


//if we want to skip some values we will use 'continue'
for(let i = 0; i < nums.length; i++){
    if(nums[i] < 0){
        continue; //skip the negative values
    }
    console.log(nums[i]);
}