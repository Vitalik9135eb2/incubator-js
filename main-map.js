let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

const getNames = (array) => {
    const result =[]

    for (let i = 0; i < array.length ; i++) {
        result[i] = array[i].name
    }
    return result
}
console.log(getNames(students))


const getStudents = (array) => {
    const result =[]

    for (let i = 0; i < array.length ; i++) {
        result[i] = {...array[i], isStudent: true}
    }
    return result
}

console.log(getStudents(students))


const funcName = obj => obj.name
const funcStudent = obj => ({...obj, isStydent:false})

const globalMap = (array,func) => {
    const result =[]

    for (let i = 0; i < array.length ; i++) {
        result[i] = func(array[i])
    }
    return result
}

console.log(globalMap(students,funcName))
console.log(globalMap(students,funcStudent))

console.log(students.map(funcName))


const globalFilter = (array, func) => {
    const result =[]

    for (let i = 0; i < array.length; i++) {
        if( func(array[i]) ) {
            result.push(array[i])
        }
    }

    return result
}

console.log(globalFilter(students, s =>s.age >20))
console.log(students.filter(s => s.age >20))


const  globalFind = (array,func) =>{
    for (let i = 0; i < array.length; i++) {
        if(func(array[i])){
            return array[i]
        }
    }
}


console.log(globalFind(students, s => s.name === "Bob"))
console.log(students.find(s => s.name === "Bob"))


const globalPush = (array, el) => {

    // const result = [...array, el]
    // return result

    array[array.length] = el
    return array
}

console.log(globalPush(students, {xer:true}))