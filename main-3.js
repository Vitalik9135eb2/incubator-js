// target element generation event
// currentTarget element subscribe event

const sm = document.getElementById("small")
const md = document.getElementById("medium")
const big = document.getElementById("big")

const handler = () => alert("qqq")
// const handler2 = (e) => console.log(e.currentTarget)
// const handler2 = (e) => console.log(e.target)
//  const handler3 = (e) => {
//     if(e.currentTarget.id === "small"){
//         console.log(e.currentTarget.id)
//     }
//  }

const handler4 = (e) => {
    if(e.target.tagName === "BUTTON"){
        alert(e.target.id)
    }
}

sm.addEventListener("click", handler4)
// md.addEventListener("click", handler2)
// big.addEventListener("click", handler2)

