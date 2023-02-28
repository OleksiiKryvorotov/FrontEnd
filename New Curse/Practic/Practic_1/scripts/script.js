//напишите ф-цию, которая в кач. агрументаполучает два числа
//и возвр. массив чисел от меньшего к большему

// function task1(a, b) {
//     const result = [];
//     let min;
//     let max;
  
//     if (a < b) {
//       min = a;
//       max = b;
//     } else {
//       min = b;
//       max = a;
//     }
  
//     for (let i = min; i <= max; i++) {
//       result.push(i);
//     }
  
//     return result;
//   }
  
//   const test1 = task1(1, 2);
//   console.log(test1);
  
//   const test2 = task1(0, 10);
//   console.log(test2);
  
//   const test3 = task1(10, 0);
//   console.log(test3);
  
//   const test4 = task1(10, 10);
//   console.log(test4);
  //--------------------------------------------------------------------


//в программе объявлена перепенная word сщ строковым значением. Используя цикл разверните слово

const word = "word"

let result = "";
for (let i = word.length - 1; i > 0; i--) {
    result +=word[i];
        
}
console.log(result);