import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestUsers } from './actions';
import './App.css';
import CardsList from './Components/CardsList/CardsList';
import SearchBox from './Components/SearchBox/SearchBox';
import Scroll from './Components/Scroll/Scroll';
import AddUserComponent from './Components/AddUserComponent/AddUserComponent';
import ShowChartComponent from './Components/ShowChartComponent/ShowChartComponent';

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
  const [isShowChartClicked, setIsShowChartClicked] = useState(false);

  const onAddUserClick = () => {
    if (isAddUserClicked) {
      setIsAddUserClicked(false);
    } else {
      setIsShowChartClicked(false);
      setIsAddUserClicked(true);
    }
  };

  const onShowChartClick = () => {
    if (isShowChartClicked) {
      setIsShowChartClicked(false);
    } else {
      setIsAddUserClicked(false);
      setIsShowChartClicked(true);
    }
  };

  return (
    <Fragment>
      <div className='tc'>
        <nav className='sticky'>
          <h1 className='f1'>SETTYL</h1>

          <div>
            <SearchBox searchChange={props.onSearchChange} />
          </div>
          <br></br>
          <hr />
        </nav>
        {isAddUserClicked ? <AddUserComponent /> : <br />}
        {isShowChartClicked ? <ShowChartComponent /> : <br />}
        <div className='buttons'>
          <button className='f6 grow no-underline br-pill ph3 pv2 mb2 dib near-black bg-white' onClick={onAddUserClick}>
            Add User
          </button>
          <button className='f6 grow no-underline br-pill ph3 pv2 mb2 dib near-black bg-white' onClick={onShowChartClick}>
            Show Chart
          </button>
        </div>
        <Scroll>
          <CardsList users={filteredUsers} />
        </Scroll>
      </div>
    </Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
