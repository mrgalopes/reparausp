import { MUDA_STATUS_GLOBAL } from '../types';

export const mudaStatusGlobal = status => ({
  type: MUDA_STATUS_GLOBAL,
  payload: status
});
