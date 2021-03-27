import React, { useState } from 'react';
import { addUser } from '../../actions';
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
    let list = document.getElementsByClassName('resetable');
    for (let element of list) {
      element.value = '';
    }
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
        <div className='inputWrapper'>
          <label htmlFor='name'>Name</label>
          <br></br>
          <input
            className='addUser br3 pa2 input-reset ba bg-transparent hover-white w-100 resetable'
            onChange={onNameChange}
            type='text'
            name='name'
          ></input>
          <br />
        </div>
        <div className='inputWrapper'>
          <label htmlFor='email'>Email</label>
          <br></br>
          <input
            className='addUser br3 pa2 input-reset ba bg-transparent hover-white w-100 resetable'
            onChange={onEmailChange}
            type='email'
            name='email'
          ></input>
          <br />
        </div>
        <div className='inputWrapper'>
          <label htmlFor='username'>Username</label>
          <br></br>
          <input
            className='addUser br3 pa2 input-reset ba bg-transparent hover-white w-100 resetable'
            onChange={onUsernameChange}
            type='text'
            name='username'
          ></input>
          <br />
        </div>
        <div className='inputWrapper br3'>
          <label htmlFor='phone'>Phone</label>
          <br></br>
          <input
            className='addUser br3 pa2 input-reset ba bg-transparent hover-white w-100 resetable'
            onChange={onPhoneChange}
            type='text'
            name='phone'
          ></input>
          <br />
        </div>
        <div className='inputWrapper'>
          <label htmlFor='website'>Website</label>
          <br></br>
          <input
            className='addUser br3 pa2 input-reset ba bg-transparent hover-white w-100 resetable'
            onChange={onWebsiteChange}
            type='text'
            name='webste'
          ></input>
          <br />
        </div>
        <br></br>
        <br></br>
        <button className='white grow b pv2 ph3 hover-bg-near-black bn br3 hover-shadow-inner' onClick={onSubmitButton}>
          Click to Add
        </button>
        <br />
        <br />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserComponent);
