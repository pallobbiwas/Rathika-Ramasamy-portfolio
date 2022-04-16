import React from 'react';
import imge from '../images/banner/404.jpg';
import './Notfound.css';

const Notfound = () => {
    return (
        <div className='container'>
            <img className='img-contain' src={imge} alt="" />
        </div>
    );
};

export default Notfound;