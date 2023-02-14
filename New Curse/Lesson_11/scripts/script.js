// let i = 0
// i = i + elem
// i += elem
// i++



// const arr = [5, 6, 8, 1, 51, 2, 51, 52]
// let sumOfElements = 0

// for (let index = 0; index < arr.length; index++) {   
//     //можно так: 
//     // const element = arr[index]
//     // sumOfElements += element
//     // а можно и так:
//     // sumOfElements += arr[index]
//       // а можно еще одним способом:
//     sumOfElements = sumOfElements + arr[index]
// }
// console.log(sumOfElements)

//--------Найти сумму полож. чисел----------------------

// const arr = [5, 6, 8, 1, 51, -2, 51, -52]
// let sumOfElements = 0
// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > 0) sumOfElements += arr[index]
// }
// console.log(sumOfElements)

//--------Найти сумму четных и нечетных из массива и вывести в консоль разницу между ними-----

// const arr = [5, 6, 8, 1, 51, -2, 51, -52]
// let evenSum = 0
// let oddSum = 0

// for (let index = 0; index < arr.length; index++) {
//     const elem = arr[index]
//     if (elem % 2 == 0) {
//         evenSum += elem
//     } else {
//         oddSum += elem
//     }
// }

// let diff = 0
// if (evenSum > oddSum) {
//     diff = evenSum - oddSum
// } else {
//     diff = oddSum - evenSum
// }
// console.log(`oddSum = ${oddSum}`)
// console.log(`evenSum = ${evenSum}`)
// console.log(`diff = ${diff}`)

//---------Найти сумму тех чисел, у которых знач. и индекс равны-----------------------

// const arr = [1, 2, 52, 4, 9, -5, 6, 59, 52, 20, 12, 65, 13]
// let sum = 0

// for (let index = 0; index < arr.length; index++) {
//      if (index === arr[index]) sum += arr[index]
// }
// console.log(sum);

//-------- ОБЪЕКТЫ - новый тип данных!----------------------------------

//без объектов с помощбю массива:

// const person = ["John", "Smith", 37, 175]
// console.log(`Name ${person[0]}`)
// console.log(`Second Name ${person[1]}`)
// console.log(`Age ${person[2]}`)
// console.log(`Height ${person[3]}`)

// с объектами без помощи массива:

// const person = {
//     name: "John",
//     secondName: "Smith",
//     age: 37,
//     height: 175
// }
// // два варианта обращения к объектам:
// // можно так:
// console.log(`Name ${person[`name`]}`)
// console.log(`Second Name ${person[`secondName`]}`)
// console.log(`Age ${person[`age`]}`)
// console.log(`Height ${person[`height`]}`)

// //а можно и так:
// console.log(person)
// console.log(`Name ${person.name}`)
// console.log(`Second Name ${person.secondName}`)
// console.log(`Age ${person.age}`)
// console.log(`Height ${person.height}`)

// // замена имени:
// person.name = "Jake"
// // добавление нового ключа, переименной:
// person.proffesion = "programmer"
// console.log(person.gender) // такого нету, выдает в консоли undefined
// console.log(person)
// // console.log(person);

//----------------ПРИМЕР:-----------------------------

const products = [
    {
    title: "Notebook",
    price: 1500,
    discount: 17,
    type: "electronica"       
},
{
    title: "Pc",
    price: 2000,
    discount: 12,
    type: "electronica"    
},
{
    title: "Blender",
    price: 500,
    discount: 25,
    type: "electronica"    
},
{
    title: "A4 Paper",
    price: 50,
    discount: 0,
    type: "office product"    
},
{
    title: "Tennis Table",
    price: 3200,
    discount: 0,
    type: "sport" 
}

]
console.log(products)

// ---------------найти сумму всех товаров (1 способ): ----------------------------

// let totalPrice = 0
// for (let index = 0; index < products.length; index++) {
//     console.log(`Price of product ${products[index].title} is ${products[index].price}`)    
//     totalPrice +=products[index].price
// }
// console.log(`Total price: ${totalPrice}`)

//----------- 2 способ: Деструктуризация (забрать значения ключей): -------------------
// let totalPrice = 0
// for (let index = 0; index < products.length; index++) {
//     const {title, price} = products[index]
//     console.log(`Price of ${title} is ${price}`)    
//     totalPrice += price
// }

// console.log(`Total price: ${totalPrice}`)

//------------теперь с учетом скидок: ----------------------------------------------

// let totalPrice = 0

// for (let index = 0; index < products.length; index++) {
//     const {title, price, discount} = products[index] //дуструктуризация const discount = "значение у ключа discount"
    
//     console.log(`Price of ${title} is ${price - price * discount / 100}`)    
//     totalPrice += price
// }

// console.log(`Total price: ${totalPrice}`)

//--------------------- пройтись циклом по массиву и в новой массив доб. те продукты, у которых  type "sport":-------------------------------------------

let totalPrice = 0
//новый массив:
const newProducts = []
//цикл:
for (let index = 0; index < products.length; index++) {
   
    const {type} = products[index]
    if (type === "sport") {
        newProducts.push(products[index])
    }
}

console.log(`Total price: ${totalPrice}`)
console.log(newProducts);











