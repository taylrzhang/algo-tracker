/*           QUESTION                     */
// console.log(+true);
// console.log(!"Lydia");

// A: 1 and false conver ture to 0 when use increment operator
// B: false and NaN
// C: false and false

/*           QUESTION                     */
// const bird = {
//   size: "small",
// };

// const mouse = {
//   name: "Mickey",
//   small: true,
// };

// A: mouse.bird.size是无效的 bird is not one of the properties of mouse
// B: mouse[bird.size]是无效的
// C: mouse[bird["size"]]是无效的
// D: 以上三个选项都是有效的

/*           QUESTION                     */
// let c = { greeting: "Hey!" };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);

// A: Hello               assigned d with the reference of c
// B: undefined
// C: ReferenceError
// D: TypeError

/*           QUESTION                     */
// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

// // A: true false true
// // B: false false true
// // C: true false false        b is a Number object, type is different
// // D: false true true

/*           QUESTION                     */
// let greeting;
// greetign = {}; // Typo!
// console.log(greetign);

// A: {}   it is declared a new global variable
// B: ReferenceError: greetign is not defined
// C: undefined

/*           QUESTION                     */
// function bark() {
//   console.log("Woof!");
// }

// bark.animal = "dog";

// // A: 正常运行！       ->functions are objects
// // B: SyntaxError. 你不能通过这种方式给函数增加属性。
// // C: undefined
// // D: ReferenceError

/*           QUESTION                     */
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.getFullName = function () {
//   console.log(this);
//   return `${this.firstName} ${this.lastName}`;
// };
// const member = new Person("Lydia", "Hallie");

// Person.getFullName(); //->[Function: Person] { getFullName: [Function (anonymous)] }
// console.log(member.getFullName());

// // A: TypeError -> TypeError: member.getFullName is not a function
//              ->  static methods do not have access to instance-specific properties, so the this inside a static method refers to the constructor function
// // B: SyntaxError
// // C: Lydia Hallie
// // D: undefined undefined

/*           QUESTION                     */
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const lydia = new Person("Lydia", "Hallie");
// const sarah = Person("Sarah", "Smith");

// console.log(lydia)
// console.log(sarah)

// // A: Person {firstName: "Lydia", lastName: "Hallie"} and undefined -> a new instance created with new keyword f the Person constructor / the constructor function does not return anything
// // B: Person {firstName: "Lydia", lastName: "Hallie"} and Person {firstName: "Sarah", lastName: "Smith"}
// // C: Person {firstName: "Lydia", lastName: "Hallie"} and {}
// // D:Person {firstName: "Lydia", lastName: "Hallie"} and ReferenceError

/*           QUESTION                     */
// // 所有对象都有原型。
// // A: 对
// // B: 错 -> all objects in JavaScript have prototypes except for the base object, and the prototype mechanism is a fundamental aspect of how objects inherit properties and methods.

/*           QUESTION                     */
// let number = 0
// console.log(number++)
// console.log(++number)
// console.log(number)

// A: 1 1 2
// B: 1 2 2
// C: 0 2 2 ->
// D: 0 1 2

/*           QUESTION                     */
// function checkAge(data) {
//   if (data === { age: 18 }) { // check if they are the same reference in memory
//     console.log("You are an adult!");
//   } else if (data == { age: 18 }) { // check if they are the same reference in memory
//     console.log("You are still an adult.");
//   } else {
//     console.log(`Hmm.. You don't have an age I guess`);
//   }
// }

// checkAge({ age: 18 });

// console.log({ age: 18 } == { age: 18 });

// A: You are an adult!
// B: You are still an adult.
// C: Hmm.. You don't have an age I guess ->

/*           QUESTION                     */
// function getAge(...args) {
//   console.log(typeof args);
// }

// getAge(21);

// A: "number"
// B: "array"
// C: "object" -> type of array is object
// D: "NaN"
