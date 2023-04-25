const promis1 = axios.get("s")

promis1
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })


const promis2 = function () {
}

promis2.then((user) => {
    console.log(user)
})




const otherPromis = Promise.all([promis1,promis2])

function getNumber (){
    // const promise = Promise.resolve(Math.random())

    const promise = new Promise((resolve, reject) => {
        resolve(Math.random() )
    })

    return promise
}

getNumber().then(n => console.log(n))


function  wait(ms) {
    return new Promise( (res) => {
       setTimeout( () => {res()}, ms)
    })
}

async  function run() {
    await  wait(1000)
    console.log(1)
    await  wait(1000)
    console.log(2)
}