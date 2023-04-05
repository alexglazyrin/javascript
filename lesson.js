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

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`${i+1}${j+1}`);
    }
    console.log('');
}

