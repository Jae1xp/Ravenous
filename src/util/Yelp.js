const clientId = 'SF0eY22rqC-RevSonWYEjQ';
const secret = 'pq6rJJqi1CSa3LoHV4O8fqwiPuoOL4YcdcXkJMSNRGa2ZZzrkNp9WiGULazi9T83';
let accessToken = '';
const urlCORS = 'https://cors-anywhere.herokuapp.com/';

const Yelp = {
	getAccessToken() {
		if (accessToken) {
			return new Promise(resolve => resolve(accessToken));
		}
		return fetch(`${urlCORS}https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`, { method: 'POST' }).then(response => {
			return response.json();
		}).then(jsonResponse => {
			accessToken = jsonResponse.access_token;
		})
	},
	search (term, location, sortBy) {
		return Yelp.getAccessToken().then(() => {
			return fetch(`${urlCORS}https://api.yelp.com/v3/businesses/search?term=${TERM}&location=${LOCATION}&sort_by=${SORT_BY}`, { headers: { Authorization: `Bearer ${accessToken}`} 
			}).then(response => {
				return response.json();
			}).then(jsonResponse => {
				if (jsonResponse.businesses) {
					return jsonResponse.businesses.map(business => {
						return {
							id: business.id,
						imageSrc: business.image_url,
						name: business.name.
						address: business.location.address1,
						city: business.location.city,
						state: business.location.state,
						zipCode: business.location.zip_code,
						category: business.categories.title,
						rating: business.rating,
						reviewCount: business.review_count
						}
					})
				}
			})
		}
	}
}

export default Yelp;
