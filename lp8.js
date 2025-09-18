//1

function getDayOfWeek(dateStr) {
    const [day, month, year] = dateStr.split('.').map(Number);
    const date = new Date(year, month - 1, day);
    if (isNaN(date)) {
        return "Некорректная дата";
    }

    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    return days[date.getDay()];
}

const inputDate = prompt("Введите дату в формате ДД.ММ.ГГГГ:");
console.log("День недели:", getDayOfWeek(inputDate));

//2

function minutesSinceStartOfDay() {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diffMs = now - startOfDay;
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    return diffMinutes;
}

console.log("Минут прошло с начала сегодняшнего дня:", minutesSinceStartOfDay());

//3

function parseDate(dateStr) {
    const [day, month, year] = dateStr.split('.').map(Number);
    return new Date(year, month - 1, day);
}

function youngerUser(birthDate1, birthDate2) {
    const date1 = parseDate(birthDate1);
    const date2 = parseDate(birthDate2);

    if (isNaN(date1) || isNaN(date2)) {
        return "Одна или обе даты некорректны";
    }

    if (date1 > date2) return "Первый пользователь моложе";
    if (date2 > date1) return "Второй пользователь моложе";
    return "Пользователи одного возраста";
}

const birth1 = prompt("Введите дату рождения первого пользователя (ДД.ММ.ГГГГ):");
const birth2 = prompt("Введите дату рождения второго пользователя (ДД.ММ.ГГГГ):");

console.log(youngerUser(birth1, birth2));

