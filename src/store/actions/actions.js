const DATA_BASE = 'http://localhost:8080/data';
const DATA_MENU = 'menu.json';
const DATA_HOME_PAGE = 'homePage.json';
const DATA_BOOKS = 'books.json';
const DATA_BOOKS_LIST = 'books';
const DATA_BOOKS_PAGE = 'booksPage.json';
const DATA_AUTHORS_PAGE = 'authorsPage.json';
const DATA_AUTHORS = 'authors.json';
const DATA_AUTHORS_LIST = 'authors';

export default {
  getMenu(context) {
    return fetch(`${DATA_BASE}/${DATA_MENU}`)
      .then((response) => response.json())
      .then((response) => {
        context.commit('setMenu', response);
      })
      .catch((error) => {
        console.log(error);
      });
  },

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

  getBooks(context) {
    return fetch(`${DATA_BASE}/${DATA_BOOKS}`)
      .then((response) => response.json())
      .then((response) => {
        context.commit('setBooks', response);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  getBook(context, payload) {
    return fetch(`${DATA_BASE}/${DATA_BOOKS_LIST}/${payload}.json`)
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

  getAuthors(context) {
    return fetch(`${DATA_BASE}/${DATA_AUTHORS}`)
      .then((response) => response.json())
      .then((response) => {
        context.commit('setAuthors', response);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  getAuthor(context, payload) {
    return fetch(`${DATA_BASE}/${DATA_AUTHORS_LIST}/${payload}.json`)
      .then((response) => response.json())
      .then((response) => {
        context.commit('setAuthor', response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
