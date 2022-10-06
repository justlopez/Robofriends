import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import './App.css';
import Scroll from '../components/Scroll';

class App extends React.Component{
  
    constructor(){
        super()
        this.state = {
            robot:[],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {this.setState({ robot: users})});
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        
    }
    render(){
        const {robot, searchfield} = this.state;
        const filterRobots = robot.filter((robots) =>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if(!robot.length){
            return <h1>Loading</h1>

        }else{
    return(
        <div className='tc'>
        <h1 className='f2'>RobotFriends</h1>
        <SearchBox  searchChange={this.onSearchChange}/>
        <Scroll>
        <CardList Robot={filterRobots}/>
        </Scroll>
        </div>
    )
    }
}
}

export default App;