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

// class Vehical{
//     constructor(color, name, showroom){
//        this.color = color;
//        this.name = name;
//        this.showroom = showroom; 
//     }
// }

// class Car extends Vehical{
//       additinalDetails(vtype, city){
//         this.vtype = "For Wheeler";
//         this.city = "Bilaspur"
//     }
// }

// let c1 = new Car("White", "BMW", "Mahajan 1");
// let c2 = new Car("White", "BMW", "Mahajan 1");
// let c3 = new Car("Red", "Mahindra", "Mahajan 2");
// let c4 = new Car("Gray", "Thar", "Mahajan 3");

// c1.additinalDetails()
// c2.additinalDetails()
// c3.additinalDetails()
// c4.additinalDetails()

// let allCars = [c1, c2, c3, c4]

// class Bike extends Car{
//     additinalDetails(vtype, city){
//         this.vtype = "Two Wheeler";
//         this.city = "Raipur"
//     }
// }

// let b1 = new Bike("Gray", "Hunter", "MahaLakchmi 1")
// let b2 = new Bike("Orange", "City 100", "MahaLakchmi 2")
// let b3 = new Bike("Blue", "Apache", "MahaLakchmi 3")
// let b4 = new Bike("White", "Activa", "MahaLakchmi 4")

// b1.additinalDetails()
// b2.additinalDetails()
// b3.additinalDetails()
// b4.additinalDetails()


// let allBike = [b1, b2, b3, b4]

// let allVehical = [...allCars, ...allBike]

// for(let i in allVehical){
//     console.log(i)
// }

class Claculator{
    calc(){
        console.log("I am Calculator")
    }
}

class Sum extends Claculator{
    // Same Method
    calc(num1, num2){
        // Addon 
        console.log(num1 + num2)
    }
}

class Minus extends Claculator{
    // Same Method
    calc(num1, num2){
        // Behavioud Minus
        console.log(num1 - num2)
    }
}

let calc1 = new Sum()
let calc2 = new Minus()

// calc1.calc(45, 45)
// calc2.calc(45, 45)



// class EMP{
//     constructor(userName, userAge, UserCity){
//         this.userName = userName;
//         this.userAge = userAge;
//         this.UserCity = UserCity;
//     }

//     desgination(digi){
//        this.digi = "Software Developer";
//     }
//     company(comp){
//         this.comp = "CuboidSoft Company";
//     }
// }

// class Library extends EMP{
//     desgination(digi){
//         super.company()
//         this.digi = "Librarian";
//     }
// }

// class Cateeen extends EMP{
//     desgination(digi){  
//         super.company()
//         this.digi = "Cateen Manager";
//     }
// }


// let d1 = new EMP("Ayushman", 23, "Waraseoni");

// let l1 = new Library("Pratham", 21, "Katani");

// let c1 = new Cateeen("Aadarsh", 23, "Balaghat");

// d1.desgination();
// l1.desgination();
// c1.desgination();


// let allGroups = [d1, l1, c1];
// console.log(allGroups[0])

// class Student{
//     // Private Variable (Property)
//     #age;
//     #name;

//     getAge(){
//         return this.age;
//     }

//     setAge(age){
//         this.age = age;
//     }

//     getName(){
//         return this.name;
//     }

//     setName(name){
//         this.name = name;
//     }
// }

// let s1 = new Student();
// s1.setAge(23);
// s1.setName("Ayushman");

// console.log(s1.getAge(), s1.getName())


// class Student{
//     // Private Variables / Props
//     #age;
//     #name;

//     constructor(age, name){
//         this.#age = age;
//         this.#name = name;
//     }

//     get age(){
//         return this.#age;
//     }

//     set age(value){
//         this.#age = value;
//     }

//     get name(){
//         return this.#name;
//     }

//     set name(value){
//         this.#name = value;
//     }
// }

// let s1 = new Student();

// s1.age = 24;
// s1.name = "Ayushman";

// console.log(s1.age, s1.name)

// let x = 80;
// console.log(typeof(x));

// console.log()
// typeof()


