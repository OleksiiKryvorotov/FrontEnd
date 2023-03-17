// Написать стрелочную функцию, которая перебирает массив слов. Массив слов передается через аргумент. И возвращает нам самое длинное слово

// const giveMeTheLongestWord = (word) => {
//     let longest = ''
//     for (let i = 0; i < word.length; i++) {
//       if(word[i].length > longest.length) {
//         longest = word[i]
//       }         
//     }
//     return longest
// }
// const arr = ['Oli', 'Done', 'Apple']
// const longest = giveMeTheLongestWord(arr)

// console.log(giveMeTheLongestWord(arr))

// другой способ:

// const longestWord = (words) => {
//   let result = words[0];
//   for (let i = 0; i < words.length; i++) {
      
//       if (result.length < words[i].length) {
//           result = words[i];               
//       }              
//   }  
//    return result;
// };

// console.log(longestWord(['Oli', 'Done', 'Apple']));

//-------------------------------------------------------------------

// --- ИНТЕРВАЛ ------------------------------------------------

// window.setInterval(() => console.log(123), 1000) // второй арг. - время в млс!

// --- Написать функцию которая в setInterval выводит Ваше имя + случайное число: ----------------------------------------------------------

// const randomNumber = () => {
  // const randomNumber = Math.floor(Math.random() * 100); 
//   console.log('Alex ' + randomNumber); 
// };

// setInterval(randomNumber, 1000);

// ----Остановить если случ. число больше 0.8: ----------

// function randomNumber() {
//   const number = Math.random()
//   console.log("Alex " + number);
//   if ( number > 0.8)
//   clearInterval(result) // остановить!!!!
// }

// const result = setInterval(randomNumber, 1000)
// console.log(result);
//------------------------------------------------------------

// --- Написать ф-цию, которая принимает два аргумента - 1-й ф-ция, 2 - число и выполнить столько раз сколько число во втором аргументе:

function myInterval(func, number) {
  func()  
}

myInterval(() => {
  console.log(Math.random());
})
// Домой такое




