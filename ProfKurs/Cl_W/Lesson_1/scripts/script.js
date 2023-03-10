// let a =10
// a = 100
// console.log(a);   


// const b = 12
// // b = 120 // так делать нельзя
// // console.log(b);

// const numbers = [1, 2, 3, 4, 5]
// numbers.push(6)
// console.log(numbers);

// заданоа перем. number. Еси знач. number  ,jkkmit bkb hfdyj 10, nj dswdrxnb d rjycjkm 'hlllo'?а если меньше - 'h1'

// let number = 15
// number = 1

// if (number >= 10 ) {
//     console.log('hello') 
//  } else {
//         console.log('h1')
//     }

//     //ТЕРНАРНЫЙ ОПЕРАТОР
//     // Условие ? true : false

    // number >= 10 ? console.log('hello') : console.log('h1')

    //Циклы 
    // вывести в консоль все числа от 0 до 20

    // for (let i = 0; i <= 20; i++) {
    //    console.log(i)        
    // }

    // Вывести в консоль каждое третье число от 96 до 15

    // for (let i = 96; i >= 15; i -= 3) {
    //     console.log(i);             
    // }

    // вывести в консоль каждое число от 100 до 57

    // for (let i = 100; i >= 57; i--) {
    //     console.log(i);          
    // }

    // сформировать новый массив, в который попадут все полож. числа из массива numbers

// const numbers = [6, 7, 1, -19, 78, 18, -5, -38, 9]

// const positive_numbers = []
// for(let i = 0; i < numbers.length ; i++) {
//     if(numbers [i] > 0) {
//         positive_numbers.push(numbers[i])
//     }
// }
// console.log(positive_numbers);

//--- через тернарный оператор--------------------------

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > 0) {
//          positive_numbers.push(numbers[i])
// }
// }    

// Сформировать новый массив, в который попадут все числа из массива numbers умножение на 2---

// const mult_numbers = []
// for(let i = 0; i < numbers.length; i++) {
//     mult_numbers.push(numbers[i] * 2)  
       
// }
// console.log(mult_numbers); 

//--- Сформировать новый массив, в который попадут все полож. числа из массива numbers деленные на 2---
const numbers = [6, 7, 1, -19, 78, 18, -5, -38, 9]

const positive_numbers = []
for(let i = 0; i < numbers.length; i++) {
     if(numbers [i] > 0) {
        positive_numbers.push(numbers[i] / 2)        
        }                    
}
console.log(positive_numbers);


