import React, {createContext, useState} from 'react'
import { AppRouter } from './routers/AppRouter';

export const ShopyContext = createContext({
    shopy: null,
    setShopy: () => {}
  });

export const Ecommerces = () => {

    const [shopy, setShopy] = useState(0)

    return (
        <ShopyContext.Provider value={{ shopy, setShopy }}>
            <AppRouter />
        </ShopyContext.Provider>
    )
}
