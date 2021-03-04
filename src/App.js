import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { CardList } from './Components/card-list/card-list.component';
import { searchBox } from './Components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((result) => {
        this.setState({ monsters: result });
        console.log(this.setState);
      })
      .catch(console.error);
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filteredMonsters);
    return (
      <div className="App">
        <h1> Monsters Rolodex</h1>
        <searchBox placeholder='search monsters' handleChange ={
          e => {
            this.setState({ searchField: e.target.value },
              () => console.log(this.state));
          }
        } />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
