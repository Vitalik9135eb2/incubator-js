console.log("Замакания")


// let a = 0
//
// const createCounter = () =>{
//     // let a = 0
//
//     const counter ={
//         inc(){ a++},
//         getValue(){
//            return   console.log(a)}
//     }
//     return counter
// }
//
// const call1 = createCounter()
// call1.inc()
// call1.getValue()
//
// const call2 = createCounter()
// call2.inc()
// call2.getValue()



// Example 2

// const print = (name) => {
//     console.log(`hello, ${name}`)
// }
//
// setTimeout( () => {
//     print("Egor")
// }, 1000)
//
// setTimeout( () => {
//     print("lox")
// }, 1000)



//Example 3

// const func1 = () => {
//     return () => {
//         console.log(10)
//     }
// }
// func1()()
//
// const func2 = (a) => {
//     return (b) => {
//         return (c) =>{
//             console.log(a+b+c)
//         }
//     }
// }
// func2(1)(2)(3)
//
//
//
// const func3 =(a)=>(b)=>(c)=>(d)=> console.log(a+b+c+d)
//
// func3(1)(2)(3)(4)




//Example 4

// let arr = [1,2,3,4,5,6,7,];
//
// const inBetween = (start, end) => {
//     return (el) => {
//         return el >= start && el <= end
//     }
// }
//
// const inArray = (arr) => {
//     return (el) => {
//         return arr.includes(el)
//     }
// }
//
// console.log(arr.filter(inBetween(3,6)) );  // 3,4,5,6
//
// console.log(arr.filter(inArray([2, 5])) );






//Example 5 Рекурсия

const pow = (x ,n) =>{

    if(n === 1){
        return x;
    } else {
        return x * pow(x, n - 1)
    }
}

console.log(pow(3,3))



















