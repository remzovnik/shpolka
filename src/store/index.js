import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions/actions';
import mutations from './mutations/mutations';
import getters from './getters/getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: [],
    homePage: {},
    booksPage: {},
    books: [],
    book: {},
    authorsPage: {},
    authors: [],
    author: {},
  },
  actions,
  mutations,
  getters,
});
