let a = [2, 5, 7, 3, 8, 1, 4, 6, 9, 10];

// 1

let sum = a.reduce((acc, val) => acc + val, 0);
console.log("Сумма элементов массива:", sum);

// 2

let b = a.map(x => x * 2);
console.log("Исходный массив:", a);
console.log("Новый массив (удвоенные значения):", b);