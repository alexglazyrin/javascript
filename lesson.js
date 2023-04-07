// function helloName(name) {
//     console.log(name);
// }

// helloName('Alex');

// let count = 5;

// function counter() {
//     return count++;
// }
// console.log(count);

// let age = Number(prompt('How old are you?'));

// function upAge() {
//     return age + 5;
// }

// upAge();

// const lvlUpAge = (paras) => age + 5;

// console.log(`Через 5 лет вам будет ${lvlUpAge()}`);

// function hello() {
//     console.log('Hello function');
// }

// hello();

// const sum = (a, b) => {
//     return a + b;
// }

// console.log(sum(2, 5));

// const salary = (money) => {
//     money = money * 0.87;
//     return money * 0.75;
// }

// const userMoney = Number(prompt('Сколько ты зарабатываешь?'));

// console.log(salary(userMoney));

// let moneyMonth = salary(userMoney);

// console.log(`На еду желательно потратить не более ${moneyMonth * 0.3} рублей`);

// console.log(`Для расходом можно использовать ${salary(userMoney)} рублей`);

// function sayHello(params) {
//     alert('Hello');
// }

// sayHello();


// const hello2 = (params) => {
//     alert('Hello2');
// }

// hello2();

// const userAnswer = prompt('Зимой и летом одним цветом');

// if (userAnswer === 'елка') {
//     console.log('Угадал');
// } else {
//     console.log('Не угадал');
// }

// function askQuestion(answer, question) {
//     const userAnswer = prompt(question);

//     if (userAnswer.toLowerCase() === answer) {
//         console.log('Угадал');
//     } else {
//         console.log('Не угадал');
//     }
// }

// function puzzle() {
//     askQuestion('елка', 'Зимой и летом одним цветом');
// }

//Workshop3

// function userInfo(name, surname, age) {
//     name = getUserName();
//     surname = getUserSurname();
//     age = getUserAge();
//     console.log(`Привет, ${surname} ${name} с возрастом ${age} лет!`);
// }

// function getUserName() {
//     const name = prompt('Введите имя');
//     return name;
// }
// function getUserSurname() {
//     const surname = prompt('Введите фамилию');
//     return surname;
// }
// function getUserAge() {
//     const age = prompt('Введите возраст');
//     return age;
// }

// // function squadNumber(number) {
// //     console.log(number**2);
// // }

// const squadNumber = number => console.log(number ** 2);

// function getNumberForSquad() {
//     squadNumber(prompt('Введите число для возведения его в квадрат'));
// }

// function getSomeNumber(number) {
//     console.log((number >= 0) ? '+++' : '---');
// }

// function pOrNumber() {
//     getSomeNumber(prompt('Введите любое число'));
// }

// //ex2
// //ex2.1

// const sumThree = (num1, num2, num3) => console.log(num1 + num2 + num3);

// function askSumThree() {
//     sumThree(2, 3, 4);
// }

// //ex2.2

// function ex2f2() {
//     let param1 = '1';
//     let param2 = 2;
//     let param3 = '3';
//     param1 = convertToNumber(param1);
//     param2 = convertToNumber(param2);
//     param3 = convertToNumber(param3);
//     sumParam(param1, param2, param3);
// }

// const convertToNumber = (number) => parseInt(number);

// const sumParam = (param1, param2, param3) => console.log(param1 + param2 + param3);

// //ex3
// //ex3.1

// const sqrtFunc = (number) => Math.sqrt(number);
// const num1 = sqrtFunc(3);
// const num2 = sqrtFunc(4);
// const sumFunc = (num1, num2) => console.log(num1 + num2);

// //ex3.2

// let num11 = 3;
// let num22 = 4;
// const minNumber = (num11, num22) => Math.min(num11, num22);
// console.log(minNumber(num11, num22));

// const type = param => {
//     switch (typeof param) {
//         case 'string':
//             console.log('String');
//             break;
//         case 'number':
//             console.log('Number');
//             break;
//         default:
//             console.log('H Z');
//             break;
//     }
// }

// const dayOfWeek = (number) => {
//     switch (number) {
//         case 1:
//             console.log('Monday');
//             break;
//         case 2:
//             console.log('Thuesday');
//             break;
//         case 3:
//             console.log('Wednesday');
//             break;
//         default:
//             console.log('Wrong answear');
//             break;
//     }
// }

// for (let i = 0; i < 3; i++) {
//     console.log('Hello for');
// }

// for (let j = 0; j <= 2; j++) {
//     console.log(j);
// }
// const arr = [1, 2, 'hello', 4, 5, 9];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr.length);
// console.log(arr.length);

// const user = [];

// user.push(prompt('Enter your name'));
// user.push(Number(prompt('Enter your age')));

// console.log(user);

// const numbers = [2, 3, 19, 15];

// // console.log(numbers);
// alert(`Запомни цифры ${numbers}`);
// // console.log(numbers[numbers.length - 1]);
// console.log(numbers.pop());
// console.log(numbers);

// const word = 'example';
// const arrWord = word.split('');
// // console.log(word.split(''));
// // console.log(arrWord.pop());
// const upWord = arrWord.pop();
// // console.log(upWord.toLocaleUpperCase());
// arrWord.push(upWord.toLocaleUpperCase());
// console.log(arrWord.join(''));

//L8
//1.1

// const arr = [1,2,3];
// for (let i = 0; i < arr.length; i++) {
// console.log(a[i]);
// }

//1.2

// const arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr.length);

//1.3

// const arr = ['a', 'b', 'c'];
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = i + 1;
// }
// console.log(arr);

//2.1

// const arr = [1,2,3];
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     arr[i]+=2;
// }
// console.log(arr);

//2.2

// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';

// console.log(arr);
// console.log(arr.length);

