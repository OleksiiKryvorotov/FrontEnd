import React from 'react'
import FormButton from '../FormButton'
import s from './style.module.css'
import FormInput from '../FormInput'
import { useForm } from 'react-hook-form'


export default function FormItem({ title, infoText, btn, formType }) {

  const { register, handleSubmit, reset, formState: { errors }} = useForm({
    mode: 'onChange'
  })

  const emailRegister = register('email', { 
    required: '*This field is required', 
    pattern: {
      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: '*Please enter vakid email adress'
    }
  }) 
  
  const passwordRegister = register('password', {
    required: '*This field',
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      message: '*Your password should contain minimum eight characters, at least one letter, one number and one special character'
    }
  })

  const submit = data => {
    console.log(data);
    reset()
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(submit)}>
      
      <h3>{ title }</h3>

      <div>
        <FormInput 
          type='text'
          placeholder='Email'
          name='email'
          {...emailRegister}
        />

        {errors.email && <p className={s.error_msg}role="alert">{errors.email.message}</p>}

        {
          formType === 'reset_password'
          ? ''
          : <FormInput 
              type='password'
              placeholder='Password'
              name='password'
              {...passwordRegister}
            />         
        }

          {errors.password && <p  className={s.error_msg}role="alert">{errors.password.message}</p>}

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
