import React from 'react'
import { addWordAction } from '../../store/reducers/wordsReducer';
import { useDispatch } from 'react-redux'

export default function AddWordForm() {

  const dispatch = useDispatch();

  const submit = e => {
    e.preventDefault();
    const { rus, eng, lang } = e.target;
    const new_word = {
      id: Date.now(),
      rus: rus.value,
      eng: eng.value,
      lang: lang.value
    }
    dispatch(addWordAction(new_word));
    e.target.reset()
  }

  return (
    <form onSubmit={submit}>
      <input type='text' placeholder='RUS' name='rus' />
      <input type='text' placeholder='ENG' name='eng' />
      <select name='lang'>
        <option value='rus'>RUS</option>
        <option value='eng'>ENG</option>
      </select>
      <button>Add card</button>
    </form>
  )
}

