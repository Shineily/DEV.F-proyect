import React from 'react'
import {  Route, Routes  } from 'react-router-dom';
import { LoginScreen } from '../components/LoginScreen';

export const AuthRouter = () => {
    return (
        <>
            <Routes >
                <Route path='' element={<LoginScreen/>} />
            </Routes >
        </>
    )
}
