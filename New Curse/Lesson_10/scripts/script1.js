// const value_1 = +prompt("Write first number")
// const value_2 = +prompt("Write second number")

// if (value_1 > value_2 ) {
//     console.log("Value1 is bigger than value2")
// } else if(value_1 < value_2) {
//     console.log("value2 is bigger than value_1")
// } else {
//     console.log("value1 is equeal to value2");
// }

// const value = +prompt("Write a number")

// if (value <0) {
// console.log("число отрицательное")
// } else if (value >0) {
//     console.log("число полодительное")
// } else {
//     console.log("число равно нулю");
// }
//-------------------------------------------------------

// const value = +prompt("Write a number")

// console.log(isNaN(value))

//---------------------------------------------------------

// const value = prompt("Write a number")

// if (isNaN(value)){
// console.log("Это значение нельзя преобразовать в число") 
// } else {
//     console.log("Это значение можно преобразовать в число");
// } 
    
//-----------------------------------------------------------------
//логические операторы:
// && = и, and
// || = или, or

// console.log(true && false)
// console.log(true || false)

// const value = prompt("Write a number")

// if (value < 0 || value > 0) {
//     console.log("не равно 0")
// } else { 
//     console.log("равно 0");
// }

//--------------------------------------------------------------------

// программа проверки года на высокосность!!!
// прогр. должна получать значение от польз. с помощбю promt:

// const year = prompt("Enter a year")

// if (year % 400 === 0 ||(year % 4 === 0 && year % 100 !== 0)) {
// console.log("Год высокосный")
// } else {
//     console.log("Год не высокосный")
// }
//----------------------------------------------------------------------

//МАССИВЫ!

const arr = [21, 54, 856, 812, 452]

// console.log(arr[4])
arr[4] = 500// присвоить эл-ту другое значение
arr[5] = 600// присвоить новому эл-ту  значение
console.log(arr)
arr.push(700) //добавить в конце элемент
console.log(arr)


