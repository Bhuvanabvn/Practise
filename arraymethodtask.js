let arr=["bhuvana","jo","ajay","mari","robbin","div"]
let result=arr.filter(name=>name.length>3);

let final= result.map(name=>name.toUpperCase());
console.log(final);

const cart=[
    {item:"Book",price:120,quantity:2},
     {item:"pen",price:10,quantity:5},
      {item:"bag",price:500,quantity:1},

]
//for of

for (let product of cart)
{   

  let total=product.price*product.quantity;
  console.log(product.item,"=>"+"total cost "+total);
}

//for in 
let firstitem = cart[0];

console.log("Details of first item:");
for (let key in firstitem) {
  console.log(key + ": " + firstitem[key]);}


cart.forEach(product => {
 
  console.log(product.item.toUpperCase());
});