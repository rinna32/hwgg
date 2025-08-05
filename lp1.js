//ДЗ 1
// 1 

let a = 5;
let b = 3;

console.log("Сумма:", a + b);

console.log("Произведение:", a * b);

//2 

let str1 = "Привет";
let str2 = "Мир";

let totalLength = str1.length + str2.length;

console.log("Общее количество символов:", totalLength);

//3

let input = prompt("Введите трёхзначное число:");

let number = parseInt(input);

if (!isNaN(number) && number >= 100 && number <= 999) {
    let hundreds = Math.floor(number / 100);
    let tens = Math.floor((number % 100) / 10);
    let units = number % 10;

    let sum = hundreds + tens + units;

    console.log("Сумма цифр:", sum);
} else {
    console.log("Ошибка: введите корректное трёхзначное число.");
}