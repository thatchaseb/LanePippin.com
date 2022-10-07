import _ from 'lodash';
import {
  FETCH_DATA,
  FETCH_DATAS,
  CREATE_DATA,
  EDIT_DATA,
  DELETE_DATA
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATAS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_DATA:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_DATA:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_DATA:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_DATA:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
