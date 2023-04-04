// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i < 11; i++) {
    if (i == 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 == 0) {
        console.log(`${i} - четное число`);
    } else {
        console.log(`${i} - нечетное число`);
    }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
const arrNew = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 4 && arr[i] != 5) {
        arrNew.push(arr[i]);
    }
}
console.log(arrNew);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const arrRand = [];
for (let i = 0; i < 5; i++) {
    arrRand.push(parseInt(Math.random() * 10));
}

function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function findMin(arr) {
    let minNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minNumber) {
            minNumber = arr[i];
        }
    }
    return minNumber;
}

console.log(`Рандомный массив: ${arrRand}`);

if (arrRand.indexOf(3) !== -1) {
    console.log('В массиве есть цифра 3');
} else{
    console.log('В массиве нет цифры 3');
}

console.log(`Сумма чисел в массиве: ${arrSum(arrRand)}`);
console.log(`Минимальное число в массиве: ${findMin(arrRand)}`);

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

const arrSlide = [];

for (let i = 0; i < 20; i++) {
    arrSlide.push('x');
    console.log(arrSlide);
}