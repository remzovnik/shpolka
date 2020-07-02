<template>
  <main>
    <article class="v-book">
      <div class="container">
        <div class="v-book__wrapper">
          <h1 class="page-title" v-if="BOOK.title">{{BOOK.title}}</h1>
          <router-link
            v-if="BOOK.author"
            class="v-book__author"
            :to="{name: 'author', params: {authorId: BOOK.author.id}}"
          >
            {{BOOK.author.name}}
          </router-link>
          <div class="v-book__text"
            v-if="BOOK.text"
            v-html="BOOK.text">
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'VBook',

  computed: {
    ...mapGetters([
      'BOOK',
    ]),
  },

  methods: {
    ...mapActions([
      'getBook',
    ]),
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.getBook(vm.$route.params.bookId);
    });
  },
};
</script>

<style lang="scss">
.v-book {
  padding: 80px 0;

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__author {
    margin-bottom: 16px;
    font-size: 22px;
    color: $color-decor;
  }

  &__text {
    align-self: start;
    font-size: 16px;
    line-height: 1.6;
  }
}
</style>
