import React, { Component } from 'react';
import { render } from 'react-dom';
import SearchBox from './SearchBox'
import DogList from './DogList'
import Hello from './Hello';
import './style.css';

class App extends Component {
constructor(){
  super()
  this.state = {
    dogs:[
    {name:"Aditya",breed:"Engineer"},
    {name:"Kapil",breed:"Technician"},
    {name:"Satish",breed:"Technician"},
    {name:"Deepak",breed:"Assitant"},
    {name:"Raju",breed:"Jr. Tech"},
  ],
  searchDog:''
  }
}

handleInput = (e)=>{
  // console.log(e.target.value)
  this.setState({ searchDog:e.target.value })
  
}

  render() {
    let filterDogs = this.state.dogs.filter((dog)=>{
      return dog.name.toLowerCase().includes(this.state.searchDog.toLowerCase())
    })
    return (
      <div className="container-fluid text-center">
        <h1>Employee Details.</h1>
        <SearchBox handleInput={this.handleInput} />
        <DogList filterDogs={filterDogs}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
