import React from 'react'
import FormItem from '../FormItem'
import s from './style.module.css'

export default function ModalWindow({ modalActive, setModalActive}) {
  return (
   <div className={[s.modal, modalActive ? s.active : ''].join(' ')}>
     <div className={s.modal_content}>  
       <span
        className={s.close_btn}
        onClick={() => setModalActive(false)}
       >
        X</span> 

       <FormItem
          title='Registration' 
          infoText='By registering on the site, you agree to our Rules and Privacy Policy and consent to the newsletter.'
          btn={{ submit: 'Registration', redirect: 'Login'}}
          formType='registration'
        />

    {/* <FormItem
          title='Login'
          infoText='Reset password'
          btn={{ submit: 'Login', redirect:  'Registration'}}
          formType='login'
        />

       <FormItem
          title='Reset password'
          infoText='The temporary password is valid for 24 hours.'
          btn={{ submit: 'Send' }}    
          formType='reset_password' 
        /> */}
      </div>
    </div>
  )
}
