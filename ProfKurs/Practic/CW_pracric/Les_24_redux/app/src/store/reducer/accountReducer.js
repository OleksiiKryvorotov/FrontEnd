const DEPOSIT = 'DEPOSIT'
const WITHDRAW = 'WITHDRAW'
const CLEAR = 'CLEAR'

export const depositAction = (payload) => ({type: DEPOSIT, payload})
export const withdrawtAction = (payload) => ({type: WITHDRAW, payload})
export const clearAction = () => ({type: CLEAR})




export const accountReducer = (state = 0, action) => {
    if (action.type === DEPOSIT) {
        return state + action.payload
    }else if (action.type === WITHDRAW){
        return state - action.payload
    }else if (action.type === CLEAR){
        return 0
    }
    return state
}