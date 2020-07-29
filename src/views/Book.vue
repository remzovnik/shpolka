<template>
  <main>
    <article class="v-book" v-progress-bar>
      <div class="container">
        <div class="v-book__wrapper">
          <h1 class="page-title" v-if="book.title">{{book.title}}</h1>
          <router-link
            v-if="book.author"
            class="v-book__author"
            :to="{name: 'author', params: {authorId: book.author.id}}"
          >
            {{book.author.name}}
          </router-link>
          <div class="v-book__text"
            v-if="book.text"
            v-html="book.text">
          </div>
        </div>
      </div>
      <div class="v-book__progress" data-progress-bar aria-hidden></div>
    </article>
  </main>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'VBook',

  computed: {
    ...mapState([
      'book',
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
  position: relative;
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

  &__progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background-color: $color-decor;
    transform: scaleX(0);
    transform-origin: 0 50%;
  }
}
</style>
