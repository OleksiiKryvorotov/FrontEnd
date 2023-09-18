import './App.css';
import FormItem from './components/FormItem';

function App() {
  return (
  <div>
   <FormItem
     title='Registration' 
     infoText='By registering on the site, you agree to our Rules and Privacy Policy and consent to the newsletter.'
     btn={{ submit: 'Registration', redirect: 'Login'}}
     formType='registration'
    />

   <FormItem
     title='Login'
     infoText='Reset password'
     btn={{ submit: 'Login', redirect: 'Registration'}}
     formType='login'
    />

   <FormItem
     title='Reset password'
     infoText='The temporary password is valid for 24 hours.'
     btn={{ submit: 'Send' }}    
     formType='reset_password' 
    />

  </div>
  );
}

export default App;
