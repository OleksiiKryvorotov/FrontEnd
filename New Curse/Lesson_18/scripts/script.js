const form = document.querySelector("form")
const cardSection = document.querySelector(".card-section")

const addCardButton = document.querySelector("#add card")
const removeCardButon = document.querySelector("#remove_cards")
const questionInput = document.querySelector("#question")
const answerInput = document.querySelector("#answer")
// предотв. перезагр. страницы:------------------------
const flashCards = []
form.addEventListener("submit", function(event) {
    event.preventDefault()
})
//------------------------------------------------------

// получить доступ к вдум имутам из jvascript (questionInput, answerInput)
//добавить обработчик события click для addCardButton и сохранить из инпута в переменную answerText----------

// вверху добавить:
// const addCardButton = document.querySelector("#add card")
// const removeCardButon = document.querySelector("#remove_cards")
// const questionInput = document.querySelector("#question")
// const answerInput = document.querySelector("#answer")

addCardButton.addEventListener("click", function () {
    const questionText = questionInput.value
    const answerText = answerInput.value
    form.reset()

    // созд. объект который назыв. fleshCard и у которого есть дав св-ва:
// 1 - question = хранит в себе вопрос
// 2 - answer = хранит в себе ответ
// потом добавить этот объект в маассив flashCards

const flashcard = {
    question: questionText, 
    answer: answerText
}

flashCards.push(flashcard)
console.log(flashcards);

form.reset()

})
//переисать с ГИТа script!

