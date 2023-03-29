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

function askQuestion(answer, question) {
    const userAnswer = prompt(question);

    if (userAnswer.toLowerCase() === answer) {
        console.log('Угадал');
    } else {
        console.log('Не угадал');
    }
}

function puzzle() {
    askQuestion('елка', 'Зимой и летом одним цветом');
}
