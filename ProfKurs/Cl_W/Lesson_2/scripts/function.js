//====    ФУНКЦИИ   ===========================================

// Function declaration - бъявление ф-ций через слово function

//---Написать функцию, которая принимает в качестве аргумента число и возвращает это число, умноженное на 10:--------------

// function multNum(num) {
//    return num * 10
// }

// console.log(multNum(5)); //50
// console.log(multNum(34)); //340
// console.log(multNum()); // NaN

//------- Arrow function (стрелочные ф-ции)  -----------

// Написать функцию, которая принимает в качестве аргумента число и возвращает это число, умноженное на 10 (только с пом. стрелочных ф-ций):-------------------------------------------------

// const multNum_arrow  = (num) => {
//     return num * 10
// }

// console.log(multNum_arrow(23)); // 230

// А можно сделать и так (но только если тело ф-ции (то что в фиг. скобках) сост. из одной строки!!!!!!!!!!!!!!!!!):

// const multNum_arrow = num => num * 10

// console.log(multNum_arrow(23));

//------------------------------------------------------------

// 1. Написать ф-цию, которая прин. в качю арг. два числа и возвр. их сумму:--------------------------------------------------

// 1 споссоб:

// function sum(a, b) {
//     return a + b
// }

// console.log(sum(4, 7));

// 2 способ (стрелоч. ф-ция):

// const sum_arrow = (a, b) => {
//     return a + b
// }

// console.log(sum_arrow(5, 12));

// а можно и так:

// const sum_arrow = (a, b) => a + b

// console.log(sum_arrow(5, 12));

//-------------------------------------------------------------