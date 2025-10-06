# Lecture 09 - Repetition Structures and Functions
## Guard Clauses
```javascript
function processOrder(order) {
    if (!order) 
        return console.log("Invalid order.");
    if (order.status !== "pending")
        return console.log("Order cannot be processed.");
    console.log("Processing order:", order.id);
}
```
``` javascript
if (user && user.isLoggedIn) {
    logout();
}
```
instead use:

```javascript
user?.isNotLoggedIn && login();
```
`user?` --> user might be null/undefined

## Nullish Coalescing **EXAM RELEVANT**

`const value = user && user.age;` --> if user.age is set to 0, JS defaults to false in this if-statement

- used when 0 is a valid value (and we don't want it to evaluate 0 as false)
  - operator: `??`, for all intents and purposes and OR

```javascript
let age = 0;
console.log(age || 18); // Output: 18 (incorrect behavior)
console.log(age ?? 18); // Output: 0 (Because 0 is valid now)
```

[dummy Json](https://github.com/Ovi/DummyJSON)<br>
[dummy Json users](https://dummyjson.com/users)<br>
[dummy Json comments](https://dummyjson.com/comments)<br>

## Functions
```javascript
// standard function, 10 is the default value for y.
function add(x, y=10){
    return x+y;
}

// anonymous function, gets called on variable
let variable = function (x, y=10){
    return x+y;
}
console.log((variable))

// instantly invoking function: IIF
let variable2 = (function (x, y = 10){
    return x+y;
})()// ()--> immediatly calls the function, can be called again by invoking variable
```

```javascript
function myFunction(x,y){
    return x+y;
}
let myNum = 0;

console.log(myFunction(myNum ?? 10, 15));// null-coalescion
console.log(myFunction(myNum || 10, 15));
```

## Scope
- global scope
- block scope

### Closure
- a variable inside a function, that exists even after the function call.

```javascript
const increase = (function (){
    let count = 0;
    const nested = function (){ return count = count +1}
    return nested
})
```

## Classes
```javascript
// A class
class Car
{
    constructor(make, model){//special method that takes care of initializing objects
        this.make = make;
        this.model = model;
    }
    startEnginge(){
        console.log("Engine started!")
    }
}
// creating an object of a class
const myCar = new Car("Toyata", "Camry");
myCar.startEnginge();//outputs : "Engine started!"
```
## a02
- we can already do the basics (html & css)
- we can do the logic (javascript)
- can't do: the connection between the two

