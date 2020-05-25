<template>
  <div class="v-home">
    <div class="container">
      <h1 class="v-home__title page-title">{{title}}</h1>

      <div class="v-home__desc" v-html="desc"></div>

      <blockquote
        class="v-home__blockquote"
        :style="`background-image: url('${quoteBackgroundImage}')`"
      >
        <span class="v-home__blockquote-text">
          {{quote}}
          <cite class="v-home__blockquote-author">{{quoteAuthor}}</cite>
        </span>
      </blockquote>
    </div>
  </div>
</template>

<script>
import home from '../data/home.json';

export default {
  name: 'VHome',

  data() {
    return {
      title: home.title,
      desc: home.desc,
      quoteBackgroundImage: home.quoteBackgroundImage,
      quote: home.quote,
      quoteAuthor: home.quoteAuthor,
    };
  },
};
</script>

<style lang="scss">
.v-home {
  padding-top: 100px;
  background-color: $color-beige;

  &__title {
    margin-bottom: 24px;
  }

  &__desc {
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 1.6;
  }

  &__blockquote {
    margin-left: -$container-padding-mobile;
    margin-right: -$container-padding-mobile;
    padding: 36px $container-padding-mobile;
    position: relative;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    font-family: $font-family-accident;
    font-size: 22px;
    font-weight: 300;
    line-height: 1.6;
    color: $color-white;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($color-black, 0.8);
    }
  }

  &__blockquote-text {
    position: relative;
    z-index: 1;
  }

  &__blockquote-author {
    margin-top: 16px;
    display: block;
    text-align: right;
    font-size: 26px;
  }
}
</style>
