let user = {
    name: "Juri",
    isActive: true
};
function processUser(){
    if(!user || !user.isActive) return ;
    console.log(`Processing user: ${user.username}`)
}

function procesUser(){
    user && user.isActive && console.log(`Processing user: ${user.name}`);// guard clause with short-circuit-evaluation
}

function greet(){
    procesUser()
    console.log(user?.name);
    console.log(user?.adress?.city);
    console.log(user?.post?.[0])
}
greet()

let age = 0;

let confirmedAge = age ?? "18";

let myArray = [1,2,3,4,5,6,7]
for (item in myArray){console.log(item)}


const increase = (function (){
    let count = 0;
    const nested = function (){ return count = count +1}
    return nested
})()
console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
