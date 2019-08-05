import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReparoItem from './ReparoItem';
import './Reparos.css';
import { PENDENTE } from '../../store/types';

class Reparos extends Component {
  render() {
    const { problemas, status } = this.props;
    return (
      <>
        {status === PENDENTE && (
          <Link to='/add'>
            <button className='btn'>Adicionar</button>
          </Link>
        )}
        <div className='reparos'>
          {problemas
            .filter(problema => problema.status === status)
            .map(problema => (
              <ReparoItem problema={problema} key={problema.id} />
            ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  problemas: state.repara,
  status: state.status
});

export default connect(
  mapStateToProps,
  null
)(Reparos);
