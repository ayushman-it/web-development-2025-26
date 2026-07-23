// var (Keyword) 
var name; // Declearation
var name = "Pratham"; 
var name = "Priyanshu"
name = "Chetan"; // Assignment


let num = 12830;


let num1 = BigInt(229640520397);
console.log(typeof(num1))

// console.log(name)
// let (Keyword)

let city;

city = "Bilaspur";
city = "Bhopal";
city = "Chhindwara";
city = "Seoni";

// let city = "Raipur";

// console.log(city)

// const (Keyword)
const student_id = 4565;

// const student_id = 89393;

// DATA TYPES 
// 1. Premetive 
// 1. number, 
let age = 67;

// 2. string, 
let fname = "Ayushman";


// 3. boolean
let deleteData = false;


// 4. undefined
let unknown;

// 5. null

let statement = null
// console.log(typeof(statement))

// 2. Non Premetive
// a. array
// -------------0---------1------------2----------3-------------
// let group = ["Chetan", "Pratham", "Priyanshu", "Aadarsh"]
// console.log(group[3])
// b. object


// document.write(products[0].name)
// document.write(products[1].name)
// document.write(products[2].name)
// document.write(products[3].name)
// document.write(products[4].name)
// document.write(products[5].name)
// document.write(products[6].name)
// document.write(products[7].name)
// document.write(products[8].name)
// document.write(products[9].name)
// document.write(products[10].name)

// for(let worker = 0; worker < products.length; worker++){
//     document.write(products[worker].name, "<br>")
// }

// alert("Hello TCM")

// console.log("TCM Students")

// document.write("Helllo")

// let name= prompt("Enter Your Name")

// let status = confirm("Are you want to delete this data ?")
// ___________________________________________________

//Loop

// let array = ["Apple", "Banana", "Grapes", "Orange"]

// for loop
// for(let i = 0; i < array.length; i++){
//     console.log(i, typeof(i))
// }

// for in loop
// for(let i in array){
//     console.log(i, typeof(i))
// }

// for of
// for(let i of array){
//     console.log(i)
// }
// For each loop
// array.forEach(i => console.log(i))

// In the while if we have a one false condtion in our execution then while loop will never show output
// let x = 10;
// while(x <= 5){
//     console.log(x)
//     x++;
// }


// In the while if we have a one false condtion in our execution then while loop will perform a one time only
// let i = 15;

// do{
//     console.log(i)
//     i++;
// }
// while(i <= 10)

// let num = 51;

// if(num === 51){
//     console.log("Yes it is Equal")
// }else{
//     console.log("No it is not Equal")
// }

// let names = "Chetan";

// if(names == "Ayushman"){
//     console.log("Yes it is ayushman")
// }else if(names == "Pratham"){
//     console.log("Yes it is Pratham")
// }else if(names == "Priyanshu"){
//     console.log("Yes it is Priyanshu")
// }
// else{
//     console.log("There is no user found...:(")
// }

// DOM - document object modal


// Access HTML elements 
// ____________________________
// console.log(document.getElementsByTagName('h1')[1])
// console.log(document.getElementsByClassName("head")[3])
// console.log(document.getElementById('head'))
// console.log(document.querySelector('h1'))
// console.log(document.querySelectorAll('h1')[3])

// Append HTML Data or element 
// InnerText (text add)
// InnerHTML (HTML add)
// document.getElementsByTagName('h2')[0].innerHTML = "<span>Ayushman</span>";
// document.getElementsByTagName('h2')[0].style.color = "red";
// document.getElementsByTagName('h2')[0].style.backgroundColor = "lightpink";
// document.getElementsByTagName('h2')[0].style.fontSize = " 34px";


let body = document.querySelector('body');

// let head = document.createElement('h1');
// body.appendChild(head);

// head.innerText = "Hii I am come from JS Code";
// head.setAttribute("class", "fs-5")
// head.classList.add("text-primary")

// let img = document.createElement('img');
// body.appendChild(img)
// img.setAttribute('src', 'https://img.magnific.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?semt=ais_hybrid&w=740&q=80');
// img.setAttribute('width', "300")

// products
//  id: 14,
//         name: "Mobile Charger",
//         category: "Electronics",
//         price: 899,
//         stock: 45,
//         brand: "Samsung",
//         rating: 4.2,
//         discount: 12,
//         image: "charger.jpg"



