class Stack{
    constructor(){
        this.stack=[1,2,3]
    }
    push(element){
        this.stack.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return 'stack is empty'
        }
           return this.stack.pop()
    }

    isEmpty(){
        return this.size() === 0
    }

    peek(){
        if(this.isEmpty()){
            return 'stack is empty'
        }
        return this.stack[this.size() - 1]
    }

    size(){
        return this.stack.length
    }

    printValue(){
        return this.stack.forEach((x)=>{
            console.log('value:' + x)
        })
    }
}


const s=new Stack();
s.push(10)

console.log(s.pop())
console.log('Peek'+s.peek())
console.log(s.pop())
console.log('Peek'+s.peek())
// console.log(s.pop())
// console.log('Peek'+s.peek())
// console.log(s.pop())
// console.log('Peek'+s.peek())

// console.log(s.isEmpty())

console.log(s.printValue())
