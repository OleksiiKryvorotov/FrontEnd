const defaultState = []

const ADD ='ADD'

export const addAction = (payload) => ({type: ADD, payload})

export const tasksReducer = (state=defaultState, action) => {
    if (action.type === ADD) {
        return [...state, {id: Date.now(), title: action.payload}]
    }
   
    return state
}