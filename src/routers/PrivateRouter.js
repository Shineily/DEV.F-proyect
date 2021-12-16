import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';

import {Item} from '../components/ecommers/Item'
import {PrincipalScreen} from '../components/PrincipalScreen'
import { Header } from '../components/ecommers/Header'
import {Footer} from '../components/ecommers/Footer'



export const PrivateRouter = ({
    userName
}) => {
    return (
        <>
            <Header userName={userName}/>
            <Routes>
                <Route path="" element={<PrincipalScreen userName={userName}/>}  />
                <Route path="producto/:id" element={<Item/>}  />
                <Route path='*' element={<Navigate to="" />  } />

            </ Routes>
            <Footer/>
        
        </>

      
    )
}
