<template>
  <main class="v-author">
    <div class="container">
      <h1 class="page-title">{{title}}</h1>
      <div class="v-author__text" v-html="text">
      </div>
      <ul class="v-author__list">
        <li
          v-for="(item, index) in list"
          :key="`books-${item}-${index}`"
        >
          <c-book-card
            v-bind="item"
          />
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import CBookCard from '@/components/BookCard.vue';

import authors from '../data/authors.json';
import books from '../data/books.json';

export default {
  name: 'VAuthor',

  mounted() {
    this.getAuthorData();
  },

  methods: {
    getAuthorData() {
      const authorData = authors.find((author) => ((author.authorId === this.$route.params.authorId) ? author : false));

      this.title = authorData.name;
      this.text = authorData.text;
      this.list = books.filter((book) => book.authorId === this.$route.params.authorId);
    },
  },

  components: {
    CBookCard,
  },

  data() {
    return {
      title: null,
      text: null,
      list: null,
    };
  },
};
</script>

<style lang="scss">
.v-author {
  padding: 80px 0;

  &__text {
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 1.6;
  }
}
</style>
