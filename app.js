// function claculator(x, y){
//     let total = x - y;
//     console.log(total)
// }

// claculator(56, 76)

// console.log(typeof(claculator()))

// let fn = function(x, y){
//      let total = x - y;
//     console.log(total)
// }

// fn(56, 76)

// console.log(typeof(fn))

// let array = [1, 2, 3, 4, 5];
// console.log(typeof(array))

// Pratham = Array

// By Literal Object (Simple Object)
// let  obj = [
//     {
//         name: "Ayushman",
//         age: 23,
//         city: "Bilaspur",
//     },
//     {
//         name: "Pratham",
//         age: 23,
//         city:"Katani"
//     },{
//         name: "Pratham",
//         age: 23,
//         city:"Katani"
//     },{
//         name: "Pratham",
//         age: 23,
//         city:"Katani"
//     },{
//         name: "Pratham",
//         age: 23,
//         city:"Katani"
//     }
// ]

// console.log(typeof(obj))


// Template Class where we are going to create a insctance of object with new keyword and its constructor
// Simple version API - 
// Car (Object) = Color, vehical type, brand, fuel type, showroom, price etc.
// Empoyee (Object) = Name, city, age, number, occuption, location, phone etc.



// class Car{
//     constructor(carName, carColor, CarPrice, carImage){
//         this.carName = "Audi";
//         this.carColor = "Black";
//         this.CarPrice = 5600000,
//         this.carImage = 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/Q7/12198/1768206503532/front-left-side-47.jpg'
//     }
// }

// let car1 = new Car()
// console.log(car1)

// let carImg = document.getElementById('carImg');
// let title = document.getElementById('title');
// let price = document.getElementById('price');

// carImg.setAttribute('src', car1.carImage)
// title.innerText = car1.carName;
// price.innerText = car1.CarPrice;


// class Car{
//     constructor(showroom, carName, carColor, CarPrice, carImage){
//         this.showroom = "Bilaspur, India"
//         this.carName = carName;
//         this.carColor = carColor;
//         this.CarPrice = CarPrice;
//         this.carImage = carImage;
//     }
// }

// let car1 = new Car(this.showroom, "Audi", "Black", 5440000, "https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/Q7/12198/1768206503532/front-left-side-47.jpg");

// let car2 = new Car(this.showroom, "BMW", "Blue", 239999, "https://imgd.aeplcdn.com/642x336/n/udkfdib_1893823.jpg?q=80");

// let car3 = new Car(this.showroom, "Skoda", "Gray", 230000, "https://stimg.cardekho.com/images/car-images/large/Skoda/Octavia-2025/11527/1707974348350/221_Silver_7b7a87.jpg?impolicy=resize&imwidth=420");

// let allCars = [car1, car2, car3];

// let data = document.getElementById('data');
// // console.log(allCars[0])
// for(let car of allCars){
//     data.innerHTML += `
//         <div class='col-md-4'>
//             <div class='card h-100 p-2 border-1 rounded-3'>
//                 <div class='card-body'>
//                     <img src='${car.carImage}' class='w-100'>
//                     <span class='badge bg-primary-sublte text-primary'>${car.showroom}</span>
//                     <h2 class='card-title'>${car.carName}</h2>
//                     <h4 class='fw-bold text-primary'>${car.CarPrice}</h4>
//                 </div>
//             </div>
//         </div>
//     `;
// }


let student = [
    {
        name: "Ayushman",
        age:42,
        city: "Raipur"
    },
     {
        name: "Priyanshu",
        age:41,
        city: "Raipur"
    }, {
        name: "Pratham",
        age:43,
        city: "Katani"
    }
]

// let name = 

// function fnName(){

// }
// Template Class where we are going to create a Instance of object with (new) keyword and its constructor
// Template Keyword
// class User{
//     // Declearation
//     constructor(name, age, city){
//         // Initilization
//         this.name = "Priyanshu";
//         this.age = 23,
//         this.city = "Bilaspur";
//     }
// }

// let u1 = new User()

// console.log(u1)

// console.log(typeof(u1))


class User{
    constructor(name, age, city){
        this.name = name;
        this.age = age;
        this.city = city;
    }
}
let u1 = new User("Priyanshu", 23, "Waraseoni");
let u2 = new User("Pratham", 24, "Katani");
let u3 = new User("Priya", 20, "Balaghat");
let u4 = new User("Aadarsh", 22, "Katangi");
let u5 = new User("Rajesh", 20, "Seoni");

let allUser = [u1, u2, u3, u4, u5]

// for(let user of allUser){
//     console.log("Hii my name is ", user.name)
// }

// console.log(allUser[1])

// let count = 0;

// let countText = document.getElementById("count");
// let btn = document.getElementById('btn');
// btn.addEventListener('click', ()=>{
//     count++;
//     countText.innerText = count;
// })

// let count = 0;
// let countText = document.getElementById("count");
// let allData = document.getElementById("allData");
// let fruits = ["apple", "Banana", "Grapes"];

// for(let f of fruits){
//     allData.innerHTML +=`<li>${f} <button>Add to Cart</button></li>`;
// }

// let btn = document.getElementById('btn');
// btn.addEventListener('click', ()=>{
//     if(count < fruits.length){
//         countText.innerText += fruits[count];
//         count++;
//     }else{
//         alert("No More Fruits...")
//     }
// })

// BMW = Vehical Type = color, name, showroom
// Honda = Vehical Type = Color, name, showroom

// Parent

class Vehical{
    constructor(color, name, showroom){
    //    this.vehicalTyle = vehicalTyle;
       this.color = color;
       this.name = name;
       this.showroom = showroom; 
    }
}

// Child 1 - Vehical
class Car extends Vehical{
    // Method
      additinalDetails(vtype, city){
        this.vtype = "For Wheeler";
        this.city = "Bilaspur"
    }
}

let c1 = new Car("White", "BMW", "Mahajan 1");
let c2 = new Car("White", "BMW", "Mahajan 1");
let c3 = new Car("Red", "Mahindra", "Mahajan 2");
let c4 = new Car("Gray", "Thar", "Mahajan 3");

c1.additinalDetails()
c2.additinalDetails()
c3.additinalDetails()
c4.additinalDetails()

let allCars = [c1, c2, c3, c4]

// Child 2- Car
class Bike extends Car{
    additinalDetails(vtype, city){
        this.vtype = "Two Wheeler";
        this.city = "Raipur"
    }
}

let b1 = new Bike("Gray", "Hunter", "MahaLakchmi 1")
let b2 = new Bike("Orange", "City 100", "MahaLakchmi 2")
let b3 = new Bike("Blue", "Apache", "MahaLakchmi 3")
let b4 = new Bike("White", "Activa", "MahaLakchmi 4")

b1.additinalDetails()
b2.additinalDetails()
b3.additinalDetails()
b4.additinalDetails()


let allBike = [b1, b2, b3, b4]

let allVehical = [...allCars, ...allBike]

for(let i in allVehical){
    console.log(i)
}
