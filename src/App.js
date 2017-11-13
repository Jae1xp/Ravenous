import React, { Component } from 'react'; //imports React and it's component
import './App.css'; //imports css styling
//import logo from './logo.svg'; //imports the new logo 
import BusinessList from './components/BusinessList/BusinessList.js'; //imports BusinessList instance
import SearchBar from './components/SearchBar/SearchBar.js'; //imports SearchBar instance

class App extends Component {
  render() {
    return (
      <div className="App">
		  <h1>ravenous</h1>
		  <SearchBar />
		  <BusinessList />
	  </div>
    );
  }
}

export default App;
