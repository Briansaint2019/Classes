function Automobile(wheels) {
    this.wheels = wheels
    this.setColor = (color) => {
        this.color = color
    }
    this.getColor = () => {
        return this.color
    }
}

function Motorcycle(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
}

Motorcycle.prototype = new Automobile(2)

let ducati = new Motorcycle("Ducati", "Z-9000", 2016)

function Sedan(make, model, year,feature, featureTwo ) {
    this.make = make
    this.model = model
    this.year = year
    this.doors = 4
    this.feature = feature
    this.featureTwo= featureTwo
}

Sedan.prototype = new Automobile(4)

function Camry() {

}

Camry.prototype = new Sedan("Toyota", "Camry", 2012)

let camry = new Camry()

console.log(camry.wheels, camry.doors)

camry.year = 2010

console.log(camry.year)

// class Automobile {
//     constructor(wheels) {
//         this.wheels
//     }
//     setColor(color) {
//         this.color = color
//     }
//     getColor() {
//         return this.color
//     }
// }

// class Motorcycle extends Automobile {
//     constructor(make, model, year) {
//         super(2)
//         this.make = make
//         this.model = model
//         this.year = year
//     }
// }

function Maybach(){

}


Maybach.prototype = new Sedan('Mercedies', 'Maybach', 2012, 'Bullet Proof', 'Cornering Lights')
let maybach = new Maybach()
console.log(maybach.feature)
console.log(maybach.featureTwo)