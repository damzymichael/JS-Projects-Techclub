// Type conversion and cocercion

//Conversion
// let numberString = '12'
// const name ='Michael'
// console.log(numberString)
// console.log(Number(numberString))
// console.log(typeof Number(name));
// const age = 12
// console.log(String(age))
// console.log(typeof Boolean(age))
// console.log(typeof String(true))

//Coercion
// let test = 12 + "12";
// test = "12" + 12;
// test = 6 + 5 + "13";
// test = "15" - "5" - "1";
// test = "15" * "2";
// test = "12" / "3";
// console.log(test);

// Truthy and falsy values
// Falsy values -> undefined, null, 0, '', NaN
// let grade;
// console.log(Boolean(grade));
// let name = "";
// if (name) {
//   console.log("I have a name");
// }
// grade = 0;
// if (grade) console.log("I gave a grade");

// const isDoing = prompt('How are you?')
// if (isDoing === 'Fine'){
//   console.log("That's great")
// }else{
//   console.log('You go dey alright')
// }

// Equality operators == amd ===
// const $number = 12;
// const $string = "12";
// const isSame = $number == $string
// if ($number == $string) {
//   console.log("Wow");
// }

//switch statements
// let day;
// const mike;
// day = "monday";
// switch (day) {
//   case "monday":
//     console.log("work day");
//     break;
//   case "tuesday":
//     console.log("another work day");
//   case "wednesday":
//     console.log("third work day");
//     break;
//   default:
//     console.log("invalid day");
// }

// And operator-> &&
//OR operator-> ||
//NOt operator-> !

// const isGay = "no";
// let number = 23;
// if (!isGay) console.log("why are you gay");
// if(!number) console.log('number')

// if (number > 20 && isGay === "no") {
//   console.log("HI");
// }

// if (number > 20 || isGay === "yes") {
//   console.log("hey");
// }
// let canDrinkBeer;
// const age = Number(prompt("How old are you"));
// if (age >= 18) {
//   canDrinkBeer = true;
// } else {
//   canDrinkBeer = false;
// }

//  age >= 18 ? "I can drink beer" : "I cant drink beer";
// console.log(canDrinkBeer);

// console.log(`${age >= 18 ? "I can drink beer" : "I cant drink beer"}`);

// functions
// function logger(name, age) {
//   console.log(`my name is ${name} and I'm ${age} years old`);
// }

//calling, running or invoking a function
// logger("Michael", 27);

// function addNumber(num1, num2 = 20) {
//   console.log(num1 + num2);
// }

// addNumber(20, 25);
// console.log(addNumber(20, 25));

// functions with return statment
// function aboutMe(name, age = 19) {
//   let details = `my name is ${name} and I'm ${age} years old`;
//   return details;
// }
// console.log(aboutMe("Michael", 27))

// const myDetails = aboutMe("Michael", 27);
// console.log(myDetails);

// function aboutMe1() {
//   return 27;
// }
// console.log(aboutMe1())

// const twentyThree = Number('23')
// console.log(twentyThree)

// function checkEligibilty(age) {
//   if (age < 18 && age !== 17) {
//     console.log("first step");
//     return "you cant drink beer";
//   } else if (age === 17) {
//     console.log("second step");
//     return "you're getting close, wait one year";
//   } else if (age > 60) {
//     console.log("third step");
//     return "c'mon, you're too old";
//   }
//   return 2 + 3;
// }

// function check(age) {
//   const eligibility = age < 18 ? "you cant drink beer" : "you can drink beer";
//   return eligibility;
// }
// console.log(check(20));

// const result = checkEligibilty(17)
// console.log(result)

// function declaration

//function expression
// const addNumber = function (num1, num2) {
//   console.log(num1 + num2);
// };

//arrow functions
// const divideNumbers = (num1, num2=2) => {
//   console.log(num1/num2)
// }
// divideNumbers(12, 3)

// const divideNumbers = (num1, num2 = 2) => {
//   return num1 / num2;
// };
// console.log(divideNumbers(12, 3))

//implcit return
// const divideNumbers = (num1, num2) => num1 / num2;
// console.log(divideNumbers(12, 3));

//calling functions inside function
// const function2 = () => {
//   logger("Mike", 27);
// };
// function2()

// function cutFruitPieces(fruit){
//   return fruit * 4
// }
// const fruitProcessor = (apples, oranges) => {
//   const applePieces = cutFruitPieces(apples)
//   const orangePieces = cutFruitPieces(oranges)
//   const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange`
//   return juice
// }
// fruitProcessor(16, 12)
// console.log(fruitProcessor(2, 3))

//Arrays
// const friend1 = "Emma";
// const friend2 = "Anu";
// const friend3 = "Divine";

// const friends = [friend1, friend2, friend3];
// const friends = ["Emma", "Anu", "Divine", 2023 - 1845];
// const friends = new Array("emma", "michael", "divine")
// console.log(friends.length)

//access the last element in the array
// console.log(friends[friends.length - 1]);

//adds to the array
// friends[3] = 'dami'
// friends[friends.length - 1] = "Dami";
// console.log(friends)
// friends = [1882, 1435, 5252]

