import http from './BaseService';

const register = (user) => http.post('/register', user)
  .then(res => Promise.resolve(res.data));

const authenticate = (user) => http.post('/login', user)
  .then(res => Promise.resolve(res.data));

const getUser = () => http.get('/profile')
.then(res => Promise.resolve(res.data));

const logout = () => {
    return http.post('/logout')
      .then(res => Promise.resolve(res.data));
  }
  
  
  export default {
    register,
    authenticate,
    getUser,
    logout
  }