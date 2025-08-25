function orderfood(pizza)
{
    setTimeout(()=>{
        console.log("order the food")
        pizza()
    },3000);
}
function eatfood()
{
    setTimeout(()=>{
        console.log("pizza ready")
    },5000);
}
orderfood(eatfood)


//callback hell 

function brush(a)
{
    setTimeout(()=>{
        console.log("time to brush")
        a()
    },5000)
}

function bath(b){
    setTimeout(()=>{
        console.log("time to bath")
        b()
    },3000)
}

function ready(c)


{
    setTimeout(()=>{
        console.log("time to ready")
        c()
    },6000)
}

function drink(){
    setTimeout(()=>{
        console.log("time to drink")
    },4000)
}
brush(()=>{
    bath(()=>{
        ready(drink)
    })
})