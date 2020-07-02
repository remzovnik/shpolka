<template>
  <main class="v-authors">
    <div class="container">
      <h1 class="page-title" v-if="AUTHORS_PAGE.title">{{AUTHORS_PAGE.title}}</h1>
      <div class="v-authors__desc" v-if="AUTHORS_PAGE.desc">{{AUTHORS_PAGE.desc}}</div>

      <ul class="v-books__list">
        <li
          v-for="(item, index) in AUTHORS_LIST"
          :key="`authors-${item}-${index}`"
          class="v-authors__item"
        >
          <router-link
            :to="{name: 'author', params: {authorId: item.id}}"
            class="v-authors__link">
            {{item.name}}
          </router-link>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'VAuthors',

  methods: {
    ...mapActions([
      'getAuthorsPage',
      'getAuthorsList',
    ]),
  },

  computed: {
    ...mapGetters([
      'AUTHORS_PAGE',
      'AUTHORS_LIST',
    ]),
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.getAuthorsPage();
      vm.getAuthorsList();
    });
  },
};
</script>

<style lang="scss">
.v-authors {
  padding: 80px 0;

  &__desc {
    margin-bottom: 24px;
    text-align: center;
    line-height: 1.6;
  }

  &__item {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  &__link {
    font-size: 20px;
  }
}
</style>
