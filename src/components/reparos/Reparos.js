import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReparoItem from './ReparoItem';

class Reparos extends Component {
  render() {
    const { problemas, status } = this.props;
    return (
      <div className='reparos'>
        {problemas
          .filter(problema => problema.status === status)
          .map(problema => (
            <ReparoItem problema={problema} key={problema.id} />
          ))}
      </div>
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
