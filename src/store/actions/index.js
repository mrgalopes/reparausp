import { MUDA_STATUS_GLOBAL, ADD_PENDENTE } from '../types';

export const mudaStatusGlobal = status => ({
  type: MUDA_STATUS_GLOBAL,
  payload: status
});

export const addReparo = dispatch => data =>
  dispatch({
    type: ADD_PENDENTE,
    payload: data
  });
