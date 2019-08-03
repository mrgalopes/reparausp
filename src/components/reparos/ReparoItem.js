import React from 'react';

const ReparoItem = ({ problema }) => {
  return (
    <div className='card'>
      <img src={problema.img} alt='Imagem' />
      <div className='text'>
        <h3>{problema.title}</h3>
        <hr className='hr' />
        <p>{problema.description}</p>
      </div>
    </div>
  );
};

export default ReparoItem;
