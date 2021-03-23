import { CHANGE_SEARCHFIELD, REQUEST_USERS_PENDING, REQUEST_USERS_SUCCESS, REQUEST_USERS_FAILED, ADD_USER } from './constants';

const initialStateSearch = {
  searchField: '',
};

export const searchUsers = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload });

    default:
      return state;
  }
};

const initialStateUsers = {
  isPending: false,
  error: '',
  users: [],
};

export const requestUsers = (state = initialStateUsers, action = {}) => {
  switch (action.type) {
    case REQUEST_USERS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_USERS_SUCCESS:
      return Object.assign({}, state, { isPending: false, users: action.payload });
    case REQUEST_USERS_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    case ADD_USER:
      return Object.assign({}, state, { users: action.payload });
    default:
      return state;
  }
};
