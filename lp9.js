//1

function isRightTriangle(a, b, c) {
    let sides = [a, b, c].sort((x, y) => x - y);
    return Math.abs(sides[0]**2 + sides[1]**2 - sides[2]**2) < 1e-10;
}

let a = parseFloat(prompt("Введите сторону a:"));
let b = parseFloat(prompt("Введите сторону b:"));
let c = parseFloat(prompt("Введите сторону c:"));

if (isRightTriangle(a, b, c)) {
    console.log("Треугольник прямоугольный");
} else {
    console.log("Треугольник НЕ прямоугольный");
}


//2

let R = parseFloat(prompt("Введите радиус R:"));

if (R >= 0) {
    let circumference = 2 * Math.PI * R;
    let area = Math.PI * R * R;

    console.log(`Длина окружности: ${circumference.toFixed(2)}`);
    console.log(`Площадь круга: ${area.toFixed(2)}`);
} else {
    console.log("Радиус не может быть отрицательным");
}
