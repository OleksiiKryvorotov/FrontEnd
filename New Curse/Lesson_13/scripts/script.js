// const pValue = document.querySelector("p")
// console.log(pValue.innerText)
// pValue.innerText = "Hello world"
// console.log(pValue.innerText)


//--вывести в консоль содержимое всех трех параграфов (только текст)--
// const paragraphs = document.querySelectorAll("p")

// for (let index = 0; index < paragraphs.length; index++) {
//     const p = paragraphs[index]
//     console.log(p.innerText)    
// }
//------------------------------------------------------------


//--найти параграф с id info_1 внтури div с классом main
// и поменять содержимое на текст "Hello world"---------------

// const mainValue = document.querySelector(".main .info_1")    
//     mainValue.innerText = "Hello world"
//--------------------------------------------------------------


//--нпйти параграфы с классом info_1 и сохранить их содержимое
// в массиве и вывести в консоли этот массив-----    

// const paragraphs = document.querySelectorAll(".info_1")
// const newArray =[]

// for (let index = 0; index < paragraphs.length; index++) {
//     newArray.push(paragraphs[index].innerText)    
// }

// console.log(newArray)

//-------------------------------------------------------------


//--Взять все img из div с классом main 
// и первым 5 img поменять src на lheue. rfhnbzre-----------

// const imgs = document.querySelectorAll(".main img")

// for (let index = 0; index < 5; index++) {
//     imgs[index].setAttribute("src", "https://plus.unsplash.com/premium_photo-1663012979690-98f21f31193a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60")      
// }

//----------------------------------------------------------


// const div = document.querySelector(".main")
// const p = document.createElement("p")
// p.innerText = "Hello world"
// div.append(p) // добавляет эл-т после всех дочерныхэл-тов
// div.prepend(p) //добавляет эл-т до первого дочернего э-та


//--проитерировать (пройтись циклом по всем э-там) массив paragraphs, создать для каждого э-та массива тег p, добавть туда содержимое э-та и потом этот э-т добавить в div с классом main------------------------------------------------

const div = document.querySelector(".main")

const paragraphsText = ["Day1", "Day2", "Day3", "Day4"]

for (let index = 0; index < paragraphsText.length; index++) {
    const p = document.createElement("p")
    p.innerText = paragraphsText[index]
    // div.prepend(p)// - до
    div.append(p)    // - после
}






   



