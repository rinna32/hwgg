//1

function isDate(str) {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;
    return dateRegex.test(str);
}

//2

function isEmail(str) {
    const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(str);
}

//3

function isPhoneNumber(str) {
    const phoneRegex = /^(\+7|8)?\s?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
    return phoneRegex.test(str);
}

const input = prompt("Введите строку для проверки:");

if (isDate(input)) {
    console.log("Это дата.");
} else if (isEmail(input)) {
    console.log("Это email.");
} else if (isPhoneNumber(input)) {
    console.log("Это номер телефона.");
} else {
    console.log("Строка не является датой, email или номером телефона.");
}
