import React, { useState } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { addReparo } from '../../store/actions';
import { Redirect } from 'react-router-dom';
import { PENDENTE } from '../../store/types';

const ReparoForm = ({ addReparo }) => {
  const [formData, setFormData] = useState({
    id: uuid.v4(),
    name: '',
    description: '',
    imageUrl: ''
  });
  const [submit, setSubmit] = useState(false);
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    const { name, description, imageUrl } = formData;
    if (!(name === '' && description === '' && imageUrl === '')) {
      console.log(formData);
      const data = {
        id: formData.id,
        title: formData.title,
        description: formData.description,
        img: formData.imageUrl,
        status: PENDENTE
      };
      addReparo(data);
      setSubmit(true);
    }
  };

  if (submit) {
    return <Redirect to='/' exact />;
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='title'>Título</label>
          <input
            type='text'
            name='title'
            placeholder='Digite aqui o título...'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <textarea
            name='description'
            placeholder='Digite aqui o título...'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='imageUrl'>Link da Imagem</label>
          <input
            type='text'
            name='imageUrl'
            placeholder='Digite aqui o título...'
            onChange={onChange}
          />
        </div>
        <button type='submit'>Adicionar</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addReparo: addReparo(dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(ReparoForm);
