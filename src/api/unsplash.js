import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8bbc988a8bf8b7236f04bb8a6fce98ed2d33d1c18fc47d112e9160d0983de74b'
    }
});