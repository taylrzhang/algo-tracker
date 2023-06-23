/**
 * Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
 */

var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  while (this.s1.length > 0) {
    this.s2.push(this.s1.pop());
  }
  this.s1.push(x);
  while (this.s2.length > 0) {
    this.s1.push(this.s2.pop());
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  let popped = this.s1.pop();
  return popped;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.s1[this.s1.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.s1.length > 0 ? false : true;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var obj = new MyQueue();
obj.push("x");
obj.push("y");
obj.push("z");
var param_2 = obj.pop();
console.log(param_2);
var param_3 = obj.peek();
console.log(param_3);
var param_4 = obj.empty();
console.log(param_4);
