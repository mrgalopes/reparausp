import React from 'react';
import { connect } from 'react-redux';

const ReparoInfo = ({ match, reparos }) => {
  const id = parseInt(match.params.id);
  console.log(reparos);
  const reparo = reparos.find(reparo => reparo.id === id);
  if (!reparo) {
    return <h1>Carregando...</h1>;
  }
  return (
    <div className='container'>
      <img src={reparo.img} alt='reparo' style={{ width: '100%' }} />
      <h2>{reparo.title}</h2>
      <h4>{reparo.status}</h4>
      <p>{reparo.description}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  reparos: state.repara
});

export default connect(
  mapStateToProps,
  null
)(ReparoInfo);
