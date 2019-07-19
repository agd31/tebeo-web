import http from "./BaseService";

const register = user =>
  http.post("/register", user).then(res => Promise.resolve(res.data));

const authenticate = user =>
  http.post("/login", user).then(res => Promise.resolve(res.data));

const getUser = () =>
  http.get("/profile").then(res => Promise.resolve(res.data));

const logout = () => {
  return http.post("/logout").then(res => Promise.resolve(res.data));
};

const addFav = comic =>
  http
    .put("/user/fav", { id: comic })
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error("error"));

const addWish = comic =>
  http
    .put("/user/wish", { id: comic })
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error("error"));

const addHave = comic =>
  http
    .put("/user/owned", { id: comic })
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error("error"));

export default {
  register,
  authenticate,
  getUser,
  logout,
  addFav,
  addWish,
  addHave
};
