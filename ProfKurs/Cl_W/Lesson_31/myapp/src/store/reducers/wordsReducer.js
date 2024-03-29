const ADD_WORD = 'ADD_WORD';
const DELETE_WORD = 'DELETE_WORD';
const CHANGE_LANG = 'CHANGE_LANG';
const CHANGE_TO_RUS = 'CHANGE_TO_RUS';
const CHANGE_TO_ENG = 'CHANGE_TO_ENG';

export const addWordAction = payload => ({ type: ADD_WORD, payload });
export const deleteWordAction = payload => ({ type: DELETE_WORD, payload });
export const changeLangAction = payload => ({ type: CHANGE_LANG, payload });
export const changeToRusAction = () => ({ type: CHANGE_TO_RUS });
export const changeToEngAction = () => ({ type: CHANGE_TO_ENG });

export const wordsReducer = (state = [], action) => {
  if(action.type === ADD_WORD){
    return [...state, action.payload]
  } else if(action.type === DELETE_WORD) {
    return state.filter(el => el.id !== action.payload)
  } else if(action.type === CHANGE_LANG) {
    const target_card = state.find(el => el.id === action.payload);
    target_card.lang = target_card.lang === 'rus' ? 'eng' : 'rus'
    return [...state]
  } else if (action.type === CHANGE_TO_RUS) {
    return state.map(el => {
      el.lang = 'rus'
      return el
    })
  } else if(action.type === CHANGE_TO_ENG) {
    return state.map(el => {
      el.lang = 'eng'
      return el
    })
  } else {
    return state
  }
}