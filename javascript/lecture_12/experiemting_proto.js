const log = (logging) => {
    console.log(logging);
}

//adding talk() to the prototype instead
// function Person() {}
// Person.prototype.talk = function(){
//     return `Prototype kinda talk!`
// }
// const you = new Person()//the talk() function is NOT copied
// log(you.talk()) //Output: `Prototype kinda talk!`
// Person.prototype.talk = function(){
//     return  `More Prototype kinda talk!`//changes it for all inheriting obj
// }
// log(you.talk()) //Output: `More Prototype kinda talk!`

//Parent Class
class Person {
    constructor(name, age, height, weight){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;//could check if this is a number
    }
    introduce(){
        return `Hello! I am ${this.name}, I am ${this.age} years old.`
    }
}
//Child Class that inherits code from the Parent class
class Athlete extends Person{
    constructor(name, age, height, weight, sport){
        //passes it to the Person class constructor
        super(name, age,height, weight);
        this.sport = sport;
    }

    play(){
        return `I play ${this.sport}`
    }
}
//Show Case
const jovan = new Athlete("Jovan", 27, 200, 50, "Volleyball");
console.log(jovan.introduce());
console.log(jovan.play());
jovan.name = 4;
log(jovan.introduce())