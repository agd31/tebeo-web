import http from "./BaseService";

const showComic = comic =>
  http.get(`/comics/${comic}`).then(res => Promise.resolve(res.data));

const list = comic =>
  http.get("/comics", comic).then(res => Promise.resolve(res.data));

const showComicAmericano = comic =>
  http
    .get("/comics/americano", comic)
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error("error"));

const showComicEuropeo = comic =>
    http
      .get("/comics/europeo", comic)
      .then(res => Promise.resolve(res.data))
      .catch(error => console.error("error"));

const showComicManga = comic =>
      http
        .get("/comics/manga", comic)
        .then(res => Promise.resolve(res.data))
        .catch(error => console.error("error"));

const searchComic = (comic = {}) =>
  http
    .post("/comics/search", comic)
    .then(res => {
      return res.data;
    })
    .catch(error => console.error("erorrrr"));

export default {
  showComic,
  list,
  showComicAmericano,
  searchComic,
  showComicEuropeo,
  showComicManga
};
