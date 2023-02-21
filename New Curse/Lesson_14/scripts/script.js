// //-- Написать ф-цию, которая принимает текст как аргумент, создает параграф с этим текстом и возв. этот параграф, в цикле сделать div.append(p)- новый параграф---------

// const paragraphsText = ["Day1", "Day2", "Day3", "Day4"] 
// // --проитерировать (пройтись циклом по всем э-там) массив paragraphs, создать для каждого э-та массива тег p, добавть туда содержимое э-та и потом этот э-т добавить в div с классом main------------------------------------------------

// function newParagraph(text) {
//     const p = document.createElement("p")
//     p.innerText = text
//     return p
// }

// const div = document.querySelector("div.main")

// for (let index = 0; index < paragraphsText.length; index++) {   
//     div.append(newParagraph(paragraphsText[index]))   
// }


//-----------------------------------------------------------

// const urlToPost = prompt("Give url to post")

// const imgUrl = prompt("Give url to img")

// const img = document.createElement("img")
// img.setAttribute("src", imgUrl)

// const a = document.createElement("a")
// a.innerText = "Url to post"
// a.setAttribute("href", urlToPost)

// const div = document.querySelector("div.main")
// div.append(a, img)





//----------------------------------------------------------

// надо пройтись по массиву продуктов
// создать р с назв. продукта
// создать img со ссылкой которая хранится под ключом img
// обернуть в новый див этот новый див в <div class = "main">

// const products = [
//     {
//        name: "Laptop", 
//        img: "https://i.ebayimg.com/thumbs/images/g/59UAAOSwxc1jaiCH/s-l225.webp"
//     },
//     {
//        name: "Notebook",
//        img: "https://i.ebayimg.com/thumbs/images/g/wDgAAOSw-2Bj25eI/s-l225.webp"
//     },
// ]
// function newParagraph(text) {
//     const p = document.createElement("p")
//     p.innerText = text
//     return p
// }

// function newImg(srcValue) {
//     const img = document.createElement("img")
//     img.setAttribute("src", srcValue)
//     return img
// }

// const mainDiv = document.querySelector(".main")

// for (let index = 0; index < products.length; index++) {
//     const {name, img} = products[index]
//     // const p =document.createElement("p") - без исп. ф-ций!
//     // p.innerText = products[index].name - без исп. ф-ций!
//     const p = newParagraph(name)

//     // const img = document.createElement("img") - без исп. ф-ций!
//     // img.setAttribute("src", products[index].img) - без исп. ф-ций!
//     const newImgElem = newImg(img)

//     const div = document.createElement("div")
//     div.append(p, newImgElem)
//     mainDiv.append(div)
    
// }



//-------добавить еще один параграф с таким форматом текста {unitPrice$ - count} после назв. продукта и в конце вывести в парар. общее кол-во продуктов и всю сумму продуктов--------------------------------------------------

// const products = [
//     {
//        name: "Laptop", 
//        img: "https://i.ebayimg.com/thumbs/images/g/59UAAOSwxc1jaiCH/s-l225.webp",
//        count: 15,
//        unitPrice: 1000
    
//     },
//     {
//        name: "Notebook",
//        img: "https://i.ebayimg.com/thumbs/images/g/wDgAAOSw-2Bj25eI/s-l225.webp",
//        count: 10,
//        unitPrice: 50
//     },
//     ]
//     function newParagraph(textValue) {
//             const p = document.createElement("p")
//             p.innerText = textValue
//             return p
//     }

//     function newImg(srcValue) {
//             const img = document.createElement("img")
//             img.setAttribute("src", srcValue)
//             return img
//         }

//     const mainDiv = document.querySelector("div.main")
//     let totalPrice = 0;
//     let totalCount = 0;
    

//     for (let index = 0; index < products.length; index++) {
//           const {name, img, unitPrice, count} = products[index]
          

//           const pName = newParagraph(name)
//           const pInfo = newParagraph(`${unitPrice}$ - ${count}`)
//           const newImgElem = newImg(img)
          
//           const div = document.createElement("div")
//           div.append(pName, pInfo, newImgElem)
//           mainDiv.append(div)

//           totalCount += count
//           totalPrice += unitPrice*count

//     }

//     // const prductsInfo = document.createElement("p")
//    const productsInfo = newParagraph(`Count all products: ${totalCount}. Total price: ${totalPrice}$`)
//     mainDiv.append(productsInfo)




//------ФУНКЦИИ - объекты----------------------------------------

function beautyPrint(result) { 
       console.log(`Значение result: ${result}`)    
}

function sum(a, b, print) {
    const c = a + b
    print(c)
    return c
}

sum(1, 3, beautyPrint)






