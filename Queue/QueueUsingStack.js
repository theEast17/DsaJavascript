// Ques 3 : Implement Queue using Stacks
// Implement a first in first out(FIFO) queue using only two stacks.
// The implemented queue should have all functions of queue(enqueue, front, dequeue, and empty).

var MyQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
  };
  
  MyQueue.prototype.enqueue = function (x) {
    this.stack1.push(x);
  };
  
  
  MyQueue.prototype.dequeue = function () {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
  
    return this.stack2.pop();
  };
  
  MyQueue.prototype.front = function () {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
  
    return this.stack2[this.stack2.length - 1];
  };
  
  MyQueue.prototype.empty = function () {
    return this.stack1.length === 0 && this.stack2.length === 0;
  };
  

  
  const queue = new MyQueue();
  queue.enqueue(3);
  console.log(queue)
  queue.enqueue(6);
  console.log(queue)
  queue.enqueue(7);
  console.log(queue)
  console.log(queue.dequeue());
  console.log(queue.front());