const defaultState = [
    {
        id: 1,
        name: 'Alex',
        lastname: 'Pupkov',
        age: 40,
        gender: 'man'
    },
    {
        id: 2,
        name: 'Katrin',
        lastname: 'Hummel',
        age: 32,
        gender: 'frau'
    },
    {
        id: 3,
        name: 'Mimi',
        lastname: 'Lutzov',
        age: 17,
        gender: 'frau'
    },
    {
        id: 4,
        name: 'Eric',
        lastname: 'Speher',
        age: 19,
        gender: 'man'
    },
]

const REMOVE ='REMOVE'
const ADD ='ADD'

export const removeAction = (payload) => ({type: REMOVE, payload})
export const addAction = (payload) => ({type: ADD, payload})

export const userReducer = (state = defaultState, action) => {
    if (action.type === REMOVE) {
        return state.filter(({id}) => id!== action.payload)
    }else if (action.type === ADD) {
        return [...state, {id: Date.now(), ...action.payload}]
    }
   
    return state
}