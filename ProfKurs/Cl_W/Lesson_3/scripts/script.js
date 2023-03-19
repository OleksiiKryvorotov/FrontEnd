// -------- Методы Math: ----------------------------

// const a = Math.max(5, 3, -10, 73) //возвр. самое большое
// const b = Math.min(5, 3, -10, 73) //возвр. самое маленькое

// console.log(a) 
// console.log(b) 
//------------------------------------------------------
// const c = Math.abs(4)  // возвр. абсол. значение
// const d = Math.abs(-4)  // возвр. абсол. значение

// console.log(c, d)

//--------------------------------------------------------

// 1.Сформировать новый массив из чисел, заканчивющихся на 5 => [5, 15, 35, -5]. Задача из Lesson_2 можно решить ее методом Math.abs:

// const numbers = [1, 5, -7, -88, 9, 44, 15, 35, -5, 10];

// const numbers_five = [];

// for(let i = 0; i < numbers.length; i++) {
//   if(Math.abs(numbers[i] % 10) === 5){
//     numbers_five.push(numbers[i])
//   }
// }

// console.log(numbers_five);
//-------------------------------------------------------

// 2. Сформировать новый массив, состоящий из последних цифр чисел (без -) => тоже старая задача методом Math:

// const numbers = [1, 5, -7, -88, 9, 44, 15, 35, -5, 10]
// const last_digits = []

// for (let i = 0; i < numbers.length; i++) {    
//     last_digits.push(Math.abs(numbers[i] % 10))
//       }
          
// console.log(last_digits);
//-----------------------------------------------------------

// ------ Методы округления чисел: --------------------------

// const e = Math.ceil(4.73) // 5 - всегда вверх
// const f = Math.floor(4.73) // 4 - всегда вниз
// const g = Math.round(4.73) // 5 - по правилам математики

// ------ Методы возв. в стпень и извл. корней: ---------------------

// const h = Math.pow(6, 2) // Первое -онование степени, второе показатель
// const i = Math.sqrt(36) // Извл. квад. корня

// -------Случайные числа: -------------------------------------

// const j = Math.random() // случ. числа, но от 0 до 1!!!!
// console.log(j);

// 3. НАПИСАТЬ Ф-ЦИЮ, КОТОРАЯ ПРИНИМАЕТ 3 ЧИСЛА И ВОЗВР. НАИБОЛЬШЕ:--

// const getMaxNum = (num1, num2, num3) => 
//      Math.max(num1, num2, num3)

// console.log(getMaxNum(4, 1, 88));

// или так можно:
//      const getMaxNum = (num1, num2, num3) => {
// return Math.max(num1, num2, num3)
//      }  

// console.log(getMaxNum(4, 1, 88));
//---------------------------------------------------

// 4. Написать ф-цию, которая прин. два числа - основание и показатель и возвращает результат возв. числа в степень:

// const a = (num1, num2) => Math.pow(num1, num2)

// console.log(a(2,12));
//--------------------------------------------------------

// 5. Сгенерировать случ. целое число от 0 до 10: -------

// const randomNum = Math.floor(Math.random() * 11)
// console.log(randomNum);

// или так можно:
// const randomNum = Math.round(Math.random() * 10)
// console.log(randomNum);
//--------------------------------------------------------

// 6. Сгенерировать случ. число от 10 до 20:-------------

// const randomNum = Math.round(Math.random() * 10 + 10) 
// console.log(randomNum);

// 7. Сгенерировать случ. число от 15 до 30:-------------

// const randomNum = Math.round(Math.random() * 15 + 15) 
// console.log(randomNum);
// УМНОЖЕНИЕМ СОЗДАЕМ ДИАПАЗОН, А СЛОЖЕНИЕМ СДВИГАЕМ!!!!!!
//------------------------------------------------------

// 7. Написать стрелочная ф-цию, которая принимает массив со строками и формирует новый массив со строками, чья длина превышает 5 символов: ---------------
const isMaxLength = (arr) => {
    const result = []
   for (let i = 0; i < arr.length; i++) {
      if(arr[i].length > 5) {
        result.push(arr[i])
    }     
   }
   return result
}
const greetings = ['hello', 'hi', 'good morning', 'good afternoon', 'hey']
console.log(isMaxLength(greetings));