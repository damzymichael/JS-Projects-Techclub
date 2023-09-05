//challenge 1

// data 1
// const markHeight = 1.69;
// const markWeight = 78;

// const johnHeight = 1.95;
// const johnWeight = 92;

//data 2
// const markHeight = 1.88;
// const markWeight = 95;

// const johnHeight = 1.76;
// const johnWeight = 85;
// const markBmi = markWeight / markHeight ** 2;
// const johnBmi = johnWeight / johnHeight ** 2;

// console.log("markBmi: " + markBmi);
// console.log("johnBmi: " + johnBmi);

//challenge 2
// if (markBmi > johnBmi) {
//   console.log(`Mark's BMI (${markBmi}) is higher than John's(${johnBmi})`);
// } else {
//   console.log(`John's BMI (${johnBmi}) is higher than Mark's(${markBmi})`);
// }

//challenge 3
//data 1
// const dolphinAverage = (96 + 108 + 89) / 3;
// const koalaAverage = (88 + 91 + 110) / 3;

// if (dolphinAverage > koalaAverage && dolphinAverage >= 100) {
//   console.log(`dolphin wins with a score of ${dolphinAverage}`);
// } else if (
//   dolphinAverage &&
//   koalaAverage >= 100 &&
//   dolphinAverage === koalaAverage
// ) {
//   console.log("It's a draw");
// } else if (koalaAverage > dolphinAverage && koalaAverage >= 100) {
//   console.log(`koala wins with a score of ${koalaAverage}`);
// } else {
//   console.log("No one wins");
// }
// console.log(dolphinAverage, koalaAverage)

//challenge 4
// let bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

//Part 2 challenge 1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

//test data 1
// const dolphinAvg = calcAverage(44, 23, 71);
// const koalaAvg = calcAverage(65, 54, 49);

//test data 2
// const dolphinAvg = calcAverage(85, 54, 41);
// const koalaAvg = calcAverage(23, 34, 27);

// const checkWinner = (avgDolphin, avgKoalas) => {
//   console.log(avgDolphin, avgKoalas);
//   if (avgDolphin >= avgKoalas * 2) {
//     console.log(`Dolphin wins (${avgDolphin} vs ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphin * 2) {
//     console.log(`Koalas wins (${avgKoalas} vs ${avgDolphin})`);
//   } else {
//     console.log("No one wins");
//   }
// };

// checkWinner(dolphinAvg, koalaAvg);

//Part 2 challenge 2
// function calcTip (bill) {}
// const calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const tip1 = calcTip(100)
// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(calcTip(100));
// const bills = [125, 555, 44]
// const tip1 = calcTip(bills[0])
// const tip2 = calcTip(bills[1]);
// const tip3 = calcTip(bills[2]);
// console.log(tip1, tip2, tip3)
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips)

// const calcBMI = function (info) {
//   info.BMI = info.mass / info.height ** 2;
//   return info.BMI;
// };

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBmi: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
//   calcBMI: function () {
//     return calcBMI(this);
//   },
// };
// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBmi: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
//   calcBMI: function () {
//     return calcBMI(this);
//   },
// };
// console.log(mark.calcBMI())
// console.log(john.calcBMI());
// console.log(mark.BMI)
// console.log(john.BMI);

//create a function that returns a random name from an array
// const returnRandomName = (namesArray) => {
//   const i = Math.floor(Math.random() * namesArray.length);
//   return namesArray[i];
// };
// const jsDevs = ["Michael", "Anu", "Onah", "Divine"];
// console.log(returnRandomName(jsDevs));

//Part 2 Exercise 4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

//if else
// const calcTip = (bill) => {
//   if (bill < 50 || bill > 300) {
//     return bill * 0.2;
//   } else {
//     return bill * 0.15;
//   }
// };

//tenary operator
// const calcTip = (bill) => {
//   return bill < 50 || bill > 300 ? bill * 0.2 : bill * 0.15;
// };

//implicit return
// const calcTip = (bill) => (bill < 50 || bill > 300 ? bill * 0.2 : bill * 0.15);

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   const total = bills[i] + tip;
//   totals.push(total);
// }
// console.log(bills);
// console.log(tips);
// console.log(totals);

//99 bottles challenge

`99 bottles of beer on the wall, 99 bottles of beer 
Take one down and pass it around, 98 bottles of beer on the wall.`;

let output = document.querySelector(".lyrics");
// console.log(output);
for (let i = 99; i >= 1; i--) {
  const bottle = i === 1 ? "bottle" : "bottles";

  const text = `<p>${i} ${bottle} of beer on the wall, ${i} ${bottle} of beer 
  Take one down and pass it around, ${
    i - 1 === 0 ? "no more" : i - 1
  } bottles of beer on the wall.</p>`;
  // const text = `${i} ${bottle} of beer on the wall, ${i} ${bottle} of beer
  // Take one down and pass it around, ${
  //   i - 1 === 0 ? "no more" : i - 1
  // } bottles of beer on the wall.<br/>`;

  // console.log(text)
  output.innerHTML += text;

  //Add the last line of the lyrics to the DOM

  const lastLine = `<p>No more bottles of beer on the wall, no more bottles of beer.
    Go to the store and buy some more, 99 bottles of beer on the wall.</p>`;

  if (i === 1) output.innerHTML += lastLine;
  // output.innerHTML = output.innerHTML + text;
}

