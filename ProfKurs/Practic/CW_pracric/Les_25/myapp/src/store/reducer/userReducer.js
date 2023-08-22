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
        lastname: 'Speer',
        age: 19,
        gender: 'man'
    },
]

const REMOVE ='[USERS] REMOVE'
const ADD ='[USERS] ADD'
const CLEAR ='[USERS] CLEAR'
const REMOVE_MALE ='[USERS] REMOVE_MALE'
const REMOVE_FEMALE ='[USERS] REMOVE_FEMALE'

export const removeAction = (payload) => ({type: REMOVE, payload})
export const addAction = (payload) => ({type: ADD, payload})
export const clearAction = () => ({type: CLEAR})
export const removeMaleAction = () => ({type: REMOVE_MALE})
export const removeFemaleAction = () => ({type: REMOVE_FEMALE})

export const userReducer = (state = defaultState, action) => {
    if (action.type === REMOVE) {
        return state.filter(({id}) => id!== action.payload)
    }else if (action.type === ADD) {
        return [...state, {id: Date.now(), ...action.payload}]
    }
    else if (action.type === CLEAR) {
        return []
    }
    else if (action.type === REMOVE_MALE) {
        return state.filter(({gender}) => gender !== 'man')
    }
    else if (action.type === REMOVE_FEMALE) {
        return state.filter(({gender}) => gender !== 'frau')
    }
   
    return state
}