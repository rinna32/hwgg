//1

let sum = 0;
for (let i = 50; i <= 100; i++) {
  sum += i;
}
console.log("Сумма чисел от 50 до 100:", sum);

//2

for (let i = 1; i <= 9; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

//3

let N = parseInt(prompt("Введите число N:"));

let sumOdd = 0;
let countOdd = 0;

for (let i = 1; i <= N; i += 2) {
  sumOdd += i;
  countOdd++;
}

if (countOdd > 0) {
  let average = sumOdd / countOdd;
  console.log(
    "Среднее арифметическое нечётных чисел от 1 до",
    N,
    "равно:",
    average,
  );
} else {
  console.log("Нет нечётных чисел в диапазоне.");
}
