const words = [
    {id:1, title: 'apple'},
    {id:2, title: 'abanaba'},
    {id:3, title: 'carrot'},
    {id:4, title: 'dog'},
    {id:5, title: 'elephant'},
    {id:6, title: 'flower'}
    ]

const ADD = '[WORDS] ADD'
const REMOVE = '[WORDS] REMOVE'

export const addWordAction = (payload) => ({type: ADD, payload})
export const removeWordsAction = (payload) => ({type: REMOVE, payload})

export const wordsReducer = (state = words, action) => {
    if (action.type === REMOVE) {
        return state.filter(({id}) => id !== action.payload)
    }else if (action.type === ADD) {
        return [...state, {id: Date.now(), title: action. payload}]

    }
    return state
}