// class Payment{
//     pay(){
//         console.log("Payment Need to Complete")
//     }
// }

// class UPI extends Payment{
//     pay(amnt){
//         this.amnt = amnt;
//         console.log(amnt + 10);
//     }
// }

// class CredidCart extends Payment{
//     pay(amnt){
//         this.amnt = amnt;
//         if(amnt > 2000){
//             console.log("You have Recieved 500 Rupee Cashback...")
//         }else{
//             console.log(amnt, "Payment Recieved Using Credit Card")
//         }
//     }
// }

// let p1 = new UPI();
// // p1.pay(90)

// let p2 = new CredidCart();

// p2.pay(30000)

// console.log(p2)

// Method Overloading

// class Claculator{
//     add(x, y){
//         console.log(x + y);
//     }

//     add(x, y , z){
//         console.log(x + y + z);
//     }
// }

// let a1 = new Claculator();
// a1.add()

// class Dog{
//     sounds(){
//         console.log("Animals Makes a Sound")
//     }
// }

// class Cat extends Dog{
//     sounds(){
//         console.log("Cat is meow")
//     }
// }

// let a1 = new Cat();
// a1.sounds()

// class Calculator{
//     static add(x, y){
//         console.log(x + y);
//     }
// }

// Calculator.add(20, 20)

 
// let number = [10, 20, 23, 35];

// const [a, b] = number;

// const {name, age} = user;

// console.log(a);
// console.log(b);

const fruits = ["Apple", "Banana", "Grapes"];
const veg = ["Onion", "Brinjal", "Ledy Finger"];
const drinks = ["Coke", "Sprite", "String"];

const allData = [fruits, veg, drinks];
// console.log(allData)

const copyData = [...fruits, ...veg];
// console.log(copyData)


// let newCopy = fruits.concat(drinks, veg)

let tcmstudent = {
    name: "Pratham",
    age:21
}

let updateStudent = {
    ...tcmstudent,
    course: "Web Development"
}

// console.log(updateStudent)

// function add(numbers){
//     console.log(numbers)
// }

// add(19, 20, 39, 49)

// try {
//     console.log(tcm)
// } catch (error) {
//     console.error("Bhai Error Hai Please check")
// }

//  console.log(tcm)

// function login(userName, userPassword){
//     if(!userName || !userPassword){
//         throw new Error("Username or Password is required...");
//     }
//     console.log("User Logged In")
// }

// try {
//     login("", "")
// } catch (error) {
//     console.error("Kuch to gadbad hai...")
// }
// finally{
//     console.log("Bhai mai to chalunga hi bhale hi error ho ya kuch...")
// }

// callstack, ,promise, array, string, object method, eventboubling,  api fetuching with json,

// function greeting(callback1, callback2){
//     console.log("Hello i am Ayushman");

//     callback1();
//     callback2();
// }

// function welcome(){
//     console.log("Welcome to TCM");
// }

// function bye(){
//     console.log("Bye Bye TCM");
// }

// greeting(welcome, bye);

// function calcu(a, b, callback) {
//     let data = a + b;

//     callback(data)
// }

// calcu(10, 20, function(x){
//     console.log("Data Output :", x );
// })

// function calcu(a, b, callback) {
//     let data = a + b;

//     callback(data)
// }

// calcu(10, 20, function(recievData){
//     console.log("Result : ", recievData)
// })

// console.log("Product Creating...");

// setTimeout(() => {
//     console.log("Product Created!")
// }, 2000);

// console.log("Loading Page");

// function getUser(callback){
//     let user = {
//         name: "Rahul",
//         age: 21
//     };

//     callback(user);
// }

// getUser(function(recievUser){
//     console.log("Hii I am ", recievUser.name);
//     console.log("and My age is ", recievUser.age);
// })


// console.log("Product Creating...");

// setTimeout(() => {
//     console.log("Product Created!")
// }, 2000);

// console.log("Loading...");

console.log("Product Creating...");

setInterval(() => {
    console.log("Product Created!")
}, 2000);

console.log("Loading Page");