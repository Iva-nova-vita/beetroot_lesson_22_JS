let name = prompt("Ваше имя?");
alert(`Привет, ${name}`);

let year = prompt("год вашего рождения?");
let num = Number(year);
const year19 = 2019;
let age = year19 - year;
alert("вам всего " + age + "!");

let a = prompt("длина стороны квадрата?");
alert("периметр равен " + a * 4);
let r = prompt("радиус");
let l=2 * Math.PI * r;
alert(l.toFixed(2) + "см длина окружности радиусом " + r + " см");

let s = prompt("Какое расстояние между городами?");
let t = prompt("За сколько часов вы хотите добраться?");
let v = alert("Вам нужно ехать со скоростью " + s / t + " км/ч");

let dollars = prompt("Введите сумму, дол");
const exchange = 0.9;
let euro = alert(
  "За " + dollars + " долларов вы получите " + dollars * 0.9 + " евро"
);

let flesh = prompt("Какой объем флешки, Гб?");
let files = alert(
  "На вашу флешку поместится " +
    Math.floor((flesh * 1000) / 820) +
    " файла по 820 Мб"
);

let money_all = prompt("Сколько у вас денег?");
let price_one = prompt("А сколько стоит шоколадка?");
let chocolate_quantity = Math.floor(money_all / price_one);
let money_left = money_all - price_one * chocolate_quantity;
alert(
  "За " +
    money_all +
    " грн вы сможете купить " +
    chocolate_quantity +
    " шт шоколадок по " +
    price_one +
    " грн и еще и останется " +
    money_left.toFixed(2) +
    " грн!"
);

let number_123 = prompt("Введите трехзначное число, а я выведу его наоборот");
let number_3 = number_123 % 10;
let number_2 = ((number_123 - number_3) % 100) / 10;
let number_1 = (number_123 - number_3 - ((number_123 - number_3) % 100)) / 100;
alert(`${number_3}${number_2}${number_1}`);

let deposit = prompt("Сколько денег вкладываем?");
const interest_rate = 5;
const term = 60; // 2 мес=60 дней
let interest = ((deposit * interest_rate) / 100 / 365) * term;
alert(
  "За " +
    term +
    " дней на сумму " +
    deposit +
    " грн будет начислено " +
    interest.toFixed(2) +
    " грн при процентной ставке " +
    interest_rate +
    "%"
);
