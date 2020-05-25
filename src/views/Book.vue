<template>
  <main>
    <article class="v-book">
      <div class="container">
        <h1 class="v-books__title page-title">{{title}}</h1>
        <div class="v-books__text" v-html="text"></div>
      </div>
    </article>
  </main>
</template>

<script>
// import books from '../data/books.json';

export default {
  name: 'VBook',

  // props: {
  //   title: {
  //     required: true,
  //     default: ' ',
  //   },

  //   text: {
  //     required: true,
  //     default: ' ',
  //   },
  // },

  data() {
    console.log(this.$route.params);

    return {
      title: this.$route.params.title,
      text: this.$route.params.text,
    };
  },
};
</script>

<style lang="scss">
.v-book {
  padding: 80px 0;

  &__text {
    font-size: 16px;
    line-height: 1.6;
  }
}
</style>
