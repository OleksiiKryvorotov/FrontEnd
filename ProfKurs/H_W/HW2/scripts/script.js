// 1.Напишите функцию, которая принимает два числа и возвращает большее из них.

// const getMaxNum = (a, b) => 
//      Math.max(a, b)
     
// console.log(getMaxNum(23, 4580)) 
//---------------------------------------------------------------------

// 2.Напишите функцию, которая принимает число и возвращает его квадрат.

// const exponent = (a, b) =>
//       Math.pow(a, b)

// console.log(exponent(4, 2))    
//----------------------------------------------------------------------

// 3.Напишите функцию, которая принимает строку и возвращает ее длину.

//  const isLength = (str) => 
//  str.length  

//  console.log(isLength("Manowar"))
//-------------------------------------------------------------------

// 4.Напишите функцию, которая принимает два числа и возвращает их сумму.

    //  const isSumNamber = (num1,num2) => num1 + num2

    //  console.log(isSumNamber(-34, -6));
//----------------------------------------------------------------------

// 5.Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором все числа умножены на 2.
// const createNewArray = arr => {
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//        result.push(arr[i] * 2)        
//     }
//     return result
// }

//   console.log(createNewArray([1, 5, -7, -88, 9, 44, 15, 35, -5, 10]))


//----------------------------------------------------------------

// 6.Напишите функцию, которая принимает строку и возвращает новую строку, в которой все гласные заменены на символ '*'.

// const changeLetters = str => {
//     let new_str = '';
//     for(let i = 0; i < str.length; i++){
//       if(str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u' || str[i].toLowerCase() === 'y') {
//         new_str += '*'
//       } else {
//         new_str += str[i]
//       }
//     }
//     return new_str
//   }
  
//   console.log(changeLetters('hello')); // h*ll*
//   console.log(changeLetters('GOOD morning')); // G**D m*rn*ng



//---------------------------------------------------------------

// 7.Напишите функцию, которая принимает массив чисел и возвращает среднее значение.

const arrayNumbers = [1, 5, -7, -88, 9, 44, 15, 35, -5, 15]
const isAverage = (arrayNumbers) => {
const sum = 0

for (let index = 0; index < arrayNumbers.length; index++) {
    sum += arrayNumbers[index]    
}
}

const average = sum / arrayNumbers.length
console.log(isAverage(arrayNumbers));

// --- или так: 
// const getAvgNum = arr => {
//     for(let i = 0; i <arr.length; i++) {
//         sum =+ arr[i]
//     }
//     return sum / arr.length
//   }

//   console.log(getAvgNum([1, 5, -7, -88, 9, 44, 15, 35, -5, 15]))
//---------------------------------------------------------------




    
    





    
         