import React, { Component } from 'react';
import InputSearch from './InputSearch';
import './App.css';
var data = require('./MOCK_DATA_1000');

class App extends Component {
  state = {
    selectedItem : "None",
  }
  searchInput = (item) => {
    this.setState({ selectedItem : `Item: ${item.label} - ${item.value}`})
  }
  render() {
    const {selectedItem} = this.state;
    return (
      <div className="App">  
        <h4>Selected Item - {selectedItem}</h4>
        <InputSearch items={data} searchResult={this.searchInput}/>
      </div>
    );
  }
}

export default App;
