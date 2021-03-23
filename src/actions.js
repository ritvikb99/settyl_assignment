import { CHANGE_SEARCHFIELD, REQUEST_USERS_PENDING, REQUEST_USERS_SUCCESS, REQUEST_USERS_FAILED, ADD_USER } from './constants';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text,
});
//requestUsers = (dispatch) => {}          ALT_FOR_BELOW
export const requestUsers = () => (dispatch) => {
  dispatch({ type: REQUEST_USERS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_USERS_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: REQUEST_USERS_FAILED, payload: error }));
};

export const addUser = (users) => ({
  type: ADD_USER,
  payload: users,
});
