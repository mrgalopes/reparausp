import React from 'react';
import { connect } from 'react-redux';
import { mudaStatusGlobal } from '../../store/actions';
import { REPARADO, PENDENTE, EM_CONSERTO } from '../../store/types';
import './Navbar.css';

const Navbar = ({ status, mudaStatus }) => {
  const corPlanoDeFundo = () => {
    switch (status) {
      case PENDENTE:
        return '#EF5B5B';
      case EM_CONSERTO:
        return '#FFBA49';
      case REPARADO:
        return '#20A39E';
      default:
        return '#ff0000';
    }
  };

  const corTexto = () => {
    switch (status) {
      case PENDENTE:
        return '#222';
      case EM_CONSERTO:
        return '#222';
      case REPARADO:
        return '#eee';
      default:
        return '#ff0000';
    }
  };

  const setStatus = e => {
    if (e.target.value !== status) {
      mudaStatus(e.target.value);
    }
  };

  return (
    <header style={{ backgroundColor: corPlanoDeFundo(), color: corTexto() }}>
      <h2>ReparaUSP</h2>

      <ul>
        <li>
          <button
            style={{ color: corTexto() }}
            value={PENDENTE}
            onClick={setStatus}
          >
            Pendentes
          </button>
        </li>
        <li>
          <button
            style={{ color: corTexto() }}
            value={EM_CONSERTO}
            onClick={setStatus}
          >
            Em Conserto
          </button>
        </li>
        <li>
          <button
            style={{ color: corTexto() }}
            value={REPARADO}
            onClick={setStatus}
          >
            Reparados
          </button>
        </li>
      </ul>
    </header>
  );
};

const mapDispatchToProps = dispatch => ({
  mudaStatus: status => dispatch(mudaStatusGlobal(status))
});

const mapStateToProps = state => ({
  status: state.status
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
