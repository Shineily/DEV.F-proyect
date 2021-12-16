import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm'

export const Register = ({startRegister}) => {

  let navigate = useNavigate();

    const [formValues, handleInputChange] = useForm({
        first_name: '',
        last_name: '',
        birth_date: '',
        gender: 0,
        email: '',
        password: '',
      });
    
    const { 
        first_name,
        last_name,
        birth_date,
        gender,
        email, 
        password 
    
    } = formValues;

    const handleClick  = () => {
      console.log("handleClick")

      navigate(`login`, {replace: true});
    }

  return (
    <div className='login-container  lavander-color position-absolute top-50 start-50 translate-middle'>
      <div className='mb-3'>
        <label htmlFor='FormControlInput1' className='form-label'>
          Primer nombre:
        </label>
        <input
          type='text'
          className='form-control'
          name='first_name'
          id='FormControlInput1'
          placeholder='Agrege un nombre'
          value={first_name}
          onChange={handleInputChange}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='FormControlInput1' className='form-label'>
          Apellido:
        </label>
        <input
          type='text'
          className='form-control'
          id='last_name'
          placeholder='Agregue un apellido'
          name='last_name'
          value={last_name}
          onChange={handleInputChange}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='FormControlInput1' className='form-label'>
          Fecha de cumpleaños:
        </label>
        <input
          type='date'
          className='form-control'
          name='birth_date'
          id='FormControlInput1'
          value={birth_date}
          onChange={handleInputChange}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='FormControlInput1' className='form-label'>
          Genero:
        </label>
        <select name='gender' className='form-select' onChange={handleInputChange} value={gender}>
            <option value="0" hidden>Elige una opción</option>
            <option value="F">Femenino</option>
            <option value="M">Masculino</option>
            <option value="otro">Otro</option>
        </select>
      </div>
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
      <div className='d-flex justify-content-center'>
        <button onClick={() => {
            startRegister({
              email: email,
              password: password,
              first_name: first_name,
              last_name: last_name,
              birth_date: birth_date,
              gender: gender
            });
          }}
          className='btn btn-secondary'>
          Registrarse
        </button>
      </div>
      <div className=' d-flex justify-content-center'>

          <div className='mt-2 cursor' onClick={handleClick}>
            Ir al login
          </div>
        </div>
    </div>
  );
};
