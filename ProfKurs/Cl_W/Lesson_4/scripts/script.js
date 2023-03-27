// 1. Напишите функцию, которая принимает строку и возвращает новую строку, в которой все буквы заглавные

// const upLetters = str => {
//     const new_str = ''
//     for (let i = 0; i < str.length; i++){
//       new_str += str[i].toUpperCase()
//     }
//     return new_str
//   }
  
//   const upLetters1 = str => str.toUpperCase()
//   console.log(upLetters1('manowar'))
  
  // '' + 'A' + 'B' + 'C' = 'ABC'

  //----------------------------------------------------------------------

  // 2.// ДЗ HW2.Напишите функцию, которая принимает массив чисел и возвращает среднее значение.

//   const getAvgNum = arr => {
//     for(let i = 0; i <arr.length; i++) {
//         sum =+ arr[i]
//     }
//     return sum / arr.length
//   }

//   console.log(getAvgNum([1, 5, -7, -88, 9, 44, 15, 35, -5, 15]));


// ===== МЕТОДЫ МАССИВОВ: =============================
// ---Методы - это всегда функции!!!!!!!!!!!!! поэтому в конце всегда скобки надо! -------------

// - forEach() - ничего не возвращает (undefined), выполняет указанную ф-цию один раз для каждого эл-та массива.

// - map - выполняет указанную ф-цию один раз и возвр. всегда весь массив целиком

// метод "filter" возвр. новый массив, в который попадают те эл-ты, которые прошли указанную проверку, т.е. не надо никаких "иначе", "то" (без " : ") =======================================




// const numbers = [1, 2, 3, 4, 5]

// numbers.push(6) // добавляет эл-т в конец массива
// numbers.pop() // удаляет эл-т из конца массива
// numbers.unshift(0) // добавляет эл-т в начало массива
// numbers.shift() // удаляет эл-т из начала массива

// console.log(numbers)

// ====== Методы массивов, принимающие в кач. аргумента другую ф-цию (callback- ф-ция) ============================================




// --- Дан массив с числами. Создать новый массив, в который войдут все числа из исх. массива, умнож. на 10: ------------------------------

// const nums = [4, 1, 15, 77]

// const multNums = []
// for( let i = 0; i < nums.length; i++) {
//     multNums.push(nums[i] * 10)
// }

// //---  А можно с пом. метода for Each: ----------------------

// const multNums_forEach =[]
// nums.forEach(el => multNums_forEach.push(el * 10))

// console.log(multNums);
// console.log(multNums_forEach);


//  --- Решим старую задачу методом forEach: -----------------
// Сформировать массив, в который войдут все полож. числа из исходного массива двумя способами - с пом. цикла и с пом. forEach: ----------------------

// --1 способ: ------------------
// const nums = [4, 1, 15, -77, 33, -10, 55, 2]
// const posNums = []
// for(let i =0; i < nums.length; i++) {
//    if (nums[i] > 0) {
//     posNums.push(nums[i])
//    }
// }

// // --2 способ: ------------------

// const posNums_forEach = []
// nums.forEach(el => el > 0 ? posNums_forEach.push(el) : '')

// console.log(posNums);
// console.log(posNums_forEach);



// ====== CALLBACK функции: ======= ф-ция как аргумент! ============

// Callback-функция - это функция, переданная в другую функцию в качестве аргумента

// const multThree = () => 3 * 2;
// const multFour = () => 4 * 2;
// const multFive = () => 5 * 2;

// // const multNum = a => a * 2;


// Написать функцию, которая будет принимать массив чисел и возвращать новый массив, в котором все числа умножены на 2

// // const multOnTwo = arr => {
// //   const new_arr = [];
// //   for(let i = 0; i < arr.length; i++){
// //     new_arr.push(arr[i] * 2)
// //   }
// //   return new_arr;
// }
// Написать функцию, которая будет принимать массив чисел и возвращать новый массив, в котором все числа поделены на 2

// const divideOnTwo = arr => {
//   const new_arr = [];
//   for(let i = 0; i < arr.length; i++){
//     new_arr.push(arr[i] / 2)
//   }
//   return new_arr;
// }


// Написать функцию, которая будет принимать массив чисел и возвращать новый массив, в котором все числа возведены в квадрат

// const powOnTwo = arr => {
//   const new_arr = [];
//   for(let i = 0; i < arr.length; i++){
//     new_arr.push(arr[i] ** 2)
//   }
//   return new_arr;
// }

// --- УНИВЕРСАЛЬНАЯ ФУНКЦИЯ: -------------------------------

// const changeNum = (arr, func) => {
//     const new_arr = [];
//     for(let i = 0; i < arr.length; i++){
//       new_arr.push(func(arr[i])) // передаем инструкцию - что сделать с элементом массива, прежде чем его запушить?
//     }
//     return new_arr;
//   }
  
//   const nums = [1, 2, 3, 4, 5];
  
//   const multNum = a => a * 2;
//   const divideNum = a => a / 2;
//   const powNum = a => a ** 2;
  
//   console.log(changeNum(nums, multNum)); // [2, 4, 6, 8, 10]
//   console.log(changeNum(nums, divideNum)); // [0.5, 1, 1.5, 2, 2.5]
//   console.log(changeNum(nums, powNum)); // [1, 4, 9, 16, 25]

//===================================================================


// Написать ф-цию, которая принимает строку и callback-ф-цию и формирует новую строку, в котрой каждая буква изменяется как-то:




// const changeStr = (str, callback) => {
//     let new_str = ''
//     for(let i = 0; i < str.length; i++){
//        new_str += callback(str[i])
//   }
//   return new_str
// }
// --- этот код ля всех нижних свойств одинаковый! ---

// --- все буквы 'a' заменены на 'A':

// const changeA = letter => letter === 'a' ? 'A' : letter 

// console.log(changeStr('cat', changeA));

// --- все буквы 'o' 'a' заменены на '*':

// const changeOA = letter => letter === 'a' || letter === 'o' ?  '*': letter 

// console.log(changeStr('manowar', changeOA));


// --- все буквы 'i' заменены на '1':

// const changeI = letter => letter === 'i' ? '*': letter 

// console.log(changeStr('metallica', changeI));








