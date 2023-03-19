// --- Написать ф-цию, которая принимает два аргумента - 1-й ф-ция, 2 - число и выполнить столько раз сколько число во втором аргументе:

// function myInterval(func, number) {   
//     for(let i = 0; i < number; i++) {
//         func()
//     }       
// }   
  
//   const myFunc = () => {
//     console.log(Math.random());
//   }

//   myInterval(myFunc, 10)
  //----------------------------------------------------------------

  // 1.Написать ф-цию getMyName, которая выводит в консоль имя,
  // 20 раз выполнить эту ф-цию getMyName: ------------------------


//   function myInterval(func, number) {   
//     for(let i = 0; i < number; i++) {
//         func()
//     }       
// } 
// const getMyName = () => {
//     console.log("Alex", Math.random());
// }

// myInterval(getMyName, 20)
//-------------------------------------------------------------

// 2. Написать ф-цию, которая в body вставляет имя:

// const name = (newName) => {
//     document.body.innerHTML += `<p> ${newName}</p>`
// }

// name("Misha")
// ---- или так можно: ------------------------------------------

// const name = (newName) => {
//     document.body.innerHTML = "<p>Alex</p>"
// }

// name()
//--------------------------------------------

// 3. Написать ф-цию, которая вернет нужный элемент из html: <p>, <div> или <span> и т.д.:

// const getElementByTag = (tag) => {    
//    return  document.querySelector(tag)
// }
// console.log(getElementByTag("span"));
//-------------------------------------------------------------------

// 5. Создать объект с названием calculation. У этого объекта должна быть функция squarPow, которая возводит число в куб cubePow и округляет downNumber. Каждая функция должна принимать один аргумент:

// const calculation = {
//   squarPow: a =>  Math.pow(a, 2),  
//   cubePow: (a) =>    Math.pow(a, 3),
//   downNumber: (a) =>    Math.floor(a)  
//   }

// console.log(calculation.squarPow(3));
// console.log(calculation.cubePow(3));
// console.log(calculation.downNumber(3));
// КРУТО! Если один аргумент у ф-ции, то можно кратко....