<template>
  <main class="v-authors">
    <div class="container">
      <h1 class="page-title">{{title}}</h1>
      <div class="v-authors__desc">{{desc}}</div>

      <ul class="v-books__list">
        <li
          v-for="(item, index) in list"
          :key="`authors-${item}-${index}`"
          class="v-authors__item"
        >
          <router-link
            :to="{name: 'author', params: {authorId: item.authorId}}"
            class="v-authors__link">
            {{item.name}}
          </router-link>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import authorsPage from '../data/authorsPage.json';
import authors from '../data/authors.json';

export default {
  name: 'VAuthors',

  data() {
    return {
      title: authorsPage.title,
      desc: authorsPage.desc,
      list: authors,
    };
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
