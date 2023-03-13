//-------------ЦИКЛЫ----------------------------

// 1. Написать цикл, еоторый считает сумму чисел от 20 до 35:

// let sum = 0 
// for (let i = 20; i <= 35; i++)  {
//   sum = sum + i //sum += i так короче
  
//   }
//   console.log(sum);

//----------------------------------------------------

  // 2. Написать цикл, который выводит произв. всех чисел от 10 до 15:

//   let mult = 1 
//   for (let i = 10; i <= 15; i++)  {
//     mult *= i    
//     }
//     console.log(mult) 

//---------------------------------------------------

// 3. Дан массив чисел. Сформ. новый, в коот. войдут только пололож. числа:

// const numbers = [1, 5, -7, -88, 9, 44, 15, 35, -5]

// const positive_numbers = []
// for (let i = 0; i < numbers.length; i++) {
//    if(numbers[i] > 0) {
//     positive_numbers.push(numbers[i])
//    }
//     // numbers - это массив
//     // i - индекс эл-та массива (0-8)
//     // numbers[i] -эл-т массива по индексу
// }
// console.log(positive_numbers);

//----------------------------------------------------

// 4. Сформ. новый массив из четных чисел:

//// if(условие){
//   true
// } else {
//   false
// }

// const numbers = [1, 5, -7, -88, 9, 44, 15, 35, -5]

// const even_numbers = []
// for (let i = 0; i < numbers.length; i++) {
//    if(numbers[i] % 2 === 0) {
//     even_numbers.push(numbers[i])
//    }
    
// }
// console.log(even_numbers);

//--Через тернарный оператор:-----------------

// Условие ? true : false

// const numbers = [1, 5, -7, -88, 9, 44, 15, 35, -5]

// const even_numbers = []
// for (let i = 0; i < numbers.length; i++) {
//    numbers[i] % 2 === 0 ? 
//     even_numbers.push(numbers[i]) : ''
//    }    

// console.log(even_numbers);

//-----------------------------------------------------

// 5.  Сформировать новый массив из четных отрицательных чисел => [-88]:
// const numbers = [1, 5, -7, -88, 9, 44, 15, 35, -5]

// const even_negative_numbers = []

// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 === 0 && numbers[i] < 0) {
//         even_negative_numbers.push(numbers[i])
//     }
// }

// console.log(even_negative_numbers);

//----------------------------------------------------------

// 6. Сформ. новый массив из чисел заканч. на 5:

// const numbers = [1, 5, -7, -88, 9, 44, 15, 35, -5, 10]

// const five_numbers = []

// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 10 === 5 || numbers[i] % 10 === -5 ) {
//         five_numbers.push(numbers[i])
//     }
// }
// console.log(five_numbers);

//-----------------------------------------------------------

// 7. Сформ. массив, сост. из послених цифр чисел исх. массива


// const numbers = [1, 5, -7, -88, 9, 44, 15, 35, -5, 10]

// const last_numbers = []

// for (let i = 0; i < numbers.length; i++) {
    
//         last_numbers.push(numbers[i] % 10)
//         // пушим остаток от деления на 10
    
// }
// console.log(last_numbers);

// 8. Сформ. массив, сост. из послених цифр чисел исх. массива, но чтобы все были полож. в консоли:

// const numbers = [1, 5, -7, -88, 9, 44, 15, 35, -5, 10]

// const last_numbers = []

// for (let i = 0; i < numbers.length; i++) {    
//         last_numbers.push(numbers[i] < 0 ? numbers[i] * -1 % 10 : numbers[i] % 10)
          
// }
// console.log(last_numbers);

//================================================================





