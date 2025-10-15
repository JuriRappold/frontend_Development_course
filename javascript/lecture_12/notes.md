# Lecture 12 - Prototypical inheritance & ES6 Classes
---
- javascript 
Outcomes:
- what is prototype


## Prototype Chain
```javascript
const person = {greet(){console.log('Hello');}};
const student = Object.create(person);
student.name = 'Anna';
student.greet()
```
## Constructor Functions
```javascript
function  Animal(name){
    
}
```
## ES6 Classes
Prototypical (Pre-ES6) vs ES6 CLasses
- syntax: verbose vs cleaner
- mechanism: prototype chain for both
- Inheritance: Object.create() vs extends
- Parent call: .call() vs super()

## Homework Challenge
- Build a small system using ES6 classes:
  - Base class: LibraryItem (title, available)
  - Subclass: Book (borrow, return)
  - Subclass: EBook (download)
- Use extends and super() properly