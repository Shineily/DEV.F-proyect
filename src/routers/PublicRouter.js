import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginScreen } from '../components/LoginScreen';
import { Register } from '../components/Register';

export const PublicRouter = ({startRegister, startLogin}) => {
    return (
        <>

            <Routes>
                <Route path="login" element={<LoginScreen startLogin={startLogin} />}  />
                <Route path="login/auth/registro" element={<Register startRegister={startRegister} />}  />
                <Route path='*' element={<Navigate to="login" />  } />

            </ Routes>

        </>
    )
}
