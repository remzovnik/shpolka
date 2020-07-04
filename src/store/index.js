import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions/actions';
import mutations from './mutations/mutations';
import getters from './getters/getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    homePage: {},
    booksPage: {},
    booksList: [],
    book: {},
    authorsPage: {},
    authorsList: [],
    author: {},
  },
  actions,
  mutations,
  getters,
});
