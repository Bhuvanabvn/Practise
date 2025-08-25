// map

let numbers=[1,2,3,4,5,6,7,8,9]
let five =numbers.map((x)=> x*5)
console.log(five)


//filter

let odd=numbers.filter((x)=>x%3==0)
console.log(odd)
let even=numbers.filter((x)=>x%2==0)
console.log(even)


//reduce

let sum=numbers.reduce((acc,val)=>acc+val)
console.log(sum)