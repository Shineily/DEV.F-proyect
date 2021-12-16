import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { responseItem } from '../../serivices/item';

import {ShopyContext} from '../../Ecommerces'

export const Item = () => {
  const location = useLocation();
  const { id } = useParams();

  const [item, setItem] = useState('');
  
  const { shopy, setShopy } = useContext(ShopyContext);

  useEffect(() => {
    console.log(location.pathname);
    console.log(location);

    console.log(id);

    responseItem(id).then((resp) => {
      console.log(resp);
      setItem(resp.data);
    });
  }, [id, location]);

  const handleClick = () =>{  
    setShopy(shopy+1)
  }

  return (
    <div className='container mt-3 mb-3 p-4'>
      <div className='card w-100'>
          <div className='d-flex justify-content-center'>

            <img src={item.image} className='card-img-top imagen-item' alt='...' />
          </div>
        <div className='card-body'>
          <div className='card-text'>
            <strong className='text-center'>{item.product_name}</strong>
            <div>
            <strong className='text-center'>Precio: {item.price}</strong>

            </div>
            <div>{item.description}</div>
            <div className='mt-2 d-flex justify-content-center' onClick={handleClick}>
                <button className='btn btn-info text-white'>
                    <i className="fas fa-shopping-cart me-2"></i>
                    Agregar al carrito
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
