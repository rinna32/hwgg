//1

let user = {
    name: "John"
};

user.age = parseInt(prompt("Введите ваш возраст:"));

let admin = { ...user };
admin.role = "admin";

let { name, age, role } = admin;

console.log("Имя:", name);
console.log("Возраст:", age);
console.log("Роль:", role);