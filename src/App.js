import React, { Fragment } from 'react';
import CardsList from './CardsList';
import SearchBox from './SearchBox';
//import {robots} from './robots';
import './App.css';
import Scroll from './Scroll';

class App extends React.Component{
    constructor(props){
        super(props);         //Always pass props to base constructor
        this.state = {
            robots: [],
            searchField : "",
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
        .then(users=>this.setState({robots: users}));
    }
    onSearchChange = (event)=>{
        this.setState({
            searchField: event.target.value,
        });
    }
    render() {
        let filteredRobots = this.state.robots.filter(robot=>{
            return(robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
        });        
        return(
            <Fragment>
                <div className="tc">
                <h1 className="f1">ReactSearch</h1>
                <h1 className="f1">With JSON placeholder</h1>
                <div><SearchBox searchChange={this.onSearchChange}/></div>
                <br></br>
                <Scroll>
                    <CardsList robots = {filteredRobots} />
                </Scroll>
                </div>
            </Fragment>
        );
    }
}

export default App;