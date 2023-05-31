

const f =()=>{
    console.log("f1" + this) // у стрелочной this это то лексическое окружение где вызывается
}
f()

const obj ={
    f2: ()=> {
        console.log("f2" + this)  // объект не создаёт лексического окружения
    },

    f3(){
        console.log("f3" + this)
    }
}
obj.f2()
obj.f3() // у function this это от чьего имени вызывается


var color = "blue"
const car = {
    color: "red",
    showColor(){
        console.log("Classic Fn " + this.color)
    },
    showColor2: () => {
        console.log("Arrow Fn " + this.color)
    },
    showColor3(){
      //this
      const a = () =>{
          console.log("Arrow in Classic Fn " + this.color)
      }
      a()
    }

}
car.showColor()
car.showColor2()
car.showColor3()



const car1 ={
    maxSpeed: 100,
    showMaxSpeed(){
        console.log("car Max Speed " + this.maxSpeed )
    },
    showMaxSpeed2(a, b){
        console.log("car Max Speed " + this.maxSpeed + a + b)
    }
}

const car2 ={
    maxSpeed: 200,
}
car1.showMaxSpeed()
car1.showMaxSpeed.bind(car2)()
car1.showMaxSpeed.call(car2)
car1.showMaxSpeed.apply(car2)

car1.showMaxSpeed2.call(car2,10,20)
car1.showMaxSpeed2.apply(car2,[10,20])




const car3 ={
    color: "green",
    showColor() {
        console.log("Car3  " + this.color)
    }
}

setTimeout( car3.showColor, 1000)
setTimeout( () => car3.showColor(), 1000)
setTimeout( car3.showColor.bind(car3), 1000)





const car4 ={ color:"pink"}
function foo(){
    console.log("Car 4 " + this.color)
}

const bindFoo = foo.bind(car4)
bindFoo()





const car5 ={
    color: "yellow",
    showColor(){
        console.log("Car 5 " + this.color)
    }
}


function CarConstructor(color){
    // return {}
    this.color = color;
    this.showColor = function (){
        console.log( "Car 6 " + this.color)
    }
}

// const Car6 = CarConstructor.bind(car5)
const Car6 = CarConstructor
const newCar = new Car6("black")

newCar.showColor()






