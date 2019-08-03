import { combineReducers } from 'redux';
import {
  PENDENTE,
  EM_CONSERTO,
  REPARADO,
  ADD_PENDENTE,
  REMOVE_ITEM,
  MUDA_STATUS_ITEM,
  MUDA_STATUS_GLOBAL
} from '../types';

const initialProblems = [
  {
    id: 1,
    title: 'Buraco na rua',
    description: 'Tem um buraco na Avenida Luciano Gualberto na altura da FAU',
    img: 'https://live.staticflickr.com/2611/4012800968_503bdc5678_b.jpg',
    status: PENDENTE
  },
  {
    id: 2,
    title: 'Acidente de trânsito',
    description:
      'Tem um acidente na Avenida Luciano Gualberto na altura da Praça do Relógio',
    img:
      'https://images.pexels.com/photos/163016/crash-test-collision-60-km-h-distraction-163016.jpeg',
    status: EM_CONSERTO
  },
  {
    id: 3,
    title: 'Buraco na rua',
    description: 'Tem um buraco na Avenida Luciano Gualberto na altura da FAU',
    img: 'https://live.staticflickr.com/2611/4012800968_503bdc5678_b.jpg',
    status: REPARADO
  },
  {
    id: 4,
    title: 'Buraco na calçada',
    description: 'Tem um buraco calçada na frente do IF',
    img: 'https://live.staticflickr.com/2611/4012800968_503bdc5678_b.jpg',
    status: REPARADO
  }
];

const reparaReducer = (state = initialProblems, action) => {
  switch (action.type) {
    case ADD_PENDENTE:
      return [...state, action.payload];
    case MUDA_STATUS_ITEM:
      return state.map(problema =>
        problema.id === action.id
          ? { ...problema, status: action.status }
          : problema
      );
    case REMOVE_ITEM:
      return state.filter(problema => problema.id !== action.id);
    default:
      return state;
  }
};

const initialStatus = PENDENTE;

const statusReducer = (state = initialStatus, action) => {
  switch (action.type) {
    case MUDA_STATUS_GLOBAL:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  repara: reparaReducer,
  status: statusReducer
});
