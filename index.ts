console.log("Hello ts");

const myStr: string = "Abhishek";
console.log("my str", myStr);

const myNum: number = 33;
console.log("my num:", myNum);

const myBool: boolean = true;
console.log("my bool:", myBool);

const result = myStr + myNum;
console.log("result:", result);

let hero: string;

function callHero() {
  return "Thor";
}

hero = callHero();

// ****Functions in typescript****

function addTwo(num1: number, num2: number) {
  return num1 + num2;
}

let res = addTwo(3, 4);

function loginUser(name: string, email: string, isPaid: boolean) {}
loginUser("abhi", "abhi@abc.com", true);

const userLogin = (name: string, email: string, isPaid: boolean = false) => {};
userLogin("abc", "abc@zyx.com");

function returnOnlyNumber(num: number): number {
  return 8;
}

const returnOnlyString = (myVal: string): string => {
  return "anything or empty also";
};

const heros = ["iron man", "spider man", "thor", "hulk"];

heros.map((hero): string => {
  return `All heros are ${hero}`;
  // return 3
});

function checkFunc(errMsg: string): void {
  console.log(errMsg);
}

function checkFunc2(errMsg: string): never {
  throw new Error(errMsg);
}

// ****Object*****
function myObj({ name: string, isPaid: boolean }) {}

myObj({ name: "Abc", isPaid: false });

//specify the return value of object type
function createUser(): { name: string; isPaid: boolean } {
  return {
    name: "Abhi",
    isPaid: false,
  };
}

//*****TYPE ALIASES IN TYPESCRIPT******** */
//by this i can create our own type in TS
type User = {
  name: string;
  email: string;
  isPaid: boolean;
};

function createUser2(user: User): User {
  return { name: "xyz", email: "any@gmail.com", isPaid: false };
}
createUser2({ name: "xyz", email: "any@gmail.com", isPaid: false });

//*******READONLY AND OPTIONAL IN TYPESSCRIPT******** */
type User2 = {
  readonly id: string; //it make the id parameter readonly
  name: string;
  email: string;
  isActive: boolean;
  creditCardNo?: number;
};

let myUser: User2 = {
  id: "ab12",
  name: "Abhi",
  email: "abc@dot.com",
  isActive: false,
  creditCardNo: 1234,
};

console.log(myUser);

myUser.email = "xyz@dot.com";

type cardNumber = {
  myCardNumber: number;
};

type cardDate = {
  myCardDate: string;
};

//by this we can make new type using previous type 'But its not a good practice'
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

//********ARRAYS********* */
let myArr: string[] = [];
myArr.push("one", "two");

let price: number[] = [];
price.push(799);

type User3 = {
  name: string;
  isPaid: boolean;
};

let userArr: User3[] = [];
userArr.push({ name: "abc", isPaid: false });

//*****OTHER WAYS OF ARRAY***** */
let myArr2: Array<number> = [];
myArr2.push(4999);

let arrOfArr: number[][] = [[23, 23, 11], []];

//******UNION TYPES IN TYPESCRIPT****** */
let score: string | number = 232;
score = 222;
score = "two two two";

type User4 = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let abhishek: User4 | Admin = {
  name: "abhishek",
  id: 1,
  username: "abc@xyz.com",
};

function getDBId(id: number | string) {
  console.log(`the id is ${id}`);
}
getDBId(3);
getDBId("22343djk");

function getDBId2(id: number | string) {
  if (typeof id === "string") {
    return id.toLowerCase();
  }
  return id + 2;
}
getDBId2(33);
getDBId2("abc111");

const arr1: string[] = ["1", "2", "3"];
const arr2: number[] = [1, 2, 3];
const arr3: (string | number)[] = [1, 2, 3, "abc", "xyz"];

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
// seatAllotment = 'lower' //<-- THIS GIVE ERROR

//*******TUPLES IN TYPESCRIPT****** */
//tuples only exist in typescript, it not exists in javascript
//tuple allow us to restrict our sequence of array
let tupUser: [string, number, boolean];
tupUser = ["abc", 22, false]; // here if try to put string, number, boolean at any different place it throws errors

let rgb: [number, number, number] = [255, 255, 255];

type User5 = [number, string];
let newUser: User5 = [23, "abhi"];
newUser[0] = 33;

