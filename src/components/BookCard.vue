<template>
  <article class="c-book-card">
    <div class="c-book-card__img-container">
      <img
        class="c-book-card__img"
        :src="`http://localhost:1337${image.url}`"
        :alt="imageAlt || ' '"
      >
    </div>
    <div class="c-book-card__desc">
      <router-link
        class="c-book-card__link"
        :to="{name: 'book', params: {bookId: id}}"
      >
        <h2 class="c-book-card__title" v-if="title">{{title}}</h2>
      </router-link>
      <div class="c-book-card__info">
        <router-link
          v-if="author.id && author.name"
          class="c-book-card__link"
          :to="{name: 'author', params: {authorId: author.id}}"
        >
          {{author.name}},
        </router-link>
        {{year}}
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'CBookCard',

  props: {
    id: {
      type: Number,
      required: true,
    },

    title: {
      type: String,
      required: true,
      default: '',
    },

    author: {
      type: [Object, Number],
      required: false,
    },

    year: {
      type: Number,
      required: true,
    },

    image: {
      type: Object,
      required: true,
    },

    imageAlt: {
      type: String,
      required: true,
      default: ' ',
    },
  },

  inheritAttrs: false,
};
</script>

<style lang="scss">
.c-book-card {
  display: flex;
  padding: 24px 0;
  border-bottom: 1px solid $color-primary;

  &__img-container {
    margin-right: 16px;
    flex: 0 0 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
  }

  &__link {
    text-decoration: none;
  }

  &__title {
    margin-bottom: 8px;
    font-family: $font-family-accident;
    font-size: 22px;
    line-height: 1.4;
    color: $color-primary;
  }

  &__info {
    font-size: 14px;
    line-height: 20px;
    color: $color-gray;
  }
}
</style>
