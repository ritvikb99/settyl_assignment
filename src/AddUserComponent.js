import React, { useState } from 'react';
import { addUser } from './actions';
import { connect } from 'react-redux';
import './AddUserComponent.css';
const mapStateToProps = (state) => {
  return {
    users: state.requestUsers.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (users) => {
      dispatch(addUser(users));
    },
  };
};

const AddUserComponent = (props) => {
  const [recievedName, setRecievedName] = useState('');
  const [recievedUsername, setRecievedUsername] = useState('');
  const [recievedEmail, setRecievedEmail] = useState('');
  const [recievedPhone, setRecievedPhone] = useState('');
  const [recievedWebsite, setRecievedWebsite] = useState('');

  const onSubmitButton = () => {
    const user = {
      id: props.users[props.users.length - 1].id + 1,
      name: recievedName,
      email: recievedEmail,
      username: recievedUsername,
      website: recievedWebsite,
      phone: recievedPhone,
    };

    let newUsers = [...props.users];
    newUsers.push(user);
    props.addUser(newUsers);
  };

  const onNameChange = (event) => {
    setRecievedName(event.target.value);
  };
  const onUsernameChange = (event) => {
    setRecievedUsername(event.target.value);
  };
  const onEmailChange = (event) => {
    setRecievedEmail(event.target.value);
  };
  const onPhoneChange = (event) => {
    setRecievedPhone(event.target.value);
  };
  const onWebsiteChange = (event) => {
    setRecievedWebsite(event.target.value);
  };
  return (
    <div className='container'>
      <div className='main br4'>
        <label htmlFor='name'>Name</label>
        <br></br>
        <input className='addUser br-pill' onChange={onNameChange} type='text' name='name'></input>
        <br />
        <label htmlFor='email'>Email</label>
        <br></br>
        <input className='addUser br-pill' onChange={onEmailChange} type='email' name='email'></input>
        <br />
        <label htmlFor='username'>Username</label>
        <br></br>
        <input className='addUser br-pill' onChange={onUsernameChange} type='text' name='username'></input>
        <br />
        <label htmlFor='phone'>Phone</label>
        <br></br>
        <input className='addUser br-pill' onChange={onPhoneChange} type='text' name='phone'></input>
        <br />
        <label htmlFor='website'>Website</label>
        <br></br>
        <input className='addUser br-pill' onChange={onWebsiteChange} type='text' name='webste'></input>
        <br />
        <br></br>
        <br></br>
        <button onClick={onSubmitButton}> Click to Add</button>
        <br />
        <br />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserComponent);
