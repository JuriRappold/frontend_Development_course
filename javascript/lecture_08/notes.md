Lecture 08 - Object Types, Control Flow, Boolean Logic, and Exceptions
---

## Object Types
### Arrays/Lists/Collections
Three ways to create an Array:
```javascript
const cars = ["Saab", "Volvo", "BMW"];

const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";

const cars = new Array("Saab", "Volvo", "BMW");
```
- can have mixed data-type
- don't append but push to a list/array: `fruits.push("Lemon");`
- use an Array if you want the List to have a number index
- if you want a string index (or key) use an object

### Objects
```javascript
let person = {
    name: ["Alex", "Bob"],
    age: 22,
    bio: function(){
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`)
    },
    intro: function (){
        return "Hi! I'm " + this.name[0];
    }
};
```
- using a back tick (shift + btn left of back) acts like `f"string"` in python
- name & age can be considered attributes
- bio & intro can be considered methods

#### Extending Objects
```javascript
person.job = "Software Developer";
```
- extends obj, allows one to not have unused attributes in the object declaration
  - i.e. only creates an attribute when needed
- there seems to be multiple ways to create variables, but try to avoid object-creation (new String, new array, etc.) as that can require type casting down the line
## Control Flow

## Boolean Logic (Boolean Operator)
- `>` greater than
- `<` less than
- `>=` greater than or equal to
- `<=` less than or equal to
- `==` compares value; equal(value)
- `===` compares type; equal(type)
- `!=` not equal (value)
- `!==` not equal (type)

- one = : assignment
- two = : comparison of value ( "5"==5 => returns true )
- triple = : compares value and type ( "5"===5 => returns false )

` ""==0 ` returns true, bc an empty string `""` evaluates to `false`, as does `0`
(keyword null-coalescing, separate lecture)
- logical operators are the same as in java (&&, ||, !)
Short-Circuit Evaluation
```javascript
let x = 5;
if(x >=5 && user.isLoggedIn()){
    return user;
}
```
If the first statement here is false, the second condition is not checked/calculated/executed.<br>

With `||`, as long as the first condition is true, the second one is not checked.
## Exceptions
**Types of errors:**<br>
- invalid inputs (wrong data type)
- network issues
- unexpected behaviors

Tell the user when something goes wrong, but don't just send them the raw-error message, most users don't understand those.<br>
**Syntax Errors:** Errors made by the programmer
**Runtime Errors:** errors that happen during execution, often solved by try-catch(-final) statements
````javascript
//try-catch-finally block
try{
    //code that may cause an error
} catch(error) {
    //code that can handle the exception
} finally {
    //code that always runs regardless if an error is caused
}

//if-else
if(condition){
    doThis();
} else{
    doThat();
}
//or write if-else statemts like this
condition == true ? doThis() : doThat();

//switch-case blocks
switch(expression){
    case value1:
        //some code
        break; //required for each case
    case value2:
        //some code 2
        break;
    default://runs when no case matches the expression
        //some code
        break;
}
````