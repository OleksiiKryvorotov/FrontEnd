const words = [
    {id:1, value: 'велосипед'},
    {id:2, value: 'ролики'},
    {id:3, value: 'самокат'},
    {id:4, value: 'лыжи'},
    {id:5, value: 'скейт'}
]

const REMOVE = 'REMOVE'
// реализовать процесс добавления в массив со словами добавляемого слова
const ADD = 'ADD'
//--------------------------------------------

export const removeAction = (payload) => ({type: REMOVE, payload})

// реализовать процесс добавления в массив со словами добавляемого слова
export const addAction = (payload) => ({type: ADD, payload})
//--------------------------------------------

export const wordsReducer = (state = words, action) => {
  
    if (action.type === REMOVE) {
        return state.filter(({id}) => id !== action.payload)  
// реализовать процесс добавления в массив со словами добавляемого слова             
    }else if (action.type === ADD) {
        return [...state, {id: Date.now(), value: action.payload }]
    }    
//------------------------------------------    
    return state
}

