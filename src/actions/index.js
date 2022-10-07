import data from '../apis/data';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_DATA,
  FETCH_DATA,
  FETCH_DATAS,
  DELETE_DATA,
  EDIT_DATA
} from './types';



export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createData = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await data.post('/data', { ...formValues, userId });

  dispatch({ type: CREATE_DATA, payload: response.data });
  history.push('/client');
};

export const fetchDatas = () => async dispatch => {
  const response = await data.get('/data');

  dispatch({ type: FETCH_DATAS, payload: response.data });
};

export const fetchData = id => async dispatch => {
  const response = await data.get(`/data/${id}`);

  dispatch({ type: FETCH_DATA, payload: response.data });
};


export const editData = (id, formValues) => async dispatch => {
  const response = await data.patch(`/data/${id}`, formValues);

  dispatch({ type: EDIT_DATA, payload: response.data });
  history.push('/client');
};

export const deleteData = id => async dispatch => {
  await data.delete(`/data/${id}`);

  dispatch({ type: DELETE_DATA, payload: id });
  history.push('/client');
};