const products = [
    {
        id: 1,
        name: "Wireless Mouse",
        category: "Electronics",
        price: 799,
        stock: 25,
        brand: "Logitech",
        rating: 4.5,
        discount: 10,
        image: "mouse.jpg"
    },
    {
        id: 2,
        name: "Bluetooth Headphones",
        category: "Electronics",
        price: 1999,
        stock: 15,
        brand: "Boat",
        rating: 4.3,
        discount: 20,
        image: "headphones.jpg"
    },
    {
        id: 3,
        name: "Running Shoes",
        category: "Footwear",
        price: 2499,
        stock: 30,
        brand: "Nike",
        rating: 4.7,
        discount: 15,
        image: "shoes.jpg"
    },
    {
        id: 4,
        name: "Cotton T-Shirt",
        category: "Fashion",
        price: 599,
        stock: 50,
        brand: "Puma",
        rating: 4.2,
        discount: 5,
        image: "tshirt.jpg"
    },
    {
        id: 5,
        name: "Smart Watch",
        category: "Electronics",
        price: 3499,
        stock: 12,
        brand: "Noise",
        rating: 4.6,
        discount: 18,
        image: "watch.jpg"
    },
    {
        id: 6,
        name: "Laptop Backpack",
        category: "Accessories",
        price: 1299,
        stock: 20,
        brand: "Skybags",
        rating: 4.4,
        discount: 12,
        image: "bag.jpg"
    },
    {
        id: 7,
        name: "Gaming Keyboard",
        category: "Electronics",
        price: 2499,
        stock: 18,
        brand: "Redragon",
        rating: 4.7,
        discount: 15,
        image: "keyboard.jpg"
    },
    {
        id: 8,
        name: "USB Pendrive 64GB",
        category: "Electronics",
        price: 699,
        stock: 40,
        brand: "SanDisk",
        rating: 4.5,
        discount: 8,
        image: "pendrive.jpg"
    },
    {
        id: 9,
        name: "Men's Jeans",
        category: "Fashion",
        price: 1499,
        stock: 35,
        brand: "Levis",
        rating: 4.4,
        discount: 20,
        image: "jeans.jpg"
    },
    {
        id: 10,
        name: "Women's Handbag",
        category: "Fashion",
        price: 1899,
        stock: 16,
        brand: "Lavie",
        rating: 4.6,
        discount: 10,
        image: "handbag.jpg"
    },
    {
        id: 11,
        name: "Sports Water Bottle",
        category: "Home",
        price: 499,
        stock: 60,
        brand: "Milton",
        rating: 4.3,
        discount: 5,
        image: "bottle.jpg"
    },
    {
        id: 12,
        name: "Office Chair",
        category: "Furniture",
        price: 6999,
        stock: 10,
        brand: "GreenSoul",
        rating: 4.8,
        discount: 25,
        image: "chair.jpg"
    },
    {
        id: 13,
        name: "Study Table",
        category: "Furniture",
        price: 4999,
        stock: 8,
        brand: "IKEA",
        rating: 4.5,
        discount: 15,
        image: "table.jpg"
    },
    {
        id: 14,
        name: "Mobile Charger",
        category: "Electronics",
        price: 899,
        stock: 45,
        brand: "Samsung",
        rating: 4.2,
        discount: 12,
        image: "charger.jpg"
    },
    {
        id: 15,
        name: "Power Bank 20000mAh",
        category: "Electronics",
        price: 2499,
        stock: 22,
        brand: "Mi",
        rating: 4.6,
        discount: 18,
        image: "powerbank.jpg"
    },
    {
        id: 16,
        name: "LED Desk Lamp",
        category: "Home",
        price: 999,
        stock: 28,
        brand: "Philips",
        rating: 4.4,
        discount: 10,
        image: "lamp.jpg"
    },
    {
        id: 17,
        name: "Cricket Bat",
        category: "Sports",
        price: 2199,
        stock: 14,
        brand: "SS",
        rating: 4.7,
        discount: 12,
        image: "bat.jpg"
    },
    {
        id: 18,
        name: "Football",
        category: "Sports",
        price: 899,
        stock: 32,
        brand: "Nivia",
        rating: 4.3,
        discount: 7,
        image: "football.jpg"
    },
    {
        id: 19,
        name: "Pressure Cooker",
        category: "Kitchen",
        price: 1999,
        stock: 19,
        brand: "Prestige",
        rating: 4.5,
        discount: 14,
        image: "cooker.jpg"
    },
    {
        id: 20,
        name: "Mixer Grinder",
        category: "Kitchen",
        price: 3299,
        stock: 11,
        brand: "Bajaj",
        rating: 4.4,
        discount: 20,
        image: "mixer.jpg"
    }

    ,
    {
        id: 21,
        name: "Test Test",
        category: "Test",
        price: 3299,
        stock: 11,
        brand: "Bajaj",
        rating: 4.4,
        discount: 20,
        image: "mixer.jpg"
    }
];


let section = document.getElementById('section');
let container = document.createElement('div');
let row = document.createElement('div');

body.appendChild(section)
section.appendChild(container)
container.appendChild(row)

container.classList.add('container')
row.classList.add('row')
row.setAttribute('id', 'data')

let data = document.getElementById('data');

for(let i = 0; i < products.length; i++){
   
    data.innerHTML += `
        <div class='col-md-3'>
            <div class='card h-100 my-2 p-2 border-0 shadow ${products[i].stock <= 15 ? 'bg-danger-subtle text-danger': 'bg-success-subtle text-success'}'>
                <div class='card-body'>
                    <span class='badge ${products[i].stock <= 15 ? 'bg-danger text-light': 'bg-success text-light'}'>${products[i].stock}</span>
                    <span class='badge ${products[i].stock <= 15 ? 'bg-danger text-light': 'bg-success text-light'}'> ${products[i].stock <= 15 ? "Out Of Stock": "In Stock"}</span>
                    <h3>${products[i].name}</h3>
                    <p>${products[i].price}</p>
                </div>
            </div>
        </div>
    `;
}

// let sname = document.getElementById('name');


// function getValue(){

//     debugger;

// switch (sname.value) {
//     case '2026-08-12':
//         console.log("Today is 15th August")
//         break;

//     case '2026-08-13':
//         console.log("Today is 15th August")
//         break;

//     case '2026-08-15':
//         console.log("Today is 15th August")
//         break;
        
//     default:
//         console.log("Not Found")
//         break;
//     }
// }



