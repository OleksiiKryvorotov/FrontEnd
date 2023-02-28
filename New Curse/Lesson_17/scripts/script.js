const form = document.querySelector("form")
const input = document.querySelector("#new_item_input")
const list = document.querySelector("#todo_list")

// добавить обработчик события для ивента (submit) у формы и предотвратить перезагрузку странички и сохранить в переменной text значение которое ввел пользователь и очистить инпут
// 1 добавить обработчик (addEventListener) на form для ивента submit
// 2 воспользоваться методом у объекта event чтобы предотвратить перезагрузку, название метода preventDefault
// 3 создать переменную text с помощью const и сохранить туда значение из input, чтобы получить это значение использовать свойство value
// 4 очистить инпут с помощью метода reset у объекта form

const todoItems = []

function addItem(event) { // 1
    event.preventDefault() // 2 
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
        status: false
    }
    todoItems.push(todoItem)
    console.log(todoItems);
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
        const {text, status} = todoItems[index]
        const li = document.createElement("li")
        const input = document.createElement("input")
        const label = document.createElement("label")
        const button = document.createElement("button")
        input.setAttribute("type", "checkbox")
        input.setAttribute("id", `item_${index}`)

        label.innerText = text
        label.setAttribute("for", `item_${index}`)
       
        button.innerText = "Remove"
        button.setAttribute("data-index", index)
        button.classList.add("remove_item")
        button.addEventListener("click", function(event) {
            const index = event.target.dataset.index // data-index
            todoItems.splice(index, 1) // первый параметр - индекс а второй - количество элементов для удаления
 
            updateList() // обновляем лист
        })
        li.append(input, label, button)

        list.append(li)
    }
}

form.addEventListener("submit", addItem)