//2.3

// const arr = [1, 2, 3];
// arr.push(4, 5);
// console.log(arr);

//2.4

// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr.splice(3, 2);
// console.log(arr);

//3.1

// for (let i = 11; i <= 33; i++) {
//     console.log(i);
// }

//3.2

// for (let i = 1; i <= 99; i++) {
//     if(i % 2 != 0){
//         console.log(i);
//     }
// }

//3.3

// for (let i = 0; i > 0; i--) {
//     console.log(i);
// }

//3.4

// let num = 3;
// let count = 0;
// while (num <= 1000) {
//     num = num * 3;
//     count++;
// }
// console.log(num, count);

//3.5

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(`${i+1}${j+1}`);
//     }
//     console.log('');
// }

// const week = {
//     1: 'Monday',
//     2: 'Thuesday',
//     3: 'Wednesday',
//     4: 'Thuersday',
//     5: 'Friday',
//     6: 'Saturday',
//     7: 'Sunday'
// }
//  console.log(week[2]);

//  const user = {
//     name: 'Alex',
//     surname: 'Glazyrin',
//     age: 35
//  }

//  console.log(`${user.surname} - ${user.name} - ${user.age}`);

// //  user.secName = prompt(`${user.name} ${user.surname}, Введите ваше отчество`);
//  console.log(user);

// delete user.surname;
// console.log(user);

// const product = {
//     id: '123ar1',
//     name: 'book',
//     discription: 'cook book',
//     price: 15
// }

// console.log(product.price * .85);

// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1,2,3,4,5,6,7];

// const arrRes = {};

// for (let i = 0; i < arr1.length; i++) {
//     arrRes[arr1[i]] = arr2[i];    
// }

// console.log(arrRes);

// const obj = {x: 1, y: 2, z: 3};

// for (const key in obj) {
//     obj[key] = obj[key] ** 2;
// }

// console.log(obj);

// const obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }

// let sum = 0;
// for (const key in obj) {
//     console.log(obj[key]);
//     for (const item in obj[key]) {
//         // console.log(obj[key][item]);
//         sum += obj[key][item];
//     }
// }
// console.log(sum);

// const car = {
//     make: "Audi",
//     model: "A5",
//     year: 2023,
//     color: "red",
//     passengers: 2,
//     power: 249
// };

// console.log(car.model);
// car.power = 350;
// console.log(car);

// car.odometer = 100;
// console.log(car);

// delete car.odometer;

// const car = {
//     make: "Audi",
//     model: "A5",
//     year: 2023,
//     color: "red",
//     passengers: 2,
//     power: 249,
//     odometer: 0,
//     engineIsStarted: false,
//     startEngine: function () {
//         this.engineIsStarted = true;
//     },
//     stopEngine: function () {
//         this.engineIsStarted = false;
//     },
//     haveRoadTrip: function (distance) {
//         if (this.engineIsStarted) {
//             this.odometer += distance;
//         } else {
//             alert("Сначала запустите двигатель!");
//         }
//     }
// };

// car.startEngine();
// car.haveRoadTrip(100);
// console.log(car.odometer);
// car.haveRoadTrip(200);
// console.log(car.odometer);
// car.stopEngine();
// car.haveRoadTrip(200);

// const car = {
//     make: "Audi",
//     model: "A5",
//     year: 2023,
//     color: "red",
//     passengers: 2,
//     power: 249,
//     odometer: 0,
// };
// console.log('Все ключи объекта car');
// for (const key in car) {
//     console.log(key);
// }
// console.log('Все значения объекта car');
// for (const key in car) {
//     console.log(car[key]);
// }

// const group1 = {
//     "Ivanov": {
//         practicePlace: "ldu-1",
//         practiceTime: 56
//     },
//     "Petrov": {
//         practicePlace: "kamaz",
//         practiceTime: 120
//     },
//     "Sidorov": {
//         practicePlace: "ldu-1",
//         practiceTime: 148
//     },
//     "Belkin": {
//         practicePlace: "GosDZU",
//         practiceTime: 20
//     },
//     "Avdeev": {
//         practicePlace: "LPK",
//         practiceTime: 160
//     }
// }

// const group1Students = Object.keys(group1);
// console.log(group1Students); // ["Ivanov", "Petrov", "Sidorov", "Belkin", "Avdeev"];

// const car = {
//     make: "Audi", //asas
//     model: "A5",
//     year: 2023,
//     color: "red",
//     passengers: 2,
//     power: 249,
//     odometer: 0,
// };
// console.log(Object.values(car)); // ['Audi', 'A5', 2023, 'red', 2, 249, 0];

// const car = {
//     make: "Audi",
//     model: "A5",
//     year: 2023,
//     color: "red",
//     passengers: 2,
//     power: 249,
//     odometer: 0,
// };
// console.log(Object.entries(car));

const studentsPracticeTime = [
    {
        firstName: "Ivanov",
        practiceTime: 56
    },
    {
        firstName: "Petrov",
        practiceTime: 120
    },
    {
        firstName: "Sidorov",
        practiceTime: 148
    },
    {
        firstName: "Belkin",
        practiceTime: 20
    },
    {
        firstName: "Avdeev",
        practiceTime: 160
    }
];

const dataForTable = studentsPracticeTime.map((student) => {
    if (student.practiceTime < 120) {
        return { // Мы возвращаем новый объект, более удобный для вывода.
            Student: student.firstName,
            Practice: "Not passed"
        };
    } else {
        return {
            Student: student.firstName,
            Practice: "Passed"
        };
    }
});

console.table(dataForTable);

const studentsPassedPractice = studentsPracticeTime.filter((student) => {
    if (student.practiceTime < 120) return false
    return true
});
console.log(studentsPassedPractice);