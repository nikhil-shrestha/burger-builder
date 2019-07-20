import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-2a36d.firebaseio.com/'
});

export default instance;
