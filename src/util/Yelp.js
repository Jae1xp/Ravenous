const clientId = 'SF0eY22rqC-RevSonWYEjQ';
const secret = 'pq6rJJqi1CSa3LoHV4O8fqwiPuoOL4YcdcXkJMSNRGa2ZZzrkNp9WiGULazi9T83';
let accessToken = '';

const Yelp = {
	.getAccessToken() {
		if (accessToken) {
			return new Promise(resolve => resolve(accessToken));
		}
		return fetch(`https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`, { method: 'POST' }).then(response => {
			return response.json();
		}).then(jsonResponse => {
			accessToken = jsonResponse.access_token;
		})
	}
}