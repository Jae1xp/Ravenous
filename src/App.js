import React from 'react'; //imports React and it's component
import './App.css'; //imports css styling
//import logo from './logo.svg'; //imports the new logo 
import BusinessList from './components/BusinessList/BusinessList.js'; //imports BusinessList instance
import SearchBar from './components/SearchBar/SearchBar'; //imports SearchBar instance

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [business, business, business, business, business, business];


class App extends React.Component {
	//let's go functionality
	//searchYelp(term, location, sortBy) {
		//console.log(`Searching Yelp for ${term}, in ${location}, ${sortBy}`);
	//}
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
