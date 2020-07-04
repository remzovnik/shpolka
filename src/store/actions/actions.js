const DATA_BASE = 'http://localhost:1337';
const DATA_HOME_PAGE = 'home-page';
const DATA_BOOKS_PAGE = 'book-page';
const DATA_BOOKS_LIST = 'books';
const DATA_AUTHORS_PAGE = 'authors-page';
const DATA_AUTHORS_LIST = 'authors';

export default {
  getHomePage(context) {
    return fetch(`${DATA_BASE}/${DATA_HOME_PAGE}`)
      .then((response) => response.json())
      .then((response) => {
        context.commit('setHomePage', response);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  getBooksPage(context) {
    return fetch(`${DATA_BASE}/${DATA_BOOKS_PAGE}`)
      .then((response) => response.json())
      .then((response) => {
        context.commit('setBooksPage', response);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  getBooksList(context) {
    return fetch(`${DATA_BASE}/${DATA_BOOKS_LIST}`)
      .then((response) => response.json())
      .then((response) => {
        context.commit('setBooksList', response);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  getBook(context, payload) {
    return fetch(`${DATA_BASE}/${DATA_BOOKS_LIST}/${payload}`)
      .then((response) => response.json())
      .then((response) => {
        context.commit('setBook', response);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  getAuthorsPage(context) {
    return fetch(`${DATA_BASE}/${DATA_AUTHORS_PAGE}`)
      .then((response) => response.json())
      .then((response) => {
        context.commit('setAuthorsPage', response);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  getAuthorsList(context) {
    return fetch(`${DATA_BASE}/${DATA_AUTHORS_LIST}`)
      .then((response) => response.json())
      .then((response) => {
        context.commit('setAuthorsList', response);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  getAuthor(context, payload) {
    return fetch(`${DATA_BASE}/${DATA_AUTHORS_LIST}/${payload}`)
      .then((response) => response.json())
      .then((response) => {
        context.commit('setAuthor', response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
