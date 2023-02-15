//----------------Функции------------------------

// --------объявление функций и вывод на консоль:----------------------------

// function getName() {
//     const name = prompt("write your name")
//     console.log(name)
// }

// getName() - вызов ф-ции

// ------Запросить число и если четное - выводить "Да", а если нет - "нет":-------------------

// function check() {
//     const number = prompt("Write your number")
//     if (number % 2 === 0) {
//         console.log("Да")        
//     } else {
//         console.log("Нет")        
//     }
// }

// check() - //вызов ф-ции

//-------------------Действияя над ф=цями:------------------

// function power(a, b) {
//     console.log(a**b)    
// }

// power(2, 2) // 2 во втор. стпени
// power(4, 3) // 4 в третьей
// power(5, 4) // 5 в четв. степени
// power(6, 2) // 6 в квадрате

// -------Создать ф-цию, которая в кач. аргументов получает два числа и выводит в консоль наибольшее------

// function getMax(a, b) {
//     if (a > b) {
//         console.log(a)
//             } else {
//         console.log(b)        
//     }
// }

//     getMax(55, 25)
//     getMax(25, 55)

//------------------- Устаревший вариант - не используется внутри ф-ции (var) ------------------

// if (1 === 1) {
//     var a = 123 // - не используют сейчас внутри ф-ции
//     let b = 123
// }

// console.log(`a = ${a}`)
// console.log(`b = ${b}`) // error обращаюсь к несущ. переменной!

//--------------------------------------------------------------------------------

// var a = 5
// var a = 6
// var a = 8
// var a = 345
// var a = 600
// var a = 11
// console.log(a) // выодит на консоль только последнее
// var - никогда не испольховать!

//-------------------------------------------------------------------------------------------

// function power(a, b) {
//     let result = a**b
    
//     return result   // отсанавливает работу ф-ции!   
// }

// const num = power(4, 3)
// console.log(num) //получаем копию значения, которая ледит в result

//-------------Найти гипотенузу по катетам с пом. power: ----------------------------------

// САМ НАПИСАЛ!!!!!-----------------------------------------------------
// function power(a, b) {
//     let result = (a**2 + b**2)**0.5 
    
//     return result
// }

// const num = power(3, 4)
// console.log(num) 
// 

// -------------А мождно и так:------------------------------------

// function power(a, b) {
//     let result = a**b
    
//     return result
// }
// let a = power(3, 2)
// let b = power(4, 2)
// let c = power(a + b, 0.5) // а плюс в и возв. в степень 0,5, т.е. извл. корень!
// console.log(c)
// или так:
// console.log(power(power(3, 2) + power(4, 2), 0.5))

//------Написать ф-ию, которая получаетодно число, и если четное - "true", если нечетное - "false"---

// САМ НАПИСАЛ!!!!!!!!

// function check(a) {
//         if (a %2 === 0) {
//             console.log(true)
//                 } else {
//             console.log(false)        
//         }
//     }
    
//   check(4)

//а можно и так:

// function check(a) {
//     if (a % 2 === 0) {
//       return true
//     } else {
//        return false        
//     }
// }

// console.log(check(4));
// console.log(check(5));

//а можно и короче:

// function check(a) {
//     return a % 2 ===0    
// }

// console.log(check(4))
// console.log(check(5))


//-----------Написать ф-цию, которая в кач. аргумента получает чмсло и возвр.
// массив из чисел от 0 до указ. числа,
// а результат выполнения вывести в консоль -----------------------------------------------------------

//-----------------------function declaretion--------------------------------------------------

// function getNewArray(a) {
//     let newArray = []
//     for (let index = 0; index < a; index++) {  // 0 1
//         newArray.push(index) // 0 1 2 3 4 5 6 7 8               
//     }
//     return newArray
// }

// console.log(getNewArray(9))
// console.log(getNewArray(10))
// console.log(getNewArray(50))
// console.log(getNewArray(32))

//--------------------------function declaretion-----------------------------------------------

// function getNewArray(a) {
//     let newArray = []
//     for (let index = 0; index < a; index++) {  // 0 1
//         newArray.push(index) // 0 1 2 3 4 5 6 7 8               
//     }
//     return newArray
// }

// const getArray = getNewArray

// console.log(getNewArray(9))
// console.log(getNewArray(10))
// console.log(getNewArray(50))
// console.log(getNewArray(32))

//--------------------------- function expression--------------------
// переменная принимает ф-цию:
// const power = function(a) {
//     return a**2
// }
// console.log(power(4))

//-------------------------------------------------------------
// ключ принимает ф-цию:
// const obj = {
//     print: function(a) {
//         console.log(a)
//     }
// }

// obj.print(123)
// obj.print(125)
// obj.print(22)
// obj.print(95)

//---------------а можно так:---------------------------------------------------

// const obj = {
//     print: console.log        
//     }
//     const cout = console.log

// obj.print(123)
// obj.print(125)
// obj.print(22)
// obj.print(95)

// cout(123)

//----------------------------Массив от опр. числа до определенного (от а до в):-------------------

const getNewArray = function(a, b) {
    let newArray = []
    for (let index = a; index <= b; index++) { 
        newArray.push(index)              
    }
    return newArray
}

console.log(getNewArray(9, 15))




 