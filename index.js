"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello ts");
var myStr = "Abhishek";
console.log("my str", myStr);
var myNum = 33;
console.log("my num:", myNum);
var myBool = true;
console.log("my bool:", myBool);
var result = myStr + myNum;
console.log("result:", result);
var hero;
function callHero() {
    return "Thor";
}
hero = callHero();
// ****Functions in typescript****
function addTwo(num1, num2) {
    return num1 + num2;
}
var res = addTwo(3, 4);
function loginUser(name, email, isPaid) { }
loginUser("abhi", "abhi@abc.com", true);
var userLogin = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
userLogin("abc", "abc@zyx.com");
function returnOnlyNumber(num) {
    return 8;
}
var returnOnlyString = function (myVal) {
    return "anything or empty also";
};
var heros = ["iron man", "spider man", "thor", "hulk"];
heros.map(function (hero) {
    return "All heros are ".concat(hero);
    // return 3
});
function checkFunc(errMsg) {
    console.log(errMsg);
}
function checkFunc2(errMsg) {
    throw new Error(errMsg);
}
// ****Object*****
function myObj(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
myObj({ name: "Abc", isPaid: false });
//specify the return value of object type
function createUser() {
    return {
        name: "Abhi",
        isPaid: false,
    };
}
function createUser2(user) {
    return { name: "xyz", email: "any@gmail.com", isPaid: false };
}
createUser2({ name: "xyz", email: "any@gmail.com", isPaid: false });
var myUser = {
    id: "ab12",
    name: "Abhi",
    email: "abc@dot.com",
    isActive: false,
    creditCardNo: 1234,
};
console.log(myUser);
myUser.email = "xyz@dot.com";
//********ARRAYS********* */
var myArr = [];
myArr.push("one", "two");
var price = [];
price.push(799);
var userArr = [];
userArr.push({ name: "abc", isPaid: false });
//*****OTHER WAYS OF ARRAY***** */
var myArr2 = [];
myArr2.push(4999);
var arrOfArr = [[23, 23, 11], []];
//******UNION TYPES IN TYPESCRIPT****** */
var score = 232;
score = 222;
score = "two two two";
var abhishek = {
    name: "abhishek",
    id: 1,
    username: "abc@xyz.com",
};
function getDBId(id) {
    console.log("the id is ".concat(id));
}
getDBId(3);
getDBId("22343djk");
function getDBId2(id) {
    if (typeof id === "string") {
        return id.toLowerCase();
    }
    return id + 2;
}
getDBId2(33);
getDBId2("abc111");
var arr1 = ["1", "2", "3"];
var arr2 = [1, 2, 3];
var arr3 = [1, 2, 3, "abc", "xyz"];
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = 'lower' //<-- THIS GIVE ERROR
//*******TUPLES IN TYPESCRIPT****** */
//tuples only exist in typescript, it not exists in javascript
//tuple allow us to restrict our sequence of array
var tupUser;
tupUser = ["abc", 22, false]; // here if try to put string, number, boolean at any different place it throws errors
var rgb = [255, 255, 255];
var newUser = [23, "abhi"];
newUser[0] = 33;
//initially typescript cant caught the value which are inserted by arrays methods like--> push, etc BUT currently it catches it
// newUser.push(false)
//*****ENUMS IN TYPESCRIPT****** */
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
var mySeat = SeatChoice.WINDOW;
//by default the enums sequence is start from 0 to n, but also we can modify it without any problems
var SeatChoice2;
(function (SeatChoice2) {
    SeatChoice2[SeatChoice2["AISLE"] = 10] = "AISLE";
    SeatChoice2[SeatChoice2["MIDDLE"] = 22] = "MIDDLE";
    SeatChoice2[SeatChoice2["WINDOW"] = 30] = "WINDOW";
})(SeatChoice2 || (SeatChoice2 = {}));
//we can also provide sting as their values
var SeatChoice3;
(function (SeatChoice3) {
    SeatChoice3["AISLE"] = "aisle";
    SeatChoice3[SeatChoice3["MIDDLE"] = 3] = "MIDDLE";
    SeatChoice3[SeatChoice3["WINDOW"] = 4] = "WINDOW";
})(SeatChoice3 || (SeatChoice3 = {}));
var abhi = {
    dbId: 22,
    email: "ac@axc.com",
    userId: 33,
    role: "admin",
    startTrail: function () {
        return "trail start";
    },
    getCoupon: function (name, val) {
        return 999;
    },
    githubToken: "anything",
};
//**********CLASSES IN TYPESCRIPT*********** */
var Person = /** @class */ (function () {
    function Person(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    return Person;
}());
var newPerson = new Person("Abhishek", 33, "Patna");
