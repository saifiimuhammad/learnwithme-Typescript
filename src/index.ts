// Basic Types and Type Declarations
console.log("hi, its me typescript");

let a = 23; // IMPLICIT TYPE: TypeScript infers this as a number automatically
let b: number = 23; // EXPLICIT TYPE: We manually declare this as a number

// NOTE: Once a variable is declared with a type, it cannot be reassigned to a different type

// String Type
let user: string;
user = "Muhammad Saif"; // Valid assignment

// Alternative syntax for type declaration
let user2 = <string>"Muhammad Saif"; // Angle bracket syntax for type assertion

// NOTE: TypeScript's intellisense provides autocompletion based on the declared type

// Any Type
let c: any; // WARNING: 'any' type bypasses type checking - avoid when possible

// Union Types
let age: string | number; // UNION TYPE: Variable can be either string OR number
age = 21; // Valid
age = "Twenty One"; // Also valid

// Function with Type Annotations
function addNum(a: number, b: number): number {
  return a + b; // Return type is also annotated
}
console.log(addNum(a, b));

// Type Aliases - Creating custom types
type Username = string; // TYPE ALIAS: Creating a custom type name for string

// ARRAYS IN TYPESCRIPT
// Various ways to declare arrays

let arr = [1, 2, 3, 4, 5]; // Type inferred as number[]
let arr1: number[] = [1, 2, 3, 4, 5]; // Explicit array type notation
let arr2: string[] = []; // Empty array of strings
let arr3: string[]; // Declaring array variable without initializing

let arr4: Array<string> = ["Saif", "Sarim"]; // Generic array type notation

let arr5: Array<number> = new Array(10); // Creating array with initial size

// Array with union types
let age2: Array<number | string> = [21, "Twenty One"];
console.log(age2);

// TUPLES - Fixed-length arrays with specific types at specific positions
let arr6: [number, string, boolean] = [1, "Saif", true];

// OBJECTS
// Object type definition using type alias
type Human = {
  name: string;
  age: number;
  isMarried: boolean;
  height?: number; // OPTIONAL PROPERTY: The ? makes this property optional
  weight?: number; // OPTIONAL PROPERTY
  gender?: "Male" | "Female"; // UNION TYPE with string literals
  isMuslim: boolean;
};

// Object creation based on type
let obj: Human = {
  name: "Muhammad Saif",
  age: 21,
  isMarried: false,
  height: 172,
  weight: 65,
  gender: "Male",
  isMuslim: true,
};

// INTERFACES - Similar to type aliases but can be extended
// Useful for defining class structures
interface Animal {
  species: "Mammal" | "Bird" | "Fish" | "Reptile" | "Amphibian"; // Union of string literals
  name?: string;
  type: string;
  gender?: "Male" | "Female";
  age: number;
}

// Extended interface inherits all properties from parent
interface Dog extends Animal {
  breed: string;
  isPet: boolean;
  isVaccinated: boolean;
  canSpeak?: () => void; // Optional method
}

