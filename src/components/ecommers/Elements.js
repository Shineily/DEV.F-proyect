import React, {useEffect, useState}  from 'react';
import { response } from '../../serivices/item';


import {Element} from './Element';

export const Elements = () => {

    const [items, setstate] = useState([])

    useEffect(() => {
        // console.log(response().then((resp) => {console.log(resp)}))

        response().then(resp => {
            console.log(resp.data.slice(1,11))
            setstate(resp.data.slice(1,11))
            
        })
  
    }, []);


  return (
    <div className="cards-container d-flex row align-items-center">
        {
            items.map(
                (item) => (

                    <Element key={item._id} {...item}/>
                )
                
            )
        }

    </div>
  );
};