//array methods
// friends.push(12, 13)
// friends.push(true)
// friends.pop()
// const noMoreMyFriend = friends.pop();
// friends.shift() //removes the first element
// friends.unshift('Emma') //adds to he beginning of the array
// console.log(friends.indexOf('Emma'))
// console.log(friends.includes("Onah"));
// console.log(friends)

//Objects
// const michaelArray = [
//   "Michael",
//   "Olofin",
//   2023 - 1955,
//   "Developer",
//   ["Onah", "Anu"],
// ];

// const michaelArray = {
//   firstName: "Michael",
//   lastName: "Olofin",
//   age: 2023 - 1955,
//   job: "Developer",
//   friends: ["Onah", "Anu"],
// };

//Dot v bracket notation
// const michaelArray = {
//   firstName: "Michael",
//   lastName: "Olofin",
//   age: 2023 - 1955,
//   job: "Developer",
//   friends: ["Onah", "Anu"],
// };
// console.log(michaelArray)
// console.log(michaelArray.firstName);
// michaelArray.friends.push("Paul");
// console.log(michaelArray.friends);

//bracket notation
// console.log(michaelArray['firstName'])
// console.log(michaelArray['age']);

// const nameKey = "Name";
// console.log(michaelArray["first" + nameKey]);

// michaelArray.shoeSize = 55
// michaelArray['shoeSize'] = 22;
// console.log(michaelArray.shoeSize)

// const request = prompt(
//   "What do you want to know about Michael? firstName, lastName or job"
// );
// console.log(michaelArray[request]);
// if (michaelArray[request]) {
//   console.log(michaelArray[request]);
// } else {
//   const addKey = prompt('it doesnt exist, what do you want this value to be')
//   michaelArray[request] = addKey
//   console.log(michaelArray[request])
// }

// console.log("{Michael} has {3} friends and his best friend is {first friend}");
// console.log(
//   `${michaelArray.firstName} has ${michaelArray.friends.length} friends and his best friend is ${michaelArray.friends[0]}`
// );

//Object Methods
// const firstName = 'Onah'
// const lastName = "Anu"

/*
const michael = {
  firstName: "Michael",
  lastName: "Olofin",
  birthYear: 1955,
  job: "Developer",
  friends: ["Onah", "Anu"],
  hasDriversLicense: false,

  //this wont work
  // calcAge: function (){
  //   return 2023 - birthYear
  // },

  calcAge: function () {
    //adding the age key to this object
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    console.log(
      `${this.firstName} is a ${this.calcAge()} year old ${
        this.job
      } and he has ${this.hasDriversLicense ? "a" : "no"} drivers licence`
    );
  },
};
*/

// michael.calcAge()

//Use Object method
// console.log(
//   "{Michael} is a {age} year old {job} and he has {a or no} drivers license "
// );
// michael.getSummary()
// console.log(michael.age)

//For loops
// for(let rep = 0; rep < 10; rep++){
//   console.log(rep)
// }

// const jsDevs = ["Michael", "Anu", "Onah", "Divine"];
// for(let i = 0; i < jsDevs.length; i++){
//   console.log(jsDevs[i])
// }

// const michaelArray = [
//   "Michael",
//   "Olofin",
//   2023 - 1955,
//   "Developer",
//   ["Onah", "Anu"],
// ];
// const types = [];

// for(let i = 0; i < michaelArray.length; i++){
//   console.log(michaelArray[i], typeof michaelArray[i])
// }

//create an array from another
// for (let i = 0; i < michaelArray.length; i++) {
//   console.log(michaelArray[i], typeof michaelArray[i]);
//   const toBeAdded = typeof michaelArray[i];
//   types.push(toBeAdded);
// }
// console.log(michaelArray)
// console.log(types)

// const years = [1993, 1994, 1995, 1996];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   console.log(years[i])
//   let age = 2023 - years[i]
//   ages.push(age)
// }
// console.log(ages)

//loop backwards
// for (let i = 5; i >= 0; i--) {
//   console.log(i);
// }
// for (let i = michaelArray.length - 1; i >= 0; i--) {
//   console.log(michaelArray[i]);
// }

//LOOPS INSIDE LOOP
// for (let ex = 1; ex <= 5; ex++) {
//   console.log(`Starting Exercise ${ex}`);
//   for (let rep = 1; rep <= 3; rep++) {
//     console.log(`Starting exercise ${rep} times`);
//   }
// }

//Continue
//skips in the loop
// for (let i = 0; i < michaelArray.length; i++) {
//   if (typeof michaelArray[i] === "number") continue;
//   console.log(michaelArray[i], typeof michaelArray[i]);
// }

//break
//stops the loop
// for (let i = 0; i < michaelArray.length; i++) {
//   if (typeof michaelArray[i] === "number") break;
//   console.log(michaelArray[i], typeof michaelArray[i]);
// }

//WHILE LOOPS
// let i = 0
// while(i < 4){
//   console.log(`hello ${i}`)
//   i++
// }

// let dice = Math.trunc(Math.random() * 6) + 1
// // console.log(dice)
// while(dice !== 6){
//   console.log("you rolled a", dice)
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if(dice === 6) console.log('you finally got a ' + dice)
// }

// console.log('hi');
// const calctip = bill => bill * 0.5;


