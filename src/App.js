import React from 'react'; //imports React and it's component
import './App.css'; //imports css styling
//import logo from './logo.svg'; //imports the new logo 
import BusinessList from './components/BusinessList/BusinessList.js'; //imports BusinessList instance
import SearchBar from './components/SearchBar/SearchBar'; //imports SearchBar instance
import Yelp from './util/Yelp';


class App extends React.Component {
	constructor(props) {
    super(props);
    this.state = {businesses: []};
    this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
		Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses});
    })
	}
  render() {
    return (
      <div className="App">
		  <h1>ravenous</h1>
		  <SearchBar />
		  <BusinessList businesses={businesses} />
	  </div>
    );
  }
}

export default App;
