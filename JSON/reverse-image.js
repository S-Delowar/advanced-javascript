const image = [
    [1, 0, 0], 
    [0, 1, 0], 
    [0, 0, 1]
  ]
  //0 and 1 replace 

 function reverseImage(img) {

 return img.map(row =>row.map(number => number === 0? 1:0))
 }

 console.log(reverseImage(image));