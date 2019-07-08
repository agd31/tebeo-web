import http from './BaseService';

const showComic = (comic) => http.get(`/comics/${comic}`)
 .then(res => Promise.resolve(res.data));
 
 const list = (comic) => http.get('/comics', comic)
 .then(res => Promise.resolve(res.data));
 
 
export default {
    showComic,
 list,
}