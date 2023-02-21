//---пример------------------------------------------

// function beautyPrint(result) {
//      console.log(`Значение result: ${result}`)    
// }

// function sum(a, b, callback) {
//     const c = a + bcallback(c)
// }

// const aValue = 1
// const bValue = 3

// sum(aValue, bValue, beautyPrint)

//---пример----------------------------------------------

// const arr = [1, 2, 3, 4, 5]

// function printArray(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//        console.log(arr[i])        
//     }
//     callback()
// }

// function endResultPrint() {
//     console.log("Finished")
// }

// printArray(arr, endResultPrint)

//-----------------------------------------------------



//---переделать ф-цию callback, чтобы она принимала один аргумент и выводит в консоли квдрат этого эл-та-------


// const arr = [1, 2, 3, 4, 5]

// function printArray(arr, callback) {
//     for (let i = 0; i < arr.length; i++) { 
//        callback(arr[i])       
//     }    
// }

// function pow(a) {    
//              console.log(a**2)
// }

// printArray(arr, pow)

//----добавить еще возв. в 3-ю cтепень----------------

// const arr = [1, 2, 3, 4, 5]

// function forEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++) { 
//        callback(arr[i])       
//     }    
// }

// function pow(a) {    
//     console.log(a**2)
// }

// function cube(a) {
//     console.log(a**3)
// }

// forEach(arr, pow)
// forEach(arr, cube)

//-----------------------------------------------------

//---Обработчики событий-------------------------------

// const prgph = document.querySelector("p")
// function clickHandler() {
//     console.log("Clicked")
// }
// prgph.addEventListener("click", clickHandler)

//--теперь при нажатии на параграф текст будет увелич. на 1
// в html измеенил p (текст на число 0)
// const btn = document.querySelector("button")
// const prgph = document.querySelector("p")
// function clickHandler() {
//    prgph.innerText = +prgph.innerText + 1
// }
// btn.addEventListener("click", clickHandler) //click - назв. события, может быть другое....
//----------------------------------------------------



//-- сделать процесс так, чтобы знач. хранилось в переменной, а не в html и изм. при клике и записывалось в парагрф---------------------------------------------------

// const btn = document.querySelector("button")
// const prgph = document.querySelector("p")
// let counter = 0
// function clickHandler() {
//     counter +=1  
//     prgph.innerText = counter
// }
// btn.addEventListener("click", clickHandler)



//---написать ф-цию для события "клик" на батоне (Decrement) при срабатывании которой знач. умкньш. на 1----------------

// const btnIncr = document.querySelector("#incr")
// const btnDecr = document.querySelector("#decr")
// const prgph = document.querySelector("p")
// let counter = 0
// function clickHandlerIncr() {
//     counter = counter + 1  
//     prgph.innerText = counter
// }

// function clickHandlerDecr() {
//     counter = counter - 1  
//     prgph.innerText = counter
// }
// btnIncr.addEventListener("click", clickHandlerIncr)
// btnDecr.addEventListener("click", clickHandlerDecr)


//------Отборажается в консоли любой символ, который набираем на клавиатуре!----1 способ-------------------

// function clickHandler(event) {
//    console.log(event)
//       console.log("Cliked")
// }
// document.addEventListener("keydown", clickHandler)

//------Отборажается в консоли любой символ, который набираем на клавиатуре!---2 способ----------------------------

// const prgph = document.querySelector("p") 
// function clickHandler(event) {
//     console.log(event)
//     prgph.innerText += event.key
//  }

//  document.addEventListener("keydown", clickHandler)

//--------------------------------------------------------


//--Написать прог., которая формирует на основе масива строк мн-во параграфов и добавляет их в див с классом main. При клике на прашраф превращает текст в паргр. в звездочки-----

// const arr = ["Первый параграф", "Воторой параграф", "Третий параграф"]

// const div = document.querySelector("div.main")

// for (let index = 0; index < arr.length; index++) {
//     const newParagraph = document.createElement("p")
//     newParagraph.innerText = arr[index] 
//     newParagraph.addEventListener("click", function() {
//     newParagraph.innerText = "********"
//     })  
//     div.append(newParagraph)     
// }

//---------------------------------------------------------



//--каринки-------------------------------------------------

const images = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg', 'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg'];

const thumbnailsDiv = document.querySelector("#thumbnails")
const previewDiv = document.querySelector("#preview")
const newImgElem = document.createElement("img")
previewDiv.append(emptyImgElem)

for (let index = 0; index < images.length; index++) {
    const newImgElem  = document.createElement("img")
    newImgElem.setAttribute("src", images[index])
    newImgElem.addEventListener("click", function() {
        emptyImgElem.setAttribute("src", images[index])
    })
    thumbnailsDiv.append(newImgElem)    
 }
// посмотретьв ГИТЕ у препода!--------------------


 
