//ex1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const cubing = (number) => console.log(number ** 3 + (number + 1) ** 3);

//ex2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const clearSalary = (salary) => {
    if (typeof salary === 'number') {
        console.log(`Размер заработной платы за вычетом налогов равен ${salary * 0.87} рублей.`);
    } else {
        console.log("Не верный формат ввода");
    }
}

//ex3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');
let num3 = prompt('Введите третье число');

const maxNum = (num1, num2, num3) => console.log(Math.max(num1, num2, num3));
maxNum(num1, num2, num3);

//ex4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const sum = (num1, num2) => num1 + num2;
const multip = (num1, num2) => num1 + num2;
const div = (num1, num2) => num1 / num2;
const sub = (num1, num2) => {
    let res = 0;
    if (num1 >= num2) {
        res = num1 - num2;
    } else {
        res = num2 - num1;
    }
    return res;
}

