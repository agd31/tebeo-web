import http from './BaseService';

const register = (user) => http.post('/register', user)
  .then(res => Promise.resolve(res.data));

const authenticate = (user) => http.post('/authenticate', user)
  .then(res => Promise.resolve(res.data));

const getUser = () => http.get('/profile')
.then(res => Promise.resolve(res.data));

const logout = () => {
    return http.get('/logout')
      .then(res => Promise.resolve(res.data));
  }
  
  
  export default {
    register,
    authenticate,
    getUser,
    logout
  }