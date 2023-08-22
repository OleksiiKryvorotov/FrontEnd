const defaultState = [
    { "title": "Buy groceries", "userId": 1, "id": 1, done: false }, 
    { "title": "Finish homework", "userId": 2, "id": 2, done: false }, 
    { "title": "Go for a run", "userId": 1, "id": 3, done: false }, 
    { "title": "Call a friend", "userId": 3, "id": 4, done: false },
    { "title": "Work", "userId": 3, "id": 5, done: false },
    { "title": "Go for a walk", "userId": 3, "id": 6, done: false }
];

const ADD ='[TASKS] ADD'
const REMOVE='[TASKS] REMOVE'
const CLEAR='[TASKS] CLEAR'
const CHANGE_CHECKBOX='[TASKS] CHANGE_CHECKBOX'


export const addAction = (payload) => ({type: ADD, payload})
export const removeAction = (payload) => ({type: REMOVE, payload})
export const clearAction = () => ({type: CLEAR})
export const changeCheckboxAction = (id, def) => ({type: CHANGE_CHECKBOX, payload: {id, def}})

export const tasksReducer = (state=defaultState, action) => {
    if (action.type === ADD) {
        return [...state, {id: Date.now(),  ...action.payload}]
    } else if (action.type === REMOVE) {
        return state.filter(({id}) => id !== action.payload)
    } else if (action.type === CLEAR) {
        return []
    }
    else if (action.type === CHANGE_CHECKBOX) {
        const targetPost = state.find(elem => elem.id ===action.payload.id) 
        targetPost.done = action.payload.def  
        return [...state]     
    }    
    
    return state
}