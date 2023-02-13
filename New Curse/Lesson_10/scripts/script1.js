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

// const arr = [21, 54, 856, 812, 452]

// // console.log(arr[4])
// arr[4] = 500// присвоить эл-ту другое значение
// arr[5] = 600// присвоить новому эл-ту  значение
// // console.log(arr)
// arr.push(700, 800, 900) //добавить в конце элемент(ы)
// console.log(arr)
// console.log(arr.pop()) //удалить только последний эл-т
// arr.unshift(11, 10, 987) //добавить в начале) эл-т(ы)
// console.log(arr.shift()) //удалить только первый эл-т
// console.log(arr)

//-----------------------------------------------------------------------------

// const arr = []
// const value_1 = +prompt("Write a number")
// const value_2 = +prompt("Write a number")
// const value_3 = +prompt("Write a number")
// arr.push(value_1, value_2, value_3)
// console.log(arr)

// заполнить пустой массив квадратами чисел из первого массива:
// const arr = [1, 4, 2, 5, 3]
// const arr1 = []
// arr1.push(arr[0]**2, arr[1]**2, arr[2]**2, arr[3]**2, arr[4]**2)
// console.log(arr1)

//-----------------------------------------------------------------------------------
//ЦИКЛЫ:

// for (let i = 0; i <10; i++) {
//     console.log(i)    //вывод чисел от 0 до 9
// }

// const arr = [9, -15, 4, 8, -65, 0 , -85, 52]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

//написать цикл, который выодит только полож. числа из массива:
// const arr = [9, -15, 4, 8, -65, 0 , -85, 52]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//     console.log(arr[i])
// }
// }

// цикл, который выводит только четные числа от 0 до 20:
// for (let index = 0; index < 20; index++) {
//     if (index %2 == 0) {
//     console.log(index)
//     }

//а можно кррче еще:
// for (let index = 0; index < 20; index +=2) {
//     console.log(index)
//     }
    //а если нечетные:
    // for (let index = 0; index < 20; index +=3) {
    //     console.log(index)
    //     }    

// for (let index = 20; index >= 0; index-=4) {
//     console.log(index)
// }

// вывести все эл-ты справа налево:
const arr = [9, -15, 4, 8, -65, 0 , -85, 52]

for (let index = arr.length - 1; index >= 0; index--) {
    //или так:
    // for (let index = 7; index >= 0; index--) {
    console.log(arr[index]) 
}

