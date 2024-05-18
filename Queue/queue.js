class Queue{
    constructor(){
        this.queue=[]
    }

    enqueue(ele){
        this.queue.push(ele)
    }
    dequeue(){
        if(this.isEmpty()){
            return 'Queue is empty'
        }
        return this.queue.shift()
    }
    isEmpty(){
        return this.queue.length === 0
    }
    peek(){
        if(this.isEmpty()){
            return 'Queue is empty'
        }
        return this.queue[0]
    }
    size(){
        return this.queue.length
    }
    printQueue(){
        return this.queue.forEach((items)=>{
            console.log('value: '+items)
        })
    }
}


const q=new Queue()
console.log(q)
q.enqueue(15)
q.enqueue(25)
q.enqueue(35)
q.enqueue(45)
console.log(q)
console.log(q.isEmpty())
console.log(q.peek())
console.log(q.dequeue())
console.log(q)
console.log(q.peek())
console.log(q.size())
q.printQueue()
