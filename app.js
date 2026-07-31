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


class Car{
    constructor(showroom, carName, carColor, CarPrice, carImage){
        this.showroom = "Bilaspur, India"
        this.carName = carName;
        this.carColor = carColor;
        this.CarPrice = CarPrice;
        this.carImage = carImage;
    }
}

let car1 = new Car(this.showroom, "Audi", "Black", 5440000, "https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/Q7/12198/1768206503532/front-left-side-47.jpg");

let car2 = new Car(this.showroom, "BMW", "Blue", 239999, "https://imgd.aeplcdn.com/642x336/n/udkfdib_1893823.jpg?q=80");

let car3 = new Car(this.showroom, "Skoda", "Gray", 230000, "https://stimg.cardekho.com/images/car-images/large/Skoda/Octavia-2025/11527/1707974348350/221_Silver_7b7a87.jpg?impolicy=resize&imwidth=420");

let allCars = [car1, car2, car3];

let data = document.getElementById('data');
// console.log(allCars[0])
for(let car of allCars){
    data.innerHTML += `
        <div class='col-md-4'>
            <div class='card h-100 p-2 border-1 rounded-3'>
                <div class='card-body'>
                    <img src='${car.carImage}' class='w-100'>
                    <span class='badge bg-primary-sublte text-primary'>${car.showroom}</span>
                    <h2 class='card-title'>${car.carName}</h2>
                    <h4 class='fw-bold text-primary'>${car.CarPrice}</h4>
                </div>
            </div>
        </div>
    `;
}
