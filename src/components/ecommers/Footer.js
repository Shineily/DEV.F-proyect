import React from 'react';

export const Footer = () => {
  return (
    <div>
      <div className='  w-100 lavander-color'>
        <footer className='py-3'>
          <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
            <li className='nav-item'>
              <div className='nav-link px-2 text-muted'>Home</div>
            </li>
            <li className='nav-item'>
              <div className='nav-link px-2 text-muted'>Features</div>
            </li>
            <li className='nav-item'>
              <div className='nav-link px-2 text-muted'>Pricing</div>
            </li>
            <li className='nav-item'>
              <div className='nav-link px-2 text-muted'>FAQs</div>
            </li>
            <li className='nav-item'>
              <div className='nav-link px-2 text-muted'>About</div>
            </li>
          </ul>
          <p className='text-center text-muted'>© 2021 Company, Inc</p>
        </footer>
      </div>
    </div>
  );
};
