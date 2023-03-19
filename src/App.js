
import { useState } from 'react';
import sollogo from './assets/logo.jpg'
import {validateEmail, validatePassword} from './utils/regex'

import './styles.css'

function App() {

    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")


    const[emailErr, setEmailErr] = useState(false);
    const[passwordErr, setPasswordErr] = useState(false);

    const validate = () => {
      if(!validateEmail.test(email)){
        setEmailErr(true)
      }else{
        setEmailErr(false)
      }

      if(!validatePassword.test(password)){
        setPasswordErr(true)
      }else{
        setPasswordErr(false)
      }
      
    };



  return (
   <div className="container">
    <div className="container-login">
      <div className="wrap-login">
        <form className="login-form">
          <span className="login-form-title">Bem Vindo!</span>
          <span className="login-form-title">
            <img src={sollogo} alt="Solutis" />
          </span>

          <div className="wrap-input">
            <input 
              className={email !=="" ? 'has-val input' : 'input'}
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <span className="focus-input" data-placeholder= "E-mail"></span>
            {emailErr && <p>Por Favor digite um email valido!</p>}
          </div>

          <div className="wrap-input">
            <input 
              className={password !=="" ? 'has-val input' : 'input'} 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <span className="focus-input" data-placeholder= "Senha"></span>
            {passwordErr && <p>Por Favor digite uma senha mais segura!</p>}
          </div>

          <div className="container-login-form-btn">
            <button name='login' disabled="" type="button" onClick={validate} className="login-form-btn">Login</button>
          </div>

          <div className="text-center">
            <span className="txt1">Não possui conta?</span>

            <a className="txt2" href="#">Criar Conta</a>
          </div>

        </form>
      </div>
    </div>
   </div>
  );
}

export default App;
