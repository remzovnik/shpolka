<template>
  <main>
    <article class="v-book">
      <div class="container">
        <div class="v-book__wrapper">
          <h1 class="page-title">{{title}}</h1>
          <router-link
            class="v-book__author"
            :to="{name: 'author', params: {authorId: authorId}}"
          >
            {{authorName}}
          </router-link>
          <div class="v-book__text" v-html="text"></div>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import books from '../data/books.json';

export default {
  name: 'VBook',

  mounted() {
    this.getBookData();
  },

  methods: {
    getBookData() {
      const bookData = books.find((book) => ((book.bookId === this.$route.params.bookId) ? book : false));

      this.title = bookData.title;
      this.authorId = bookData.authorId;
      this.authorName = bookData.authorName;
      this.text = bookData.text;
    },
  },

  data() {
    return {
      books,
      title: null,
      text: null,
      authorId: null,
      authorName: null,
    };
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
