

//ex1
// let num1 = prompt('Введите переменную 1');
// let num2 = prompt('Введите переменную 2');

// alert((num1 <= 1) ? `Переменная 1 меньше или равна 1 (${num1} <= 1)` : `Переменная 1 больше 1 (${num1} >= 1`);
// alert((Number(num2) >= 3 ? 'Переменная 2 больше или равна 3' : 'Переменная 2 меньше 3'));

//ex2

// let test = true;
// (test === true) ? console.log('+++') : console.log('---');

//ex3

// let day = prompt('Введите число месяца');

// if ((day/10) > 2) {
//     alert(`День ${day} относится к 3ей декаде.`);
// }else if ((day/10) > 1){
//     alert(`День ${day} относится к 2ой декаде.`);
// }else {
//     alert(`День ${day} относится к 1ой декаде.`);
// }

//ex4

let number = prompt('Введите число');

dig4 = parseInt(number/1000);
remains = number%1000;
dig3 = parseInt(remains/100);
remains = remains%100
dig2 = parseInt(remains/10);
remains = remains%10;

alert(`Введенное число состоит из: ${dig4} тысяч ${dig3} сотен ${dig2} десятков ${remains} единиц`);

//ex5