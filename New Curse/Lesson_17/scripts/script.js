const form = document.querySelector("form")
const input = document.querySelector("#new_item_input")
const list = document.querySelector("#todo_list")
const dateInput = document.querySelector("#new_date_input")
let yourDate = new Date()
dateInput.value = yourDate.toISOString().split('T')[0]
// добавить обработчик события для ивента (submit) у формы и предотвратить перезагрузку странички и сохранить в переменной text значение которое ввел пользователь и очистить инпут
// 1 добавить обработчик (addEventListener) на form для ивента submit
// 2 воспользоваться методом у объекта event чтобы предотвратить перезагрузку, название метода preventDefault
// 3 создать переменную text с помощью const и сохранить туда значение из input, чтобы получить это значение использовать свойство value
// 4 очистить инпут с помощью метода reset у объекта form

const todoItems = []

function addItem(event) { // 1
    event.preventDefault() // 2 
    let itemDate = dateInput.value
    let text = input.value // 3 // ex. "    Hello world      "
    form.reset() // 4
    text = text.trim() // "Hello world"
    // trim удаляет пробелы в начале строки и в конце строки
    if (text === "") {
        alert("Error: empty value")
        return // exit from function
    }
    
    const todoItem = {
        text: text,
        status: false,
        date: itemDate
    }

    todoItems.push(todoItem)
    console.log(todoItems);
    updateList()
}

function itemRemoveHandler(event) {
    const index = event.target.dataset.index // data-index
    todoItems.splice(index, 1) // первый параметр - индекс а второй - количество элементов для удаления

    updateList() // обновляем лист
}

function toggleStatusHandler(event) {
    const index = event.target.dataset.index // data-index
    console.log(index)
    // поменять значение ключа status у объекта todoItems[index] на false если значение true и на true если значение false и в конце обновить лист
    todoItems[index].status = !todoItems[index].status

    updateList()
}

// <label>innerText</label>
function updateList() {
    list.innerHTML = ""

    for (let index = 0; index < todoItems.length; index++) {
        // создать для каждого todo объекта html элемент li, input, label, button и добавить в лабел значение из свойства text
        // для создания используем метод createElement
        // 1 создать li
        // 2 создать input
        // 3 создать label
        // 4 создать button
        // 5 к button добавить текст Remove
        // 6 к label добавить текст который хранится в свойстве text
        // 7 добавить input, label, button в li использовав метод append
        const {text, status, date} = todoItems[index]
        const li = document.createElement("li") // <li data-date="date">...</li>
        // <li data-date="date">...</li>
        li.setAttribute("data-date", date)
        const input = document.createElement("input") // <input id="item_{index}" type="checkbox">
        const label = document.createElement("label") // <label for="item_{index}">text</label>
        const button = document.createElement("button") // <button>Remove</button>
       
        // <input id="item_{index}" type="checkbox">
        input.setAttribute("type", "checkbox")
        input.setAttribute("id", `item_${index}`)
        input.setAttribute("data-index", index)
        // checked отвечает за состояние input с типом checkbox
        input.checked = status
        // срабатывает когда меняется состояние чекбокса
        input.addEventListener("change", toggleStatusHandler)
        // <label for="item_{index}">text</label>
        label.innerText = text
        // добавить аттрибут for для лабел со значением айди инпутаs
        label.setAttribute("for", `item_${index}`)
        // добавить стиль [text-decoration: line-through;] к label если задача выполнена, состояние задачи можно узнать с помощью status
        if (status) {
            label.style.textDecoration = "line-through"
        }
        // <button>Remove</button>
        button.innerText = "Remove"
        button.setAttribute("data-index", index)
        button.classList.add("remove_item")

        // объявить функцию с названием itemRemoveHandler и добавить туда логику обработчика
        button.addEventListener("click", itemRemoveHandler)
        li.append(input, label, button)

        list.append(li)
    }
}

form.addEventListener("submit", addItem)