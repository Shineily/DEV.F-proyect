import React, {useContext} from 'react';

import {ShopyContext} from '../../Ecommerces'

export const Header = ({userName="Inicio"}) => {

  const { shopy } = useContext(ShopyContext);

  return (
    <div>
      <nav className='navbar navbar-light lavander-color'>
        <div className='container-fluid'>
        <div>
            <i className="fas fa-user-circle"></i>
            <span className='ms-2'>
              {userName}

            </span>
        </div>
          <img className="navbar-icon m-auto" src={'https://images.squarespace-cdn.com/content/v1/5433ac62e4b0e2920961b3e6/1465464491237-6HDA9SDT68V0HX3SIMYR/Silla_alta.png?format=1000w'} alt="..." />
        
          <i className="fas fa-shopping-cart fa-2x float-end position-relative">
          
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {shopy}

            </span>
          </i>
        </div>
        
      </nav>
    </div>
  );
};
