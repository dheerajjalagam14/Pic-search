import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
    'Client-ID 69a5705e2634ca6338f73b77d7eed5b19321211ab75c6736076079170a34ba99'
  }
})