//initially typescript cant caught the value which are inserted by arrays methods like--> push, etc BUT currently it catches it
// newUser.push(false)

//*****ENUMS IN TYPESCRIPT****** */
enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
}

const mySeat = SeatChoice.WINDOW;

//by default the enums sequence is start from 0 to n, but also we can modify it without any problems
enum SeatChoice2 {
  AISLE = 10,
  MIDDLE = 22,
  WINDOW = 30,
}

//we can also provide sting as their values
enum SeatChoice3 {
  AISLE = "aisle",
  MIDDLE = 3,
  WINDOW,
}

//*****INTERFACES IN TYPESCRIPT****** */
interface User6 {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: ()=> string
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

const abhi: Admin2 = {
  dbId: 22,
  email: "ac@axc.com",
  userId: 33,
  role: "admin",
  startTrail: () => {
    return "trail start";
  },
  getCoupon: (name: "abhi999", val: 33) => {
    return 999;
  },
  githubToken: "anything",
};

//we can add some other property in already existing interface and it is known as "REOPENING OF AN INTERFACE"
interface User6 {
  githubToken: string;
}

//we can also inherit all the properties of an interface with below syntax
interface Admin2 extends User6 {
  role: "admin" | "user" | "visitor";
}

//**********CLASSES IN TYPESCRIPT*********** */
class Person {
  name: string;
  age: number;
  city: string;
  constructor(name: string, age: number, city: string) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}

const newPerson = new Person("Abhishek", 33, "Patna");

//public , private
class Person2 {
  constructor(public name: string, public age: number, private mobNum: string) {
    this.name = name;
    this.age = age;
    this.mobNum = mobNum;
  }
}

const newPerson2 = new Person2("Shrenika", 22, "1234687897");
newPerson2.name = "Shre";

//getter and setter in TS
class Person3 {
  // private _courseCount = 1;

  //protected keyword makes the property of the class is accessible withing the class and the sub(inheritance) class of that class
  protected _courseCount = 1;

  readonly city: string = "Indore";
  constructor(public email: string, public name: string) {}
  //getter method
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  //we can able to access the private property of class using get (getter)
  get courseCount(): number {
    return this._courseCount;
  }

  //setter not accept return type
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("course should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

const newPerson3 = new Person3("abc@xyz.com", "Abhishek");

//protected key word in typescript
class subClassOfPerson extends Person3 {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 3;
  }
}

//***Why INTERFACE is more important in typescript***** */--> Because if provides a set of protocols to work
interface TakePhoto {
  cameraMode: string;
  filter: string;
  burstMode: number;
}

//now here we properly follow the protocol to take the photo
class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstMode: number
  ) {}
}

interface Story {
  createStory(): void;
}

class YouTube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstMode: number,
    //here we can add more property and not less than the TakePhoto interface
    public shorts: string
  ) {}
  createStory(): void {}
}

//*******ABSTRACT CLASS IN TYPESCRIPT******** */
//when we make abstract class then no new object or new instance can created from this abstracted class
//we can only create new object or new instance from abstract class for that class which inheriting that abstract class
abstract class TakePhoto2 {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getSepia(): void;
  getReel(): number {
    return 15;
  }
}

class Instagram2 extends TakePhoto2 {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
  getSepia(): void {
    console.log("sepia");
  }
}

const hc = new Instagram2("take photo", "take photo 2", 5);
hc.getReel();

//********GENERICS IN TYPESCRIPT************ */
const score2: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}
//when call identityThree with any data type,, this function accepts that and also return same datatype by default
identityThree("myVal");

//short way to write generics,, work same as identityThree
function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({ brand: "coca", type: 30 });

//********GENERICS IN ARRAY AND ARROW FUNCTION********* */
function getSearchProducts<T>(products: T[]): T {
  //some complex operations
  const myIndex = 3;
  return products[myIndex];
}

const getSearchProductsArrowFunc = <T>(products: T[]): T => {
  //some complex operations
  const myIndex = 4;
  return products[myIndex];
};

//*********GENERICS IN CLASSES*********** */
interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction(3, { connection: "conn", username: "user", password: "p" });

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];
  addToCart(product: T) {
    this.cart.push(product);
  }
}

//********TYPE NARROWING IN TYPESCRIPT********** */
function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toString();
  }
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("please provide id");
    return;
  }
  id?.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}


export {};
