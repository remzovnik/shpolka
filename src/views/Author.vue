<template>
  <main class="v-author">
    <div class="container">
      <h1 class="page-title" v-if="author.name">{{author.name}}</h1>
      <div class="v-author__text" v-if="author.desc" v-html="author.desc">
      </div>
      <ul class="v-author__list">
        <li
          v-for="(item, index) in author.books"
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
import { mapActions, mapState } from 'vuex';
import CBookCard from '@/components/BookCard.vue';

export default {
  name: 'VAuthor',

  computed: {
    ...mapState([
      'author',
    ]),
  },

  methods: {
    ...mapActions([
      'getAuthor',
    ]),
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.getAuthor(vm.$route.params.authorId);
    });
  },

  components: {
    CBookCard,
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
