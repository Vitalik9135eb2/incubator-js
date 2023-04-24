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




conts otherPromis = Promise.all([promis1,promis2])