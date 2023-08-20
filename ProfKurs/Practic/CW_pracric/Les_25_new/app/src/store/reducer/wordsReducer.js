const words = ['apple', 'banana', 'carrot', 'dog', 'elephant', 'flower', 'house', 'jacket']

const ADD = 'ADD'

export const addWordsAction = (payload) => ({type: ADD, payload})

export const wordsReducer = (state = words) => {
    return state
}