import React, { Fragment, useState, useEffect } from 'react';
import CardsList from './CardsList';
import SearchBox from './SearchBox';
//import {robots} from './robots';
import './App.css';
import Scroll from './Scroll';

const App = () => {
  /* constructor(props){
        super(props);         //Always pass props to base constructor
        this.state = {
            robots: [],
            searchField : "",
        };
    } */

  /* componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
        .then(users=>this.setState({robots: users}));
    } */

  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);
  let filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <Fragment>
      <div className='tc'>
        <h1 className='f1'>ReactSearch</h1>
        <h1 className='f1'>With JSON placeholder</h1>
        <div>
          <SearchBox searchChange={onSearchChange} />
        </div>
        <br></br>
        <Scroll>
          <CardsList robots={filteredRobots} />
        </Scroll>
      </div>
    </Fragment>
  );
};

export default App;