// Object creation based on interface
const spark: Dog = {
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

spark.canSpeak?.(); // OPTIONAL CHAINING: Safe access to possibly undefined method

// FUNCTIONS
// Function type definition
type Substract = (a: number, b?: number) => number;

// Function implementation with optional parameter
const subNum: Substract = (a, b) => {
  if (typeof b === "undefined") return a; // Type guard for optional parameter
  return a - b;
};

console.log(subNum(a, b));

// Function with default parameter
const multiplyNum = (a: number, b: number = 9): number => {
  return a * b;
};

// Function type with rest parameters
type funcType = (...num: number[]) => void;

// Function implementation with rest parameters
const func: funcType = function printNum(...num) {
  num.forEach((e) => {
    console.log(e);
  });
};

func(3, 4, 5, 6, 7, 8, 9, 10);

// Object type with readonly property
type product = {
  readonly id: number; // READONLY: Cannot be modified after initialization
  name: string;
  price?: number;
  quantity: number;
  isAvailable: boolean;
};

// Function type that takes a product object
type printFunc = (product: product) => void;

const getProducts: printFunc = (product) => {
  console.log(product);
};

const laptop: product = {
  id: 1,
  name: "dell",
  price: 45000,
  quantity: 56,
  isAvailable: true,
};

getProducts(laptop);

// NEVER TYPE - for functions that never return
const errorHandler = (): never => {
  throw new Error(); // This function never returns normally
};

// Not a never type - returns an Error object
const errorHandler2 = () => {
  return new Error();
};

// CLASSES in TypeScript
class Player {
  // Properties can be declared in the constructor with access modifiers
  readonly id: string; // Readonly property

  constructor(
    public name: string, // Public property declaration in constructor
    public age: number, // Public property declaration in constructor
    readonly country: string // Readonly property declaration in constructor
  ) {
    this.id = String(Math.floor(Math.random() * 1000));
    // No need to manually assign name, age, country since they're declared in constructor
  }

  // Class method
  play() {
    console.log(`Player ${this.name} with id ${this.id} is playing`);
  }

  // Getter method
  get getAge(): number {
    return this.age;
  }

  // Setter method
  set setAge(age: number) {
    this.age = age;
  }
}

let saif = new Player("Saif", 21, "Pak");
saif.play();

// IMPLEMENTING INTERFACES
interface Product {
  id: string;
  name: string;
  price: number;
  discount?: number;
  quantity: number;
  isAvailable: boolean;
}

// Class implementing interface must have all required properties
class Biscuit implements Product {
  readonly id = String(Math.floor(Math.random() * 100));
  name: string;
  price: number = 0;
  quantity: number;
  isAvailable: boolean;

  constructor(name: string, quantity: number, isAvailable: boolean) {
    this.name = name;
    this.quantity = quantity;
    this.isAvailable = isAvailable;
  }

  // Getter for price
  get getPrice(): number {
    return this.price;
  }

  // Setter for price
  set setPrice(price: number) {
    this.price = price;
  }
}

let oreo = new Biscuit("Oreo", 10, true);
console.log(oreo);
oreo.setPrice = 20; // Using setter
oreo.getPrice; // Using getter
console.log(oreo);

// TYPE ASSERTIONS (Commented out as they reference DOM elements)
// const btn = document.getElementById("btn") as HTMLElement;
// const btn2 = <HTMLElement>document.getElementById("btn");
// const btn3 = document.getElementById("btn")!; // Non-null assertion operator

// KEYOF OPERATOR AND INDEXED ACCESS
interface Person {
  name: string;
  email: string;
}

const userObj: Person = {
  name: "Saif",
  email: "muhammadsaifarain786@gmail.com",
};

// Accessing properties directly
const getName = (): string => {
  return userObj.name;
};

// Accessing properties using bracket notation
const getEmail = (): string => {
  return userObj["email"];
};

// Using keyof to restrict key parameter to only valid keys of Person
const getData = (key: keyof Person): string => {
  return userObj[key];
};

let key = "name";

// Type assertion to use dynamic key
userObj[key as keyof Person];

// Alternative syntax for type assertion
userObj[key as keyof typeof userObj];

// UTILITY TYPES
// Available utility types (commented out examples):
// Partial<Type>
// Required<Type>
// Readonly<Type>
// Record<Keys, Type>
// Pick<Type, Keys>
// Omit<Type, Keys>
// Exclude<Type, ExcludedUnion>
// Extract<Type, Union>
// NonNullable<Type>
// Parameters<Type>
// ConstructorParameters<Type>
// ReturnType<Type>
// InstanceType<Type>

// RECORD UTILITY TYPE
type User = {
  name: string;
  email: string;
};

// Creating a type with specific keys
type User2 = Record<"name" | "email", string>;

type UserInfo = {
  age: number;
};

// Using string literal types as keys
type UserName = "saif" | "sarim" | "haroon" | "abdullah";

// Record creates an object type with specific keys and value types
const users: Record<UserName, UserInfo> = {
  saif: { age: 21 },
  sarim: { age: 20 },
  haroon: { age: 22 },
  abdullah: { age: 21 },
};

// PICK AND OMIT UTILITY TYPES
interface OrderInfo {
  readonly id: string;
  user: string;
  city: string;
  state: string;
  country: string;
  status: boolean;
}

// Pick selects specific properties from a type
type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">;

// Omit removes specific properties from a type
type CityInfo = Omit<ShippingInfo, "country">;

// EXCLUDE AND EXTRACT UTILITY TYPES
type Friends = "Saif" | "Sarim" | "Abdullah" | "Asim Munir";

// Exclude removes types from a union
type NewFriends = Exclude<Friends, "Asim Munir">;

// Extract keeps only specified types from a union
type FakeFriend = Extract<Friends, "Asim Munir">;

// NONNULLABLE UTILITY TYPE
type Types = string | number | boolean | null | undefined;

// Removes null and undefined from union type
type withoutNull = NonNullable<Types>;

// PARAMETERS AND RETURNTYPE UTILITY TYPES
const myFunc = (a: number, b: number): number => {
  return a + b;
};

// Gets the parameter types as a tuple
type paramsOfFunc = Parameters<typeof myFunc>;

// Gets the return type
type returnOfFunc = ReturnType<typeof myFunc>;

// CONSTRUCTORPARAMETERS AND INSTANCETYPE UTILITY TYPES
class myClass {
  constructor(public s: number, public t: string) {}
}

// Gets constructor parameter types as a tuple
type paramsOfClass = ConstructorParameters<typeof myClass>;

// Gets the instance type of a class
type instanceOfClass = InstanceType<typeof myClass>;

const newObj: instanceOfClass = {
  s: 23,
  t: "hello",
};

// GENERICS - For creating reusable components
// Generic function
const printVal = <T>(val: T): T => {
  return val;
};

// Using generics with different types
console.log(printVal<string>("Hello"));
console.log(printVal<number>(123));
console.log(printVal<boolean>(true));

// TypeScript can infer the type
let one = printVal("Hello"); // Type inferred as string
let two = printVal(123); // Type inferred as number
let three = printVal(true); // Type inferred as boolean

// Another generic function
function printUser<T>(user: T) {
  console.log(user);
}

type UserSchema = {
  name: string;
  email: string;
  age: number;
};

const user1: UserSchema = {
  name: "Muhammad Saif",
  email: "muhammadsaifarain786@gmail.com",
  age: 21,
};

printUser<UserSchema>(user1);

// Using built-in generic type
const array: Array<number> = [1, 2, 3];

// Generic with constraints
type Person2 = {
  email: string;
  age: number;
};

// Function with multiple generic types and constraints
const getUser = <T, U extends Person2>(t: T, u: U): { t: T; u: U } => {
  return { t, u };
};

const user3 = {
  email: "email@gmail.com",
  age: 21,
};

console.log(getUser<string, Person2>("Saif", user3));

// PRACTICAL GENERIC EXAMPLE - Filtering an array
type People = {
  name: string;
  age: number;
};

const peoples: People[] = [
  { name: "Saif", age: 21 },
  { name: "Sarim", age: 20 },
  { name: "Abdullah", age: 21 },
  { name: "Haroon", age: 22 },
];

// Advanced generic function using keyof
// T is the type of objects, K is the key to filter by
const filterPeople = <T, K extends keyof T>(
  users: T[],
  key: K,
  value: T[K]
): T[] => {
  return users.filter((i) => i[key] === value);
};

// Filter people by name
const filterByName = filterPeople(peoples, "name", "Saif");
console.log(filterByName);
