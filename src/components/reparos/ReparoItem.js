import React from 'react';
import { Link } from 'react-router-dom';

const ReparoItem = ({ problema }) => {
  return (
    <Link
      className='link'
      to={'/' + problema.id}
      style={{ textDecoration: 'none' }}
    >
      <div className='card'>
        <img src={problema.img} alt='Imagem' />
        <div className='text'>
          <h3>{problema.title}</h3>
          <hr className='hr' />
          <p>{problema.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ReparoItem;
