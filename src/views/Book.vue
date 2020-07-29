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
        <a class="v-book__back" href="#" @click.prevent="routeBack">
          <SvgIcon class="v-book__back-icon" name="arrow-left"/>
          Назад
        </a>
      </div>
      <div class="v-book__progress" data-progress-bar aria-hidden></div>
    </article>
  </main>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import SvgIcon from '../components/SvgIcon.vue';

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

    routeBack() {
      this.$router.back();
    },
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.getBook(vm.$route.params.bookId);
    });
  },

  components: {
    SvgIcon,
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

  &__back {
    margin-top: 24px;
    display: inline-flex;
    align-items: center;
    font-size: 24px;
    line-height: 36px;
    color: $color-decor;

    &:hover {
      .v-book__back-icon {
        transform: translateX(-8px);
        transition: transform 0.3s ease-out;
      }
    }
  }

  &__back-icon {
    margin-right: 8px;
    width: 24px;
    height: 24px;
    fill: $color-decor;
    transition: transform 0.15s ease-out;
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
