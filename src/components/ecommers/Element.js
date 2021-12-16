import React from 'react';
import { useNavigate } from 'react-router-dom';


export const Element = ({ description, image, product_name, _id }) => {

  let navigate = useNavigate();



  const handleClick  = () => {
    console.log("handleClick")
    navigate(`producto/${_id}`);
  }


  return (
    <div className="col">
      <div className='card ' onClick={handleClick}>
        <img src={image} className='card-img-top' alt='...' />
        <div className='card-body'>
          <div className='card-text'>
            <strong className="text-center">{product_name}</strong>
            <div>
            {description}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
