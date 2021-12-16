import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm'

export const LoginScreen = ({startLogin}) => {

  let navigate = useNavigate();

  
  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });
  
  const { email, password } = formValues;
  
  const handleClick  = () => {
    console.log("handleClick")
    navigate(`auth/registro`, {replace: true});
  }

  return (
    <div className='login-container  lavander-color position-absolute top-50 start-50 translate-middle'>
      <div className='mb-3'>
        <label htmlFor='FormControlInput1' className='form-label'>
          Correo:
        </label>
        <input
          type='email'
          className='form-control'
          name='email'
          id='FormControlInput1'
          placeholder='name@hotmail.com'
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='FormControlInput1' className='form-label'>
          Contraseña:
        </label>
        <input
          type='password'
          className='form-control'
          id='FormControlInput1'
          placeholder='Contraseña'
          name='password'
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <div className="d-flex justify-content-center col">
        <button onClick={() => {
          startLogin({
            email: email,
            password: password
          });
        }} 
        className="btn btn-secondary" >
          Login
        </button>
      </div>
        <div className=' d-flex justify-content-center'>

          <div onClick={handleClick} className='mt-2 cursor'>
            Ir al registro
          </div>
        </div>
    </div>
  );
};
