import React, { useState } from 'react'
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';

import { response, responseRegiter } from '../serivices/auth';

import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';



export const AppRouter = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [checking, setChecking] = useState(false);
    const [userName, setCUserName] = useState('');

    // useEffect(() => {
        // Conectar con el servicio de auth

        // response().then(resp => {
        //   console.log(resp)
          // setIsLoggedIn(resp.data.slice(1,11))
          
      // })

      // }, [setChecking, setIsLoggedIn]);

    const startLogin =({email, password}) => {
      console.log(email)
      console.log(password)

      setChecking(true)
      response(email, password).then(resp => {
        console.log(resp)
        setCUserName(email)
        setIsLoggedIn(true)
        setChecking(false)
      }).catch(
        error => {
          console.log(error)
        }
      )
    }
    
    const startRegister =({first_name, last_name, birth_date, gender, email, password }) => {
      setChecking(true)
      responseRegiter(first_name,
        last_name,
        birth_date,
        gender,
        email, 
        password ).then(resp => {

        setCUserName(email)
        setIsLoggedIn(true)
        setChecking(false)
      }).catch(
        error => {
          console.log(error)
        }
      )
    }

    if (checking) {
        return (
          <div className='container-fluid mt-4'>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
  
                </div>
            </div>
                <h1 className="text-center">Espere...</h1>
          </div>
        );
      }

    

    return (
        <Router>
        <div>
          <Routes >
          {!isLoggedIn ?
            <Route
              path=''
              element={<PublicRouter startRegister={startRegister}  startLogin={startLogin} />}      
            /> :
            <Route
              
              path='/'
              element={<PrivateRouter userName={userName} />}
            />}
            {/* <Route path='login' element={ !isLoggedIn ? <Navigate to="login" />: <PrivateRouter path='/' userName={userName} /> } /> */}
            <Route path='*' element={ !isLoggedIn ? <PublicRouter startRegister={startRegister} startLogin={startLogin} />: <PrivateRouter path='/' userName={userName} /> } />
          </Routes >
        </div>
      </Router>
    )
}