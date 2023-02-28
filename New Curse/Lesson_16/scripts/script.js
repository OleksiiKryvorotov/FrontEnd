const form = document.querySelector("form")
const input = document.querySelector("#new_item_input")
const list = document.querySelector("#todo_list")

//--добавить обработчик события для ивента (submit) у формы и предотвратить перезагрузку страницы.
// сохранить в переменной text значение, которое ввел пользователь и очистить input
//1 добавить обработчик (addEventListener) для submit.
//2 восп. методом у объекта event чтобы предотв. перезаг., назв. метода preventDefault.
//3 создать перем. text с помощью const и сохранить туда из input, чтобы получить это знач. исп. св-во value
//4 очистить input с пом. метода reset

 

// form.addEventListener("submit", function(event) { //1
//     event.preventDefault() //2
//     const text = input.value //3
//     form.reset() //4
//     console.log(text);
// })

// --- ам ожно так:---------------------------

// const todoItems = []

// function addItem(event) {
// event.preventDefault() 
// const text = input.value 
// form.reset()

// const todoItem = {
//     text: text,
//     status: false    
// }
// todoItems.push(todoItem)
// console.log(todoItems);
// }

// form.addEventListener("submit", addItem)

//-----------------------------------------------------

//---- ПРОВЕРКА от ввода пустых значения и заполнения массива бесконечно-----------------------

// const todoItems = []

// function addItem(event) {
// event.preventDefault()
// // вот это добавилось!----------------- 
// let text = input.value
// // const text = input.value 
// form.reset()
// // вот это добавилось!------
// text = text.trim()//удаялет пробелв в нач. и кон. строки!
// if (text === "") {
// return
// }
// //------------------------

// const todoItem = {
//     text: text,
//     status: false    
// }
// todoItems.push(todoItem)
// console.log(todoItems);
// }

// form.addEventListener("submit", addItem)

//------------------------------------------------------




//---Еще задача:--------------------------------------
//  создать для каждого todo объекта html эл-та li, input, label, button и добавить в label знач. из св-ва text:

const todoItems = []

function addItem(event) {
event.preventDefault()
let text = input.value
form.reset()

text = text.trim()
if (text === "") {   
return
}

const todoItem = {
    text: text,
    status: false    
}
todoItems.push(todoItem)
//добавилось новое:-------------------
updateList()
//---------------------------------
}
 // создать для каждого todo объекта html эл-та li, input, label, button и добавить в label знач. из св-ва text:
function updateList() {
    list.innerHTML = ""
    for (let index = 0; index < todoItems.length; index++) {
        
      const {text, status} = todoItems[index]  
      const li = document.createElement("li")
      const input = document.createElement("input")
      const label = document.createElement("label")
      const button = document.createElement("buttoni")
      button.innerText = "Remove"
      label.innerText = text
      input.setAttribute("type", "checkbox")
      button.setAttribute("data-index", index)
      button.classList.add("remove_Item")
      li.append(input, label, button)

      list.append(li)
    }
}

form.addEventListener("submit", addItem)

// недоделал немного.....................................

   
    
