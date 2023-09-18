import React from 'react'
import FormButton from '../FormButton'
import s from './style.module.css'
import FormInput from '../FormInput'

export default function FormItem({ title, infoText, btn, formType }) {
  return (
    <form className={s.form}>
      <h3>{ title }</h3>

      <div>
        <FormInput 
          type='text'
          placeholder='Email'
          name='email'
        />

        {
          formType === 'reset_password'
          ? ''
          : <FormInput 
              type='password'
              placeholder='Password'
              name='password'
            />
        }


      </div>

      <p>{ infoText }</p>

      <div>
        <FormButton color='yellow_btn'>{ btn.submit }</FormButton>

        {
          formType === 'reset_password'
          ? ''
          : <FormButton color='white_btn'>{ btn.redirect }</FormButton>
        }
  
      </div>
    </form>
  )
}
