export default {
  setHomePage(state, payload) {
    state.homePage = payload;
  },

  setBooksPage(state, payload) {
    state.booksPage = payload;
  },

  setBooksList(state, payload) {
    state.booksList = payload;
  },

  setBook(state, payload) {
    state.book = payload;
  },

  setAuthorsPage(state, payload) {
    state.authorsPage = payload;
  },

  setAuthorsList(state, payload) {
    state.authorsList = payload;
  },

  setAuthor(state, payload) {
    state.author = payload;
  },
};
