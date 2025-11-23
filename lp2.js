// 1

let a = 10;
let b = 20;

let max = a > b ? a : b;
console.log("Наибольшее число:", max);

//2

let monthNumber = parseInt(prompt("Введите число от 1 до 12:"));

let months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

if (monthNumber >= 1 && monthNumber <= 12) {
  console.log("Месяц:", months[monthNumber - 1]);
} else {
  console.log("Ошибка: введите число от 1 до 12.");
}

//3

let circleArea = 78.5;
let squareArea = 100;

let circleDiameter = 2 * Math.sqrt(circleArea / Math.PI);
let squareSide = Math.sqrt(squareArea);

if (circleDiameter <= squareSide) {
  console.log("Круг поместится в квадрат.");
} else {
  console.log("Круг НЕ поместится в квадрат.");
}
