import React, { Fragment, useState, useEffect } from 'react';
import CardsList from './CardsList';
import SearchBox from './SearchBox';
import { connect } from 'react-redux';
import './App.css';
import Scroll from './Scroll';
import AddUserComponent from './AddUserComponent';
import { setSearchField, requestUsers } from './actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchUsers.searchField,
    users: state.requestUsers.users,
    error: state.requestUsers.error,
    isPending: state.requestUsers.isPending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => {
      dispatch(setSearchField(event.target.value));
    },
    onRequestUsers: () => {
      dispatch(requestUsers()); //requestUsers(dispatch)    ALT
    },
  };
};

const App = (props) => {
  useEffect(() => {
    props.onRequestUsers();
    // eslint-disable-next-line
  }, []);
  let filteredUsers = props.users.filter((user) => {
    return user.name.toLowerCase().includes(props.searchField.toLowerCase());
  });

  const [isAddUserClicked, setIsAddUserClicked] = useState(false);
  const onAddUserClick = () => {
    if (isAddUserClicked) {
      setIsAddUserClicked(false);
    } else {
      setIsAddUserClicked(true);
    }
  };
  return (
    <Fragment>
      <div className='tc'>
        <h1 className='f1'>SETTYL</h1>
        <div>
          <SearchBox searchChange={props.onSearchChange} />
        </div>
        <br></br>
        <hr />
        {isAddUserClicked ? <AddUserComponent /> : <br />}
        <button className='f6 grow no-underline br-pill ph3 pv2 mb2 dib near-black bg-white' onClick={onAddUserClick}>
          Add User
        </button>
        <Scroll>
          <CardsList users={filteredUsers} />
        </Scroll>
      </div>
    </Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
