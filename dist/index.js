"use strict";
console.log("hi, its me typescript");
let a = 23; // This is an implicit type declaration
let b = 23; // This is an explicit type declaration
// We cannot declare another type to these variables
let user;
user = "Muhammad Saif";
// Also like this
let user2 = "Muhammad Saif";
// The Intellisense is so powerfull it automatically detects the type and provide the related methods
let c; // This means any type (We will avoid this)
// We can give multiple types
let age; // Union types
age = 21;
age = "Twenty One";
function addNum(a, b) {
    return a + b;
}
console.log(addNum(a, b));
// Arrays
// We declare arrays like this
let arr = [1, 2, 3, 4, 5];
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [];
let arr3;
let arr4 = ["Saif", "Sarim"];
let arr5 = new Array(10);
let age2 = [21, "Twenty One"];
console.log(age2);
// We can also declare tuples
let arr6 = [1, "Saif", true];
let obj = {
    name: "Muhammad Saif",
    age: 21,
    isMarried: false,
    height: 172,
    weight: 65,
    gender: "Male",
    isMuslim: true,
};
const spark = {
    species: "Mammal",
    name: "Spark",
    type: "Dog",
    breed: "German Shepherd",
    isPet: true,
    isVaccinated: true,
    age: 2,
    canSpeak: () => {
        console.log("Bark...");
    },
};
spark.canSpeak?.();
const subNum = (a, b) => {
    if (typeof b === "undefined")
        return a;
    return a - b;
};
console.log(subNum(a, b));
const multiplyNum = (a, b = 9) => {
    return a * b;
};
const func = function printNum(...num) {
    num.forEach((e) => {
        console.log(e);
    });
};
func(3, 4, 5, 6, 7, 8, 9, 10);
const getProducts = (product) => {
    console.log(product);
};
const laptop = {
    id: 1,
    name: "dell",
    price: 45000,
    quantity: 56,
    isAvailable: true,
};
getProducts(laptop);
const errorHandler = () => {
    throw new Error();
};
const errorHandler2 = () => {
    return new Error();
};
// Classes in Typescript
class Player {
    name;
    age;
    country;
    // private id: number;
    // name: string;
    // age: number;
    // readonly country: string;
    id;
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
        this.id = String(Math.floor(Math.random() * 1000));
        // this.name = name;
        // this.age = age;
        // this.country = country;
    }
    play() {
        console.log(`Player ${this.name} with id ${this.id} is playing`);
    }
    get getAge() {
        return this.age;
    }
    set setAge(age) {
        this.age = age;
    }
}
let saif = new Player("Saif", 21, "Pak");
saif.play();
class Biscuit {
    id = String(Math.floor(Math.random() * 100));
    name;
    price = 0;
    quantity;
    isAvailable;
    constructor(name, quantity, isAvailable) {
        this.name = name;
        this.quantity = quantity;
        this.isAvailable = isAvailable;
    }
    get getPrice() {
        return this.price;
    }
    set setPrice(price) {
        this.price = price;
    }
}
let oreo = new Biscuit("Oreo", 10, true);
console.log(oreo);
oreo.setPrice = 20;
oreo.getPrice;
console.log(oreo);
const userObj = {
    name: "Saif",
    email: "muhammadsaifarain786@gmail.com",
};
const getName = () => {
    return userObj.name;
};
const getEmail = () => {
    return userObj["email"];
};
// const getData = (key: string): string => {
//   return userObj[key];
// };
// const getData = (key: "name" | "email"): string => {
//   return userObj[key];
// };
const getData = (key) => {
    return userObj[key];
};
let key = "name";
// userObj[key] -- throw error but not when const key;
userObj[key];
userObj[key];
const users = {
    saif: { age: 21 },
    sarim: { age: 20 },
    haroon: { age: 22 },
    abdullah: { age: 21 },
};
// -----------------------------------------------------
// Parameters<Type> && ReturnType<Type>
const myFunc = (a, b) => {
    return a + b;
};
// -----------------------------------------------------
// ConstructorParameters<Type> && InstanceType<Type>
class myClass {
    s;
    t;
    constructor(s, t) {
        this.s = s;
        this.t = t;
    }
}
const newObj = {
    s: 23,
    t: "hello",
};
// ------------------------------------------------------------------------
// Generics - Reusable components (Similar to Templates in C++)
const printVal = (val) => {
    return val;
};
console.log(printVal("Hello"));
console.log(printVal(123));
console.log(printVal(true));
let one = printVal("Hello");
let two = printVal(123);
let three = printVal(true);
function printUser(user) {
    console.log(user);
}
const user1 = {
    name: "Muhammad Saif",
    email: "muhammadsaifarain786@gmail.com",
    age: 21,
};
printUser(user1);
const array = [1, 2, 3];
const getUser = (t, u) => {
    return { t, u };
};
const user3 = {
    email: "email@gmail.com",
    age: 21,
};
console.log(getUser("Saif", user3));
const peoples = [
    { name: "Saif", age: 21 },
    { name: "Sarim", age: 20 },
    { name: "Abdullah", age: 21 },
    { name: "Haroon", age: 22 },
];
const filterPeople = (users, key, value) => {
    return users.filter((i) => i[key] === value);
};
const filterByName = filterPeople(peoples, "name", "Saif");
console.log(filterByName);
