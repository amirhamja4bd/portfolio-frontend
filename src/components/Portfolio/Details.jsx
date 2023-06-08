import React from 'react';
import { useNavigate } from 'react-router-dom';

const Details = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
      };

    return (
        <div className='py-5'>
            <button className='secondary-button p-0 py-1 px-2' onClick={handleClick}>Go Back</button>
        </div>
    );
};

export default Details;