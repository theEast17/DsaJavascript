
// // 1st
// function User(name,age,password){
//     this.name=name
//     this.age=age
//     this.password=password
//     return this //we do not need to return while we use new keyword
// }


// // let poorv=User('Poorv',17,'1234')
// // let shubham=User('Shubham',19,'1234')
// // console.log(poorv)


// // why should we use new keyword

// let poorv=new User('Poorv',17,'1234')
// let shubham=new User('Shubham',19,'1234')
// console.log(poorv)
// console.log(shubham)


// // 2nd
// // function thisKeyword(){
// //     console.log(this)   // it will show the output global in node and window in browser
// // }
// // thisKeyword()



// normal function vs arrow function

// Difference  
// 1- syntax
// 2- arguments keyword
// 3- hoisting
// 4- this keyword

// 1  
// function a(){
//     console.log(arguments)
// }
// const a = () => {
//     console.log(arguments)
// }
// a(1,3,4)

// NOTE: arrow function does not have a arguments keywords so there we can use only spread operator to access all the data

// 2   spread operator
// function b(...value){
//     console.log(value)
// }
// const b = (...value) => {
//     console.log(value)
// }
// b(1, 2, 3, 4, 5)

// 3  hoisting

// a()
// function a(){
//     console.log('hello')
// }

// b()   // can not access before initialization
// const b=()=>{
//     console.log('hello')
// }

// 4 this keyword

// const obj={
//     value:10,
//     // access(){
//     //     console.log(this.value)
//     // }
//     access:()=>{
//         console.log(this)
//     }
// }

// obj.access()


// prototype inheritance

// arr.__proto__ === Array.prototype
// arr.__proto__.__proto__ === Object.prototype
// arr.__proto__.__proto__.__proto__ === null

// object.__proto__ === Object.prototype
// object.__proto__.__proto__ === null

// fun.__proto__ === Function.prototype
// fun.__proto__.__proto__ === Object.prototype

// let object = {
//     name: 'poorv',
//     city: 'ahmedabad',
//     intro: function () {
//         console.log(this.name, this.city)
//     }
// }

// let object2 = {
//     name: 'shubham'
// }

// object2.__proto__ = object

// console.log(object2.__proto__.intro())
// console.log(object2.intro())
// console.log(object.intro())


// debouncing in js


const btn=document.querySelector('.btn')
const increment=document.querySelector('.increment')
const tirgger=document.querySelector('.trigger')

let inc=0
let tri=0

// this is debounce example
const debounceFunc=_.debounce(()=>{
    tirgger.innerHTML=++tri
},800)

// this is throttle example
// const throttleFunc=_.throttle(()=>{
//     tirgger.innerHTML=++tri
// },1000)



btn.addEventListener('click',()=>{
    increment.innerHTML=++inc
    throttleFunc()